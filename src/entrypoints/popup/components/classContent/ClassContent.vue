<template>
    <div class="classContent">
        <div class="classContent-section">
            <h2>Structure des Classes CSS</h2>

            <div class="classContent-controls">
                <label class="classContent-selectAll">
                    <input
                        type="checkbox"
                        id="classContent-highlight-all"
                        v-model="selectAll"
                        @change="handleSelectAll"
                        class="checkbox"
                    >
                    <span class="material-icons">select_all</span>
                    Tout sélectionner
                </label>

                <button
                    class="btn btn-secondary btn-sm"
                    @click="refreshClasses"
                    :disabled="isLoading"
                >
                    <span class="material-icons">refresh</span>
                    Actualiser
                </button>
            </div>

            <div class="classContent-stats" v-if="classStats.total > 0">
                <div class="badge badge-info">
                    {{ classStats.total }} classes trouvées
                </div>
                <div class="badge badge-primary" v-if="classStats.selected > 0">
                    {{ classStats.selected }} sélectionnées
                </div>
            </div>

            <div class="classContent-tree">
                <div v-if="isLoading" class="classContent-loading">
                    <span class="material-icons">hourglass_empty</span>
                    Analyse des classes en cours...
                </div>

                <div v-else-if="classGroups.length === 0" class="classContent-empty">
                    <span class="material-icons">info</span>
                    Aucune classe CSS trouvée sur cette page
                </div>

                <ul v-else class="classContent-list">
                    <li
                        v-for="group in classGroups"
                        :key="group.name"
                        class="classContent-item"
                    >
                        <div class="classContent-header">
                            <label class="classContent-label">
                                <input
                                    type="checkbox"
                                    :id="`class-${group.name}`"
                                    v-model="group.selected"
                                    @change="handleClassToggle(group)"
                                    class="checkbox"
                                    :data-class="group.name"
                                    :data-color="group.color"
                                >
                                <span class="classContent-className">{{ group.name }}</span>
                                <span class="classContent-count">({{ group.count }})</span>
                            </label>
                        </div>

                        <ul v-if="group.subclasses && group.subclasses.length > 0" class="classContent-sublist">
                            <li
                                v-for="subclass in group.subclasses"
                                :key="subclass.name"
                                class="classContent-subitem"
                            >
                                <label class="classContent-sublabel">
                                    <input
                                        type="checkbox"
                                        :id="`class-${subclass.name}`"
                                        v-model="subclass.selected"
                                        @change="handleSubclassToggle(subclass, group)"
                                        class="checkbox"
                                        :data-class="subclass.name"
                                        :data-color="group.color"
                                    >
                                    <span class="classContent-className">{{ subclass.name }}</span>
                                    <span class="classContent-count">({{ subclass.count }})</span>
                                </label>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// Types
interface ClassItem {
    name: string
    count: number
    selected: boolean
}

interface ClassGroup extends ClassItem {
    color: string
    subclasses: ClassItem[]
}

// État réactif
const classGroups = ref<ClassGroup[]>([])
const selectAll = ref(false)
const isLoading = ref(false)

// Couleurs pour les groupes de classes
const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
    '#FFEEAD', '#D4A5A5', '#9B59B6', '#3498DB',
    '#E67E22', '#2ECC71', '#F1C40F', '#1ABC9C'
]

// Statistiques calculées
const classStats = computed(() => {
    const total = classGroups.value.reduce((acc, group) => {
        return acc + group.count + group.subclasses.reduce((subAcc, sub) => subAcc + sub.count, 0)
    }, 0)

    const selected = classGroups.value.reduce((acc, group) => {
        let count = group.selected ? group.count : 0
        count += group.subclasses.reduce((subAcc, sub) => subAcc + (sub.selected ? sub.count : 0), 0)
        return acc + count
    }, 0)

    return { total, selected }
})

// Fonctions utilitaires
function getRandomColor(): string {
    return colors[Math.floor(Math.random() * colors.length)]
}

function groupClassesByPrefix(classes: [string, number][]): ClassGroup[] {
    const groups: { [key: string]: ClassGroup } = {}

    // Trier les classes
    classes.sort((a, b) => a[0].localeCompare(b[0]))

    // Identifier les classes de base
    const baseClasses = classes.filter(([className]) => !className.includes('-'))

    // Créer les groupes
    baseClasses.forEach(([baseClass, baseCount]) => {
        const subclasses = classes
            .filter(([className]) => className !== baseClass && className.startsWith(baseClass + '-'))
            .map(([name, count]) => ({ name, count, selected: false }))

        groups[baseClass] = {
            name: baseClass,
            count: baseCount,
            selected: false,
            color: getRandomColor(),
            subclasses
        }
    })

    return Object.values(groups)
}

// Gestionnaires d'événements
async function handleSelectAll() {
    for (const group of classGroups.value) {
        group.selected = selectAll.value
        for (const sub of group.subclasses) {
            sub.selected = selectAll.value
        }
        await highlightElements(group.name, selectAll.value, group.color)
        for (const sub of group.subclasses) {
            await highlightElements(sub.name, selectAll.value, group.color)
        }
    }
}

async function handleClassToggle(group: ClassGroup) {
    // Si on désélectionne le groupe, désélectionner toutes les sous-classes
    if (!group.selected) {
        for (const sub of group.subclasses) {
            sub.selected = false
            await highlightElements(sub.name, false, group.color)
        }
    }

    await highlightElements(group.name, group.selected, group.color)
    updateSelectAllState()
}

async function handleSubclassToggle(subclass: ClassItem, group: ClassGroup) {
    await highlightElements(subclass.name, subclass.selected, group.color)
    updateSelectAllState()
}

function updateSelectAllState() {
    const allSelected = classGroups.value.every(group =>
        group.selected && group.subclasses.every(sub => sub.selected)
    )
    selectAll.value = allSelected
}

async function refreshClasses() {
    isLoading.value = true
    try {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true })
        if (!tabs || !tabs[0]) return

        // Exécuter le script pour analyser les classes CSS de la page
        const results = await browser.scripting.executeScript({
            target: { tabId: tabs[0].id! },
            world: 'MAIN',
            func: () => {
                // Récupérer tous les éléments de la page
                const elements = document.getElementsByTagName('*')
                const classCounts = new Map<string, number>()

                // Compter les occurrences de chaque classe
                for (const element of elements) {
                    if (element.classList) {
                        element.classList.forEach(className => {
                            classCounts.set(className, (classCounts.get(className) || 0) + 1)
                        })
                    }
                }

                return Array.from(classCounts.entries())
            }
        })

        const classes = results[0]?.result
        if (classes && Array.isArray(classes)) {
            classGroups.value = groupClassesByPrefix(classes)
        } else {
            classGroups.value = []
        }
    } catch (error) {
        console.error('Erreur lors du chargement des classes:', error)
        classGroups.value = []
    } finally {
        isLoading.value = false
    }
}

async function highlightElements(className: string, highlight: boolean, color: string) {
    try {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true })
        if (!tabs || !tabs[0]) return

        await browser.scripting.executeScript({
            target: { tabId: tabs[0].id! },
            world: 'MAIN',
            func: (className: string, highlight: boolean, color: string) => {
                // Supprimer tous les labels existants pour cette classe
                const existingLabels = document.querySelectorAll(`.owsTools-label[data-class="${className}"]`)
                existingLabels.forEach(label => label.remove())

                const elements = document.getElementsByClassName(className)
                for (const element of elements) {
                    if (highlight) {
                        // Ajouter la bordure
                        ;(element as HTMLElement).style.border = `2px solid ${color}`
                        ;(element as HTMLElement).style.boxSizing = 'border-box'

                        // Créer et ajouter le label
                        const label = document.createElement('div')
                        label.textContent = className
                        label.className = 'owsTools-label'
                        label.setAttribute('data-class', className)
                        label.style.cssText = `
                            position: absolute;
                            top: 0;
                            left: 0;
                            background-color: ${color};
                            color: white;
                            padding: 2px 6px;
                            font-size: 12px;
                            font-family: monospace;
                            border-radius: 3px;
                            z-index: 10000;
                            pointer-events: none;
                        `

                        // S'assurer que l'élément parent a une position relative
                        const parent = element.parentElement
                        if (parent && window.getComputedStyle(parent).position === 'static') {
                            ;(parent as HTMLElement).style.position = 'relative'
                        }

                        // Ajouter le label
                        element.appendChild(label)
                    } else {
                        // Supprimer la bordure
                        ;(element as HTMLElement).style.border = ''
                        ;(element as HTMLElement).style.boxSizing = ''

                        // Supprimer les labels
                        const labels = element.querySelectorAll(`.owsTools-label[data-class="${className}"]`)
                        labels.forEach(label => label.remove())
                    }
                }
            },
            args: [className, highlight, color]
        })
    } catch (error) {
        console.error('Erreur lors de la mise en surbrillance:', error)
    }
}

// Lifecycle
onMounted(() => {
    refreshClasses()
})
</script>

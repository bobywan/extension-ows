<template>
    <div class="configuration">
        <div class="configuration-header">
            <div class="configuration-title-section">
                <h2>Configuration de la Marque</h2>

            </div>
            <div class="configuration-global-actions">
                <button
                    class="btn btn-secondary btn-sm"
                    @click="refreshAllConfigs"
                    :disabled="isGlobalLoading"
                >
                    <span class="material-icons" :class="{ 'spinning': isGlobalLoading }">refresh</span>
                    Tout actualiser
                </button>
                <button
                    class="btn btn-outline btn-sm"
                    @click="exportAllConfigs"
                    :disabled="!hasAnyConfig"
                >
                    <span class="material-icons">download</span>
                    Exporter tout
                </button>
            </div>
        </div>

        <div class="configuration-status" v-if="lastUpdated">
            <span class="badge badge-info">
                <span class="material-icons">schedule</span>
                Dernière mise à jour {{ formatTime(lastUpdated) }}
            </span>
        </div>

        <div class="configuration-grid">
            <div
                v-for="config in configurations"
                :key="config.key"
                class="configuration-section"
                :class="{ 'configuration-section--error': config.error, 'configuration-section--loading': config.loading }"
            >
                <div class="configuration-section-header">
                    <div class="configuration-title">
                        <span class="material-icons">{{ config.icon }}</span>
                        <h3>{{ config.title }}</h3>
                        <span v-if="config.data" class="badge badge-success">{{ getConfigSize(config.data) }}</span>
                        <span v-else-if="config.error" class="badge badge-error">Erreur</span>
                        <span v-else-if="config.loading" class="badge badge-info">Chargement...</span>
                        <span v-else class="badge badge-warning">Non trouvé</span>
                    </div>

                    <div class="configuration-actions">
                        <button
                            class="btn btn-ghost btn-sm"
                            @click="refreshConfig(config)"
                            :disabled="config.loading"
                            :title="`Actualiser ${config.title}`"
                        >
                            <span class="material-icons" :class="{ 'spinning': config.loading }">refresh</span>
                        </button>

                        <button
                            v-if="config.data"
                            class="btn btn-ghost btn-sm"
                            @click="copyConfig(config)"
                            :title="`Copier ${config.title}`"
                        >
                            <span class="material-icons">content_copy</span>
                        </button>

                        <button
                            v-if="config.data"
                            class="btn btn-ghost btn-sm"
                            @click="toggleExpanded(config)"
                            :title="config.expanded ? 'Réduire' : 'Développer'"
                        >
                            <span class="material-icons">{{ config.expanded ? 'expand_less' : 'expand_more' }}</span>
                        </button>
                    </div>
                </div>

                <div class="configuration-content">
                    <div v-if="config.loading" class="configuration-loading">
                        <span class="material-icons spinning">hourglass_empty</span>
                        Recherche de la configuration...
                    </div>

                    <div v-else-if="config.error" class="configuration-error">
                        <div class="configuration-error-content">
                            <span class="material-icons">error</span>
                            <div>
                                <p>{{ config.errorMessage }}</p>
                                <button
                                    class="btn btn-primary btn-sm"
                                    @click="refreshConfig(config)"
                                >
                                    <span class="material-icons">refresh</span>
                                    Rechercher à nouveau
                                </button>
                            </div>
                        </div>
                    </div>

                    <div v-else-if="config.data" class="configuration-code-container">
                        <div class="configuration-code-header">
                            <div class="configuration-code-info">
                                <span class="badge badge-primary">JSON</span>
                                <span class="configuration-code-size">{{ getConfigSize(config.data) }}</span>
                            </div>
                            <div class="configuration-code-actions">
                                <button
                                    class="btn btn-ghost btn-sm"
                                    @click="formatConfig(config)"
                                    :title="config.expanded ? 'Réduire' : 'Développer'"
                                >
                                    <span class="material-icons">{{ config.expanded ? 'unfold_less' : 'unfold_more' }}</span>
                                </button>
                            </div>
                        </div>

                        <div
                            class="configuration-code"
                            :class="{ 'configuration-code--expanded': config.expanded }"
                        >
                            <div
                                :id="`json-container-${config.key}`"
                                class="json-display-container"
                            ></div>
                        </div>
                    </div>

                    <div v-else class="configuration-empty">
                        <span class="material-icons">info</span>
                        <p>Configuration non trouvée sur cette page</p>
                        <button
                            class="btn btn-secondary btn-sm"
                            @click="refreshConfig(config)"
                        >
                            <span class="material-icons">search</span>
                            Rechercher
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import JSONDisplay from 'json-display'

// Types
interface ConfigurationItem {
    key: string
    title: string
    icon: string
    selector: string
    data: any
    loading: boolean
    error: boolean
    errorMessage: string
    expanded: boolean
}

// État réactif
const configurations = ref<ConfigurationItem[]>([
    {
        key: 'brandConfig',
        title: 'brandConfig',
        icon: 'business',
        selector: '#brandConfig',
        data: null,
        loading: false,
        error: false,
        errorMessage: '',
        expanded: false
    },
    {
        key: 'commonConfig',
        title: 'commonConfig',
        icon: 'settings',
        selector: '#commonConfig',
        data: null,
        loading: false,
        error: false,
        errorMessage: '',
        expanded: false
    },
    {
        key: 'dataLayer',
        title: 'dataLayer',
        icon: 'layers',
        selector: 'window.dataLayer',
        data: null,
        loading: false,
        error: false,
        errorMessage: '',
        expanded: false
    },
    {
        key: 'datadog',
        title: 'Datadog (DD_RUM)',
        icon: 'bug_report',
        selector: 'window.DD_RUM',
        data: null,
        loading: false,
        error: false,
        errorMessage: '',
        expanded: false
    }
])

const isGlobalLoading = ref(false)
const lastUpdated = ref<Date | null>(null)

// Propriétés calculées
const hasAnyConfig = computed(() => {
    return configurations.value.some(config => config.data)
})

// Fonctions utilitaires
function formatTime(date: Date): string {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)

    if (minutes < 1) return 'à l\'instant'
    if (minutes === 1) return 'il y a 1 minute'
    if (minutes < 60) return `il y a ${minutes} minutes`

    const hours = Math.floor(minutes / 60)
    if (hours === 1) return 'il y a 1 heure'
    return `il y a ${hours} heures`
}

function getConfigSize(data: any): string {
    if (!data) return '0 B'
    const size = JSON.stringify(data).length
    if (size < 1024) return `${size} B`
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`
    return `${(size / (1024 * 1024)).toFixed(1)} MB`
}

// Fonctions de gestion des configurations
async function loadConfig(config: ConfigurationItem): Promise<void> {
    try {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true })
        if (tabs && tabs[0]) {
            const currentTab = tabs[0]

            // Vérifier si on peut injecter du script dans cet onglet
            if (!currentTab.url || currentTab.url.startsWith('chrome://') || currentTab.url.startsWith('chrome-extension://') || currentTab.url.startsWith('moz-extension://')) {
                config.error = true
                config.errorMessage = `Impossible d'accéder à cette page (URL protégée)`
                return
            }

            try {
                const results = await browser.scripting.executeScript({
                    target: { tabId: currentTab.id! },
                    world: 'MAIN', // Exécuter dans le contexte principal de la page
                    func: (selector: string) => {
                        // Si c'est une propriété window (commence par window.)
                        if (selector.startsWith('window.')) {
                            const prop = selector.replace('window.', '')

                            if (typeof (window as any)[prop] === "undefined") {
                                return null
                            }

                            if ((window as any)[prop] === null) {
                                return null
                            }

                            try {
                                // Faire une copie profonde comme dans l'ancienne version
                                return JSON.parse(JSON.stringify((window as any)[prop]))
                            } catch (error) {
                                return { _error: `Erreur de parsing: ${error.message}` }
                            }
                        }

                        // Pour les sélecteurs DOM
                        try {
                            const element = document.querySelector(selector)
                            if (element) {
                                const content = element.textContent || element.innerHTML
                                try {
                                    return JSON.parse(content)
                                } catch {
                                    return content
                                }
                            }
                            return null
                        } catch (error) {
                            return null
                        }
                    },
                    args: [config.selector]
                })

                const pageData = results[0]?.result

                // Vérifier si c'est une erreur
                if (pageData && typeof pageData === 'object' && pageData._error) {
                    throw new Error(pageData._error)
                }

                // Accepter toutes les valeurs sauf null et undefined
                if (pageData !== null && pageData !== undefined) {
                    config.data = pageData
                    config.error = false
                    config.errorMessage = ''
                    return
                }
            } catch (scriptError) {
                console.warn(`Erreur lors de l'injection de script pour ${config.title}:`, scriptError)
                config.error = true
                config.errorMessage = `Erreur d'injection: ${scriptError.message}`
                return
            }
        }

        // Si aucune donnée trouvée sur la page
        config.data = null
        config.error = true
        config.errorMessage = `La configuration ${config.title} n'a pas été trouvée sur cette page.`
    } catch (error) {
        config.data = null
        config.error = true
        config.errorMessage = `Erreur lors du chargement de ${config.title}: ${error}`
    }
}

async function refreshConfig(config: ConfigurationItem): Promise<void> {
    config.loading = true
    try {
        await loadConfig(config)
    } finally {
        config.loading = false
        lastUpdated.value = new Date()

        // Mettre à jour l'affichage JSON après le refresh
        nextTick(() => {
            renderJsonDisplay(config)
        })
    }
}

async function refreshAllConfigs(): Promise<void> {
    isGlobalLoading.value = true
    try {
        await Promise.all(configurations.value.map(config => {
            config.loading = true
            return loadConfig(config).finally(() => {
                config.loading = false
            })
        }))
    } finally {
        isGlobalLoading.value = false
        lastUpdated.value = new Date()

        // Mettre à jour tous les affichages JSON après le refresh
        nextTick(() => {
            configurations.value.forEach(config => {
                if (config.data) {
                    renderJsonDisplay(config)
                }
            })
        })
    }
}

async function copyConfig(config: ConfigurationItem): Promise<void> {
    if (!config.data) return

    try {
        const jsonString = JSON.stringify(config.data, null, 2)
        await navigator.clipboard.writeText(jsonString)
        console.log(`Configuration ${config.title} copiée`)
    } catch (error) {
        console.error('Erreur lors de la copie:', error)
    }
}

async function exportAllConfigs(): Promise<void> {
    const allConfigs = configurations.value
        .filter(config => config.data)
        .reduce((acc, config) => {
            acc[config.key] = config.data
            return acc
        }, {} as Record<string, any>)

    const jsonString = JSON.stringify(allConfigs, null, 2)

    try {
        await navigator.clipboard.writeText(jsonString)
        console.log('Toutes les configurations exportées')
    } catch (error) {
        console.error('Erreur lors de l\'export:', error)
    }
}

function toggleExpanded(config: ConfigurationItem): void {
    config.expanded = !config.expanded
    // Mettre à jour l'affichage JSON après le changement d'état
    nextTick(() => {
        renderJsonDisplay(config)
    })
}

function formatConfig(config: ConfigurationItem): void {
    // Toggle entre collapsed et expanded pour json-display
    config.expanded = !config.expanded
    nextTick(() => {
        renderJsonDisplay(config)
    })
}

function renderJsonDisplay(config: ConfigurationItem) {
    if (!config.data) return

    const containerId = `json-container-${config.key}`
    const container = document.getElementById(containerId)

    if (container) {
        // Vider le conteneur
        container.innerHTML = ''

        try {
            // Créer l'affichage JSON avec json-display
            // Paramètres : data, openLevels (null = tout ouvert, 0 = tout fermé), styleOptions
            const openLevels = config.expanded ? null : 0
            const jsonElement = JSONDisplay(config.data, openLevels)

            // Ajouter l'élément au conteneur
            container.appendChild(jsonElement)
        } catch (error) {
            console.error('Erreur lors du rendu JSON:', error)
            // Fallback vers JSON.stringify en cas d'erreur
            container.innerHTML = `<pre>${JSON.stringify(config.data, null, 2)}</pre>`
        }
    }
}

// Lifecycle
onMounted(() => {
    refreshAllConfigs()
})
</script>

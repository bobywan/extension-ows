<template>
    <div class="navigation" :class="{ 'navigation--expanded': isExpanded }">
                        <div class="navigation__logo">
            <img src="@assets/images/favicon-32x32.png" alt="OWS Tools Logo">
        </div>

        <nav class="navigation__content">
            <label class="navigation__control" title="Activer/Désactiver le mode design">
                <input
                    type="checkbox"
                    v-model="designModeEnabled"
                    @change="toggleDesignMode"
                    class="navigation__checkbox"
                >
                <span class="material-icons">edit</span>
                <span class="navigation__label">Mode Design</span>
            </label>
            <label class="navigation__control" title="Afficher/Masquer le bouton OWS">
                <input
                    type="checkbox"
                    v-model="owsButtonVisible"
                    @change="toggleOwsButton"
                    class="navigation__checkbox"
                >
                <span class="material-icons">smart_button</span>
                <span class="navigation__label">Bouton OWS</span>
            </label>

            <button
                class="navigation__bo-button"
                @click="openBackOffice"
                :disabled="!isOnSupportedSite || !hasContentObjectId"
                :title="getBackOfficeButtonTitle()"
            >
                <span class="material-icons">admin_panel_settings</span>
                <span class="navigation__label">Back Office</span>
            </button>

            <div class="navigation__separator"></div>
            <button
                v-for="tab in navigationTabs"
                :key="tab.id"
                :class="[
                    'navigation__button',
                    {
                        'navigation__button--active': activeTab === tab.id,
                        'navigation__button--wip': tab.wip,
                        'navigation__button--disabled': tab.disabled
                    }
                ]"
                @click="!tab.disabled && setActiveTab(tab.id)"
                :disabled="tab.disabled"
                :title="tab.disabled ? 'Disponible uniquement sur les sites supportés (Capital, GEO, etc.)' : tab.description"
            >
                <span class="material-icons">{{ tab.icon }}</span>
                <span class="navigation__label">{{ tab.label }}</span>
            </button>
            <div class="navigation__spacer"></div>
            <button
                class="navigation__toggle"
                @click="toggleNavigation"
                title="Étendre/Réduire le menu"
            >
                <span class="material-icons">{{ isExpanded ? 'chevron_left' : 'chevron_right' }}</span>
            </button>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'

// Types
interface NavigationTab {
    id: string
    label: string
    icon: string
    description: string
    wip?: boolean
    disabled?: boolean
}

interface Site {
    key: string
    label: string
    icon: string
    domain: string
}

// Props & Emits
const emit = defineEmits<{
    tabChanged: [tabId: string]
}>()

// État réactif
const activeTab = ref<string>('environmentSite')
const isExpanded = ref<boolean>(false)
const designModeEnabled = ref<boolean>(false)
const owsButtonVisible = ref<boolean>(false)
const isOnSupportedSite = ref<boolean>(false)
const hasContentObjectId = ref<boolean>(false)
const isDevelopment = ref<boolean>(import.meta.env.DEV)

// Configuration des sites avec trigrammes BO
const sites: Site[] = [
    {
        key: 'capital',
        label: 'Capital',
        icon: 'business',
        domain: 'capital.fr'
    },
    {
        key: 'geo',
        label: 'GEO',
        icon: 'public',
        domain: 'geo.fr'
    },
    {
        key: 'caminteresse',
        label: 'Ça m\'intéresse',
        icon: 'psychology',
        domain: 'caminteresse.fr'
    },
    {
        key: 'cuisineactuelle',
        label: 'Cuisine Actuelle',
        icon: 'restaurant',
        domain: 'cuisineactuelle.fr'
    },
    {
        key: 'hbrfrance',
        label: 'HBR France',
        icon: 'menu_book',
        domain: 'hbrfrance.fr'
    },
    {
        key: 'voici',
        label: 'Voici',
        icon: 'star',
        domain: 'voici.fr'
    },
    {
        key: 'femmeactuelle',
        label: 'Femme Actuelle',
        icon: 'face',
        domain: 'femmeactuelle.fr'
    },
    {
        key: 'harpersbazaar',
        label: 'Harper\'s Bazaar',
        icon: 'style',
        domain: 'harpersbazaar.fr'
    },
    {
        key: 'cotemaison',
        label: 'Côté Maison',
        icon: 'home',
        domain: 'cotemaison.fr'
    },
    {
        key: 'hellocoton',
        label: 'Hello Coton',
        icon: 'public',
        domain: 'hellocoton.fr'
    },
    {
        key: 'quoi',
        label: 'Quoi',
        icon: 'public',
        domain: 'quoi.info'
    },
    {
        key: 'selectionshopping',
        label: 'Selection Shopping',
        icon: 'public',
        domain: 'selectionshopping.com'
    }
]

// Mapping des trigrammes pour le Back Office
const siteTrigrammes: Record<string, string> = {
    'capital.fr': 'CAP',
    'geo.fr': 'GEO',
    'caminteresse.fr': 'CAM',
    'cuisineactuelle.fr': 'CAC',
    'hbrfrance.fr': 'HBR',
    'voici.fr': 'VOI',
    'femmeactuelle.fr': 'FAC',
    'harpersbazaar.fr': 'HBZ',
    'cotemaison.fr': 'CTM',
    'hellocoton.fr': 'HCO',
    'quoi.info': 'QUOI',
    'selectionshopping.com': 'SESH'
}

// Configuration des onglets avec logique conditionnelle
const navigationTabs = computed<NavigationTab[]>(() => [
    {
        id: 'environmentSite',
        label: 'Navigation',
        icon: 'swap_horiz',
        description: 'Changer d\'environnement et de site'
    },
    {
        id: 'urlParams',
        label: 'Paramètres URL',
        icon: 'link',
        description: 'Gérer les paramètres d\'URL',
        disabled: !isOnSupportedSite.value
    },
    {
        id: 'configuration',
        label: 'Configuration',
        icon: 'settings',
        description: 'Configuration du site',
        disabled: !isOnSupportedSite.value
    },
    {
        id: 'pageInfo',
        label: 'Informations',
        icon: 'info',
        description: 'Informations sur la page actuelle',
        disabled: !isOnSupportedSite.value
    },
    {
        id: 'classContent',
        label: 'Structure',
        icon: 'code',
        description: 'Structure des classes CSS',
        disabled: !isOnSupportedSite.value
    }
])

// Méthodes utilitaires
function isOnSupportedSiteUrl(url: string): boolean {
    try {
        const urlObj = new URL(url)
        const hostname = urlObj.hostname.toLowerCase()

        return sites.some(site => {
            const domain = site.domain.toLowerCase()
            return hostname.includes(domain) ||
                   hostname.includes(domain.split('.')[0])
        })
    } catch (e) {
        console.error('Error parsing URL:', e)
        return false
    }
}

async function detectSiteSupport() {
    try {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true })
        if (!tabs || !tabs[0]) return

        const currentUrl = tabs[0].url!
        isOnSupportedSite.value = isOnSupportedSiteUrl(currentUrl)

        // Vérifier la présence de content_object_id si on est sur un site supporté
        if (isOnSupportedSite.value) {
            await checkContentObjectId(tabs[0].id!)
        } else {
            hasContentObjectId.value = false
        }

        // Si on n'est pas sur un site supporté et qu'on est sur un onglet désactivé,
        // basculer vers Navigation
        if (!isOnSupportedSite.value && activeTab.value !== 'environmentSite') {
            const currentTabConfig = navigationTabs.value.find(tab => tab.id === activeTab.value)
            if (currentTabConfig?.disabled) {
                setActiveTab('environmentSite')
            }
        }
    } catch (error) {
        console.error('Error detecting site support:', error)
    }
}

// Méthodes
function setActiveTab(tabId: string) {
    activeTab.value = tabId
    emit('tabChanged', tabId)

    // Sauvegarder dans localStorage
    localStorage.setItem('owsTools_activeTab', tabId)
}

function toggleNavigation() {
    isExpanded.value = !isExpanded.value

    // Sauvegarder dans localStorage
    localStorage.setItem('owsTools_navExpanded', isExpanded.value.toString())
}

async function toggleDesignMode() {
    try {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true })
        if (tabs && tabs[0]) {
            await browser.scripting.executeScript({
                target: { tabId: tabs[0].id! },
                func: (enabled: boolean) => {
                    document.designMode = enabled ? 'on' : 'off'
                },
                args: [designModeEnabled.value]
            })
        }

        // Sauvegarder dans localStorage
        localStorage.setItem('owsTools_designMode', designModeEnabled.value.toString())
    } catch (error) {
        console.error('Error toggling design mode:', error)
    }
}

async function toggleOwsButton() {
    try {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true })
        if (tabs && tabs[0]) {
            await browser.scripting.executeScript({
                target: { tabId: tabs[0].id! },
                func: (visible: boolean) => {
                    const owsButton = document.getElementById('owsTools-buttonHtml')
                    if (owsButton) {
                        owsButton.style.display = visible ? 'flex' : 'none'
                    }
                    // Synchroniser le localStorage pour le content script
                    localStorage.setItem('owsTools_owsButtonVisible', visible.toString())
                },
                args: [owsButtonVisible.value]
            })
        }

        // Sauvegarder dans localStorage de l'extension
        localStorage.setItem('owsTools_owsButtonVisible', owsButtonVisible.value.toString())
    } catch (error) {
        console.error('Error toggling OWS button:', error)
    }
}

function loadSavedPreferences() {
    // Charger l'onglet actif
    const savedTab = localStorage.getItem('owsTools_activeTab')
    if (savedTab && navigationTabs.value.some(tab => tab.id === savedTab)) {
        activeTab.value = savedTab
    }

    // Charger l'état d'expansion
    const savedExpanded = localStorage.getItem('owsTools_navExpanded')
    if (savedExpanded === 'true') {
        isExpanded.value = true
    }

    // Charger le mode design
    const savedDesignMode = localStorage.getItem('owsTools_designMode')
    if (savedDesignMode === 'true') {
        designModeEnabled.value = true
    }

    // Charger la visibilité du bouton OWS (par défaut false)
    const savedButtonVisibility = localStorage.getItem('owsTools_owsButtonVisible')
    owsButtonVisible.value = savedButtonVisibility === 'true'
}

async function applyInitialStates() {
    try {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true })
        if (!tabs || !tabs[0]) return

        const tabId = tabs[0].id!

        // Appliquer le mode design si activé
        if (designModeEnabled.value) {
            await browser.scripting.executeScript({
                target: { tabId },
                func: () => {
                    document.designMode = 'on'
                }
            })
        }

        // Appliquer la visibilité du bouton OWS
        await browser.scripting.executeScript({
            target: { tabId },
            func: (visible: boolean) => {
                const owsButton = document.getElementById('owsTools-buttonHtml')
                if (owsButton) {
                    owsButton.style.display = visible ? 'flex' : 'none'
                }
                // Synchroniser le localStorage pour le content script
                localStorage.setItem('owsTools_owsButtonVisible', visible.toString())
            },
            args: [owsButtonVisible.value]
        })
    } catch (error) {
        console.error('Error applying initial states:', error)
    }
}

async function checkContentObjectId(tabId: number) {
    try {
        const results = await browser.scripting.executeScript({
            target: { tabId },
            world: 'MAIN',
            func: () => {
                // Vérifier la présence de content_object_id dans dataLayer
                if (typeof (window as any).dataLayer !== 'undefined' && Array.isArray((window as any).dataLayer)) {
                    const dataLayer = (window as any).dataLayer
                    for (const item of dataLayer) {
                        const contentObjectId = item.content_object_id || item.contentObjectId
                        if (contentObjectId &&
                            contentObjectId !== null &&
                            contentObjectId !== '' &&
                            contentObjectId !== 'none') {
                            return true
                        }
                    }
                }

                // Vérifier dans brandConfig
                const brandConfigScript = document.getElementById('brandConfig')
                if (brandConfigScript) {
                    try {
                        const brandConfig = JSON.parse(brandConfigScript.textContent || '{}')
                        const pageId = brandConfig.pageId || brandConfig.id
                        if (pageId &&
                            pageId !== null &&
                            pageId !== '' &&
                            pageId !== 'none') {
                            return true
                        }
                    } catch (error) {
                        console.error('Erreur parsing brandConfig:', error)
                    }
                }

                // Vérifier dans window.brandConfig
                if (typeof (window as any).brandConfig !== 'undefined') {
                    const brandConfig = (window as any).brandConfig
                    const pageId = brandConfig.pageId || brandConfig.id
                    if (pageId &&
                        pageId !== null &&
                        pageId !== '' &&
                        pageId !== 'none') {
                        return true
                    }
                }

                return false
            }
        })

        hasContentObjectId.value = results[0]?.result || false
    } catch (error) {
        console.error('Error checking content_object_id:', error)
        hasContentObjectId.value = false
    }
}

function getBackOfficeButtonTitle(): string {
    if (!isOnSupportedSite.value) {
        return 'Disponible uniquement sur les sites supportés'
    }
    if (!hasContentObjectId.value) {
        return 'Aucun content_object_id trouvé sur cette page'
    }
    return 'Ouvrir le Back Office de cette page'
}

async function openBackOffice() {
    try {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true })
        if (!tabs || !tabs[0]) return

        const currentUrl = tabs[0].url!
        const urlObj = new URL(currentUrl)
        const hostname = urlObj.hostname.toLowerCase()

        // Trouver le trigramme correspondant au site
        let trigram = ''
        for (const [domain, siteTrigram] of Object.entries(siteTrigrammes)) {
            if (hostname.includes(domain.toLowerCase()) || hostname.includes(domain.split('.')[0].toLowerCase())) {
                trigram = siteTrigram
                break
            }
        }

        if (!trigram) {
            console.error('Site non supporté pour le Back Office')
            return
        }

                // Injecter un script pour récupérer l'ID et le type de page depuis dataLayer
        const results = await browser.scripting.executeScript({
            target: { tabId: tabs[0].id! },
            world: 'MAIN',
            func: () => {
                // Essayer de récupérer l'ID et le type depuis window.dataLayer
                if (typeof (window as any).dataLayer !== 'undefined' && Array.isArray((window as any).dataLayer)) {
                    const dataLayer = (window as any).dataLayer

                                        // Parcourir le dataLayer pour trouver content_object_id ou contentObjectId
                    for (const item of dataLayer) {
                        const contentObjectId = item.content_object_id || item.contentObjectId
                        if (contentObjectId) {
                            // Nettoyer les guillemets simples si présents
                            const cleanContentObjectId = typeof contentObjectId === 'string'
                                ? contentObjectId.replace(/'/g, '')
                                : contentObjectId

                            if (typeof cleanContentObjectId === 'string' && cleanContentObjectId.includes(':')) {
                                const parts = cleanContentObjectId.split(':')
                                const contentType = parts[0] // 'article' ou 'category'
                                const pageId = parts[1]

                                if (pageId && contentType) {
                                    return {
                                        pageId: pageId,
                                        contentType: contentType
                                    }
                                }
                            }
                        }
                    }
                }

                // Fallback: essayer de récupérer depuis brandConfig
                const brandConfigScript = document.getElementById('brandConfig')
                if (brandConfigScript) {
                    try {
                        const brandConfig = JSON.parse(brandConfigScript.textContent || '{}')
                        const pageId = brandConfig.pageId || brandConfig.id
                        if (pageId) {
                            return {
                                pageId: pageId,
                                contentType: 'category'
                            }
                        }
                    } catch (error) {
                        console.error('Erreur parsing brandConfig:', error)
                    }
                }

                // Fallback: essayer de récupérer depuis window.brandConfig
                if (typeof (window as any).brandConfig !== 'undefined') {
                    const brandConfig = (window as any).brandConfig
                    const pageId = brandConfig.pageId || brandConfig.id
                    if (pageId) {
                        return {
                            pageId: pageId,
                            contentType: 'category'
                        }
                    }
                }

                return null
            }
        })

                const pageData = results[0]?.result

                                if (!pageData || !pageData.pageId) {
            console.error('Impossible de récupérer l\'ID de la page')
            // Ouvrir quand même le BO sans l'ID spécifique
            const boUrl = `https://one-web.prismamedia.com/#/${trigram}/page/category`
            browser.tabs.create({ url: boUrl })
            return
        }

        const { pageId, contentType } = pageData

        // Construire l'URL du Back Office selon le type de contenu
        let boUrl = ''

        // Déterminer le chemin selon le préfixe du contentObjectId
        if (contentType === 'article') {
            // Pour les articles : /article/edit/
            boUrl = `https://one-web.prismamedia.com/#/${trigram}/article/edit/${pageId}`
        } else if (contentType === 'category') {
            // Pour les catégories : /page/category/edit/
            boUrl = `https://one-web.prismamedia.com/#/${trigram}/page/category/edit/${pageId}`
        } else {
            // Fallback pour les autres types
            boUrl = `https://one-web.prismamedia.com/#/${trigram}/page/category/edit/${pageId}`
        }

        // Ouvrir dans un nouvel onglet
        browser.tabs.create({ url: boUrl })

    } catch (error) {
        console.error('Erreur lors de l\'ouverture du Back Office:', error)
    }
}

// Watchers
watch(activeTab, (newTab) => {
    emit('tabChanged', newTab)
}, { immediate: true })

// Lifecycle
onMounted(() => {
    loadSavedPreferences()
    detectSiteSupport()
    applyInitialStates()
})

// Observer les changements d'URL pour re-vérifier content_object_id
browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.active) {
        await detectSiteSupport()
    }
})
</script>

<template>
    <div class="environment-site">
        <!-- Section Environnements -->
        <div class="environment-site__section">
            <h2 class="environment-site__title">
                <span class="material-icons">cloud</span>
                Environnements
            </h2>
            <div class="environment-site__grid environment-site__grid--environments">
                <button
                    v-for="env in environments"
                    :key="env.key"
                    :class="[
                        'btn btn--secondary environment-site__button environment-site__button--env',
                        `environment-site__button--${env.key}`,
                        {
                            'btn--active': currentEnvironment === env.key,
                            'btn--disabled': !isSiteSupported
                        }
                    ]"
                    :disabled="!isSiteSupported"
                    @click="(e) => switchEnvironment(env.key, isNewTabClick(e))"
                >
                    <div class="environment-site__button-main">
                        <span class="material-icons">{{ env.icon }}</span>
                        {{ env.label }}
                    </div>
                    <div class="environment-site__button-separator"></div>
                    <div
                        class="environment-site__button-newtab"
                        @click.stop="switchEnvironment(env.key, true)"
                    >
                        <span class="material-icons">open_in_new</span>
                    </div>
                </button>
            </div>
        </div>

        <!-- Section Sites -->
        <div class="environment-site__section">
            <h2 class="environment-site__title">
                <span class="material-icons">language</span>
                Sites
            </h2>
            <div class="environment-site__grid environment-site__grid--sites">
                <button
                    v-for="site in sites"
                    :key="site.key"
                    :class="[
                        'btn btn--secondary environment-site__button environment-site__button--site',
                        `environment-site__button--${site.key}`,
                        { 'btn--active': currentSite === site.key }
                    ]"
                    @click="(e) => switchSite(site.key, isNewTabClick(e))"
                >
                    <div class="environment-site__button-main">
                        <span class="material-icons">{{ site.icon }}</span>
                        {{ site.label }}
                    </div>
                    <div class="environment-site__button-separator"></div>
                    <div
                        class="environment-site__button-newtab"
                        @click.stop="switchSite(site.key, true)"
                    >
                        <span class="material-icons">open_in_new</span>
                    </div>
                </button>
            </div>
        </div>

        <!-- Status -->
        <div v-if="status" class="environment-site__status" :class="`environment-site__status--${status.type}`">
            <span class="material-icons">{{ getStatusIcon(status.type) }}</span>
            {{ status.message }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'

// Types
interface Environment {
    key: string
    label: string
    icon: string
    replacement: string
}

interface Site {
    key: string
    label: string
    icon: string
    domain: string
}

interface Status {
    type: 'success' | 'error' | 'info'
    message: string
}

// Configuration des environnements
const environments: Environment[] = [
    {
        key: 'prod',
        label: 'Prod',
        icon: 'cloud_done',
        replacement: 'www'
    },
    {
        key: 'prod-ows',
        label: 'Prod OWS',
        icon: 'cloud',
        replacement: 'prod-ows'
    },
    {
        key: 'preprod',
        label: 'Preprod OWS',
        icon: 'cloud_sync',
        replacement: 'preprod-ows'
    },
    {
        key: 'recette',
        label: 'Recette OWS',
        icon: 'cloud_queue',
        replacement: 'recette-ows'
    },
    {
        key: 'local',
        label: 'Local',
        icon: 'computer',
        replacement: 'local'
    }
]

// Configuration des sites
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

// État réactif
const currentEnvironment = ref<string>('prod')
const currentSite = ref<string | null>(null)
const isSiteSupported = ref<boolean>(false) // Commencer par false par défaut
const status = ref<Status | null>(null)

// Méthodes utilitaires
function isNewTabClick(event: MouseEvent): boolean {
    return event.target instanceof HTMLElement &&
           event.target.closest('.environment-site__button-newtab') !== null
}

function showStatus(type: Status['type'], message: string) {
    status.value = { type, message }
    setTimeout(() => {
        status.value = null
    }, 3000)
}

function getStatusIcon(type: Status['type']): string {
    switch (type) {
        case 'success': return 'check_circle'
        case 'error': return 'error'
        case 'info': return 'info'
        default: return 'info'
    }
}

function isOnSupportedSite(url: string): boolean {
    try {
        const urlObj = new URL(url)
        // Si ce n'est pas un protocole web normal, ce n'est pas un site supporté
        if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
            return false
        }

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

// Gestion des environnements
async function switchEnvironment(envKey: string, openInNewTab: boolean = false) {
    try {
        console.log('Switching to environment:', envKey, 'in new tab:', openInNewTab)

        const tabs = await browser.tabs.query({ active: true, currentWindow: true })
        if (!tabs || !tabs[0]) {
            throw new Error('No active tab found')
        }

        const currentTab = tabs[0]
        const currentUrl = currentTab.url!
        const env = environments.find(e => e.key === envKey)

        if (!env) {
            throw new Error(`Environment ${envKey} not found`)
        }

        // Créer une nouvelle URL avec le protocole https par défaut
        // pour éviter les problèmes avec les URLs spéciales comme chrome://
        let baseUrl: URL
        try {
            const url = new URL(currentUrl)
            // Si l'URL actuelle a un protocole normal (http/https), on l'utilise
            if (url.protocol === 'http:' || url.protocol === 'https:') {
                baseUrl = url
            } else {
                // Sinon, on crée une nouvelle URL avec https
                baseUrl = new URL('https://example.com')
            }
        } catch (error) {
            // Si l'URL actuelle n'est pas valide, on crée une nouvelle URL avec https
            baseUrl = new URL('https://example.com')
        }

        const hostname = baseUrl.hostname
        const domainParts = hostname.split('.')
        const tld = domainParts.pop() // fr ou com
        const domain = domainParts.pop() // capital

        // Construire la nouvelle URL en forçant https
        let newUrl: string
        const newHostname = `${env.replacement}.${domain}.${tld}`
        if (envKey === 'local') {
            newUrl = `https://${newHostname}:56443${baseUrl.pathname}${baseUrl.search}`
        } else {
            newUrl = `https://${newHostname}${baseUrl.pathname}${baseUrl.search}`
        }

        if (newUrl !== currentUrl) {
            if (openInNewTab) {
                await browser.tabs.create({ url: newUrl })
                showStatus('success', `Nouvel onglet ouvert en ${env.label}`)
            } else {
                await browser.tabs.update(currentTab.id!, { url: newUrl })
                showStatus('success', `Basculé vers ${env.label}`)
            }
            currentEnvironment.value = envKey
        }
    } catch (error) {
        console.error('Error switching environment:', error)
        showStatus('error', 'Erreur lors du changement d\'environnement')
    }
}

// Gestion des sites
async function switchSite(siteKey: string, openInNewTab: boolean = false) {
    try {
        console.log('Switching to site:', siteKey, 'in new tab:', openInNewTab)

        const tabs = await browser.tabs.query({ active: true, currentWindow: true })
        if (!tabs || !tabs[0]) {
            throw new Error('No active tab found')
        }

        const currentTab = tabs[0]
        const currentUrl = currentTab.url!
        const site = sites.find(s => s.key === siteKey)

        if (!site) {
            throw new Error(`Site ${siteKey} not found`)
        }

        // Créer une nouvelle URL avec le protocole https par défaut
        // pour éviter les problèmes avec les URLs spéciales comme chrome://
        let baseUrl: URL
        try {
            const url = new URL(currentUrl)
            // Si l'URL actuelle a un protocole normal (http/https), on l'utilise
            if (url.protocol === 'http:' || url.protocol === 'https:') {
                baseUrl = url
            } else {
                // Sinon, on crée une nouvelle URL avec https
                baseUrl = new URL('https://example.com')
            }
        } catch (error) {
            // Si l'URL actuelle n'est pas valide, on crée une nouvelle URL avec https
            baseUrl = new URL('https://example.com')
        }

        const hostname = baseUrl.hostname

        // Déterminer l'environnement actuel
        let environment = 'prod'
        let port = baseUrl.port

        if (hostname.includes('preprod-ows')) {
            environment = 'preprod-ows'
        } else if (hostname.includes('recette-ows')) {
            environment = 'recette-ows'
        } else if (hostname.includes('prod-ows')) {
            environment = 'prod-ows'
        } else if (hostname.includes('local')) {
            environment = 'local'
            port = port || '56443'
        }

        // Construire la nouvelle URL en forçant https
        let newUrl: string
        if (environment === 'local') {
            const newHostname = `${environment}.${site.domain.split('.')[0]}.${site.domain.split('.')[1]}`
            newUrl = `https://${newHostname}:${port}/`
        } else if (environment === 'prod-ows' || environment === 'preprod-ows' || environment === 'recette-ows') {
            const newHostname = `${environment}.${site.domain.split('.')[0]}.${site.domain.split('.')[1]}`
            newUrl = `https://${newHostname}/`
        } else {
            // Pour la prod standard, on utilise directement le domaine avec www
            const newHostname = `www.${site.domain}`
            newUrl = `https://${newHostname}/`
        }

        if (newUrl !== currentUrl) {
            if (openInNewTab) {
                await browser.tabs.create({ url: newUrl })
                showStatus('success', `Nouvel onglet ouvert sur ${site.label}`)
            } else {
                await browser.tabs.update(currentTab.id!, { url: newUrl })
                showStatus('success', `Basculé vers ${site.label}`)
            }
            currentSite.value = siteKey
        }
    } catch (error) {
        console.error('Error switching site:', error)
        showStatus('error', 'Erreur lors du changement de site')
    }
}

// Détection initiale
async function detectCurrentState() {
    try {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true })
        if (!tabs || !tabs[0]) return

        const currentUrl = tabs[0].url!

        // Vérifier si nous sommes sur un site supporté
        isSiteSupported.value = isOnSupportedSite(currentUrl)

        // Essayer de parser l'URL seulement si c'est un protocole normal
        try {
            const url = new URL(currentUrl)
            if (url.protocol !== 'http:' && url.protocol !== 'https:') {
                // Si ce n'est pas un protocole normal, considérer qu'on n'est pas sur un site supporté
                isSiteSupported.value = false
                return
            }

            const hostname = url.hostname

            // Détecter l'environnement actuel
            let detectedEnv = 'prod'
            if (hostname.includes('preprod-ows')) {
                detectedEnv = 'preprod'
            } else if (hostname.includes('recette-ows')) {
                detectedEnv = 'recette'
            } else if (hostname.includes('local')) {
                detectedEnv = 'local'
            }
            currentEnvironment.value = detectedEnv

            // Détecter le site actuel
            let detectedSite = null
            for (const site of sites) {
                if (hostname.includes(site.domain.split('.')[0])) {
                    detectedSite = site.key
                    break
                }
            }

            // Ne définir currentSite que si un site a été détecté
            if (detectedSite) {
                currentSite.value = detectedSite
            }
        } catch (parseError) {
            // Si l'URL ne peut pas être parsée, considérer qu'on n'est pas sur un site supporté
            isSiteSupported.value = false
        }

    } catch (error) {
        console.error('Error detecting current state:', error)
    }
}

// Re-détecter l'état chaque fois que la popup devient visible
// Ceci est particulièrement important pour Firefox
const checkVisibility = () => {
    if (!document.hidden) {
        detectCurrentState()
    }
}

// Listener pour les changements d'onglet
const onTabChanged = () => {
    detectCurrentState()
}

const onTabUpdated = (tabId: number, changeInfo: any) => {
    if (changeInfo.url) {
        detectCurrentState()
    }
}

// Initialisation et mise à jour à chaque focus de la popup
onMounted(async () => {
    await detectCurrentState()

    document.addEventListener('visibilitychange', checkVisibility)

    // Écouter l'événement personnalisé d'ouverture de popup
    document.addEventListener('owsToolsPopupOpened', detectCurrentState)

    // Également écouter les changements d'onglet
    if (typeof browser !== 'undefined' && browser.tabs) {
        browser.tabs.onActivated?.addListener?.(onTabChanged)
        browser.tabs.onUpdated?.addListener?.(onTabUpdated)
    }
})

// Nettoyer les listeners au démontage
onUnmounted(() => {
    document.removeEventListener('visibilitychange', checkVisibility)
    document.removeEventListener('owsToolsPopupOpened', detectCurrentState)
    if (typeof browser !== 'undefined' && browser.tabs) {
        browser.tabs.onActivated?.removeListener?.(onTabChanged)
        browser.tabs.onUpdated?.removeListener?.(onTabUpdated)
    }
})
</script>

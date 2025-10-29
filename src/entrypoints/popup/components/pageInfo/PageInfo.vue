<template>
    <div class="pageInfo">
        <div class="pageInfo-section">
            <h2>Informations de la Page</h2>

            <div class="pageInfo-controls">
                <button
                    class="btn btn-secondary btn-sm"
                    @click="refreshPageInfo"
                    :disabled="isLoading"
                >
                    <span class="material-icons">refresh</span>
                    Actualiser
                </button>

                <button
                    class="btn btn-outline btn-sm"
                    @click="copyAllInfo"
                    :disabled="!hasValidInfo"
                >
                    <span class="material-icons">content_copy</span>
                    Copier tout
                </button>
            </div>

            <div class="pageInfo-status" v-if="lastUpdated">
                <span class="badge badge-info">
                    <span class="material-icons">schedule</span>
                    Mis à jour {{ formatTime(lastUpdated) }}
                </span>
            </div>

            <div class="pageInfo-content">
                <div v-if="isLoading" class="pageInfo-loading">
                    <span class="material-icons">hourglass_empty</span>
                    Récupération des informations...
                </div>

                <div v-else class="pageInfo-categories">
                    <div
                        v-for="category in pageInfoCategories"
                        :key="category.title"
                        class="pageInfo-category"
                    >
                        <div
                            class="pageInfo-category-header"
                            :data-category="getCategorySlug(category.title)"
                            @click="toggleCategory(getCategorySlug(category.title))"
                        >
                            <span class="material-icons">{{ category.icon }}</span>
                            <h3>{{ category.title }}</h3>
                            <span class="badge badge-info">
                                {{ category.items.filter(item => item.value && item.value !== '-').length }}/{{ category.items.length }}
                            </span>
                            <span class="material-icons pageInfo-category-toggle">
                                {{ expandedCategories.has(getCategorySlug(category.title)) ? 'expand_less' : 'expand_more' }}
                            </span>
                        </div>

                        <div
                            v-show="expandedCategories.has(getCategorySlug(category.title))"
                            class="pageInfo-category-content"
                        >
                            <div
                                v-for="info in category.items"
                                :key="info.key"
                                class="pageInfo-item"
                                :class="{ 'pageInfo-item--empty': !info.value || info.value === '-' }"
                            >
                                <div class="pageInfo-icon">
                                    <span class="material-icons">{{ info.icon }}</span>
                                </div>

                                <div class="pageInfo-details">
                                    <div class="pageInfo-label">{{ info.label }}</div>
                                    <div class="pageInfo-value" :title="info.value">
                                        {{ info.value || 'Non disponible' }}
                                    </div>

                                    <button
                                        v-if="info.value && info.value !== '-'"
                                        class="pageInfo-copy"
                                        @click="copyToClipboard(info.value, info.label)"
                                        :title="`Copier ${info.label.toLowerCase()}`"
                                    >
                                        <span class="material-icons">content_copy</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// Types
interface PageInfoItem {
    key: string
    label: string
    icon: string
    value: string
}

interface PageInfoCategory {
    title: string
    icon: string
    items: PageInfoItem[]
}

// État réactif
const pageInfo = ref({
    // Informations de base
    templateName: '',
    brandTrigram: '',
    pageId: '',
    pageTitle: '',
    pageDescription: '',
    url: '',
    domain: '',
    protocol: '',
    language: '',
    charset: '',
    viewport: '',

    // SEO & Meta
    metaKeywords: '',
    canonicalUrl: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    ogType: '',
    twitterCard: '',
    twitterTitle: '',
    twitterDescription: '',
    robotsMeta: '',

    // Analytics & Tracking
    googleAnalyticsId: '',
    gtmId: '',
    facebookPixelId: '',
    hotjarId: '',

    // Performance & Technique
    loadTime: '',
    resourcesCount: '',
    pageSize: '',
    httpVersion: '',
    fontsLoaded: '',

    // Structure & Contenu
    linksCount: '',
    headingsStructure: '',
    imagesWithoutAlt: '',
    schemaMarkup: '',

    // Technique avancée
    serviceWorker: '',
    cookiesCount: '',
    storageUsage: ''
})

const isLoading = ref(false)
const lastUpdated = ref<Date | null>(null)
const copyFeedback = ref<string>('')
const expandedCategories = ref<Set<string>>(new Set()) // Par défaut, toutes les catégories sont fermées

// Organisation des informations par catégories
const pageInfoCategories = computed<PageInfoCategory[]>(() => [
    {
        title: 'Informations de base',
        icon: 'info',
        items: [
            { key: 'templateName', label: 'Template', icon: 'description', value: pageInfo.value.templateName },
            { key: 'brandTrigram', label: 'Marque', icon: 'business', value: pageInfo.value.brandTrigram },
            { key: 'pageId', label: 'ID de la page', icon: 'badge', value: pageInfo.value.pageId },
            { key: 'pageTitle', label: 'Titre', icon: 'title', value: pageInfo.value.pageTitle },
            { key: 'pageDescription', label: 'Description', icon: 'info', value: pageInfo.value.pageDescription },
            { key: 'url', label: 'URL', icon: 'link', value: pageInfo.value.url },
            { key: 'domain', label: 'Domaine', icon: 'public', value: pageInfo.value.domain },
            { key: 'protocol', label: 'Protocole', icon: 'security', value: pageInfo.value.protocol },
            { key: 'language', label: 'Langue', icon: 'language', value: pageInfo.value.language },
            { key: 'charset', label: 'Encodage', icon: 'text_format', value: pageInfo.value.charset },
            { key: 'viewport', label: 'Viewport', icon: 'devices', value: pageInfo.value.viewport }
        ]
    },
    {
        title: 'SEO & Meta',
        icon: 'search',
        items: [
            { key: 'metaKeywords', label: 'Mots-clés', icon: 'label', value: pageInfo.value.metaKeywords },
            { key: 'canonicalUrl', label: 'URL Canonique', icon: 'link', value: pageInfo.value.canonicalUrl },
            { key: 'ogTitle', label: 'Open Graph Titre', icon: 'share', value: pageInfo.value.ogTitle },
            { key: 'ogDescription', label: 'Open Graph Description', icon: 'share', value: pageInfo.value.ogDescription },
            { key: 'ogImage', label: 'Open Graph Image', icon: 'image', value: pageInfo.value.ogImage },
            { key: 'ogType', label: 'Open Graph Type', icon: 'category', value: pageInfo.value.ogType },
            { key: 'twitterCard', label: 'Twitter Card', icon: 'credit_card', value: pageInfo.value.twitterCard },
            { key: 'twitterTitle', label: 'Twitter Titre', icon: 'credit_card', value: pageInfo.value.twitterTitle },
            { key: 'twitterDescription', label: 'Twitter Description', icon: 'credit_card', value: pageInfo.value.twitterDescription },
            { key: 'robotsMeta', label: 'Robots', icon: 'smart_toy', value: pageInfo.value.robotsMeta }
        ]
    },
    {
        title: 'Analytics & Tracking',
        icon: 'analytics',
        items: [
            { key: 'googleAnalyticsId', label: 'Google Analytics', icon: 'analytics', value: pageInfo.value.googleAnalyticsId },
            { key: 'gtmId', label: 'Google Tag Manager', icon: 'local_offer', value: pageInfo.value.gtmId },
            { key: 'facebookPixelId', label: 'Facebook Pixel', icon: 'facebook', value: pageInfo.value.facebookPixelId },
            { key: 'hotjarId', label: 'Hotjar', icon: 'visibility', value: pageInfo.value.hotjarId }
        ]
    },
    {
        title: 'Performance & Technique',
        icon: 'speed',
        items: [
            { key: 'loadTime', label: 'Temps de chargement', icon: 'timer', value: pageInfo.value.loadTime },
            { key: 'resourcesCount', label: 'Nombre de ressources', icon: 'inventory', value: pageInfo.value.resourcesCount },
            { key: 'pageSize', label: 'Taille de la page', icon: 'data_usage', value: pageInfo.value.pageSize },
            { key: 'httpVersion', label: 'Version HTTP', icon: 'http', value: pageInfo.value.httpVersion },
            { key: 'fontsLoaded', label: 'Polices chargées', icon: 'font_download', value: pageInfo.value.fontsLoaded }
        ]
    },
    {
        title: 'Structure & Contenu',
        icon: 'account_tree',
        items: [
            { key: 'linksCount', label: 'Nombre de liens', icon: 'link', value: pageInfo.value.linksCount },
            { key: 'headingsStructure', label: 'Structure des titres', icon: 'format_size', value: pageInfo.value.headingsStructure },
            { key: 'imagesWithoutAlt', label: 'Images sans alt', icon: 'image_not_supported', value: pageInfo.value.imagesWithoutAlt },
            { key: 'schemaMarkup', label: 'Schema.org', icon: 'schema', value: pageInfo.value.schemaMarkup }
        ]
    },
    {
        title: 'Technique avancée',
        icon: 'engineering',
        items: [
            { key: 'serviceWorker', label: 'Service Worker', icon: 'offline_bolt', value: pageInfo.value.serviceWorker },
            { key: 'cookiesCount', label: 'Cookies', icon: 'cookie', value: pageInfo.value.cookiesCount },
            { key: 'storageUsage', label: 'Stockage local', icon: 'storage', value: pageInfo.value.storageUsage }
        ]
    }
])

// Vérification si on a des informations valides
const hasValidInfo = computed(() => {
    return pageInfoCategories.value.some(category =>
        category.items.some(item => item.value && item.value !== '-' && item.value !== 'Non disponible')
    )
})



// Fonctions utilitaires
function getCategorySlug(title: string): string {
    const slugMap: Record<string, string> = {
        'Informations de base': 'base',
        'SEO & Meta': 'seo',
        'Analytics & Tracking': 'analytics',
        'Performance & Technique': 'performance',
        'Structure & Contenu': 'structure',
        'Technique avancée': 'advanced'
    }
    return slugMap[title] || 'default'
}

function toggleCategory(categorySlug: string) {
    if (expandedCategories.value.has(categorySlug)) {
        expandedCategories.value.delete(categorySlug)
    } else {
        expandedCategories.value.add(categorySlug)
    }
}

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

async function getPageInfoFromTab(): Promise<void> {
    try {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true })
        if (tabs && tabs[0]) {
            const currentTab = tabs[0]

            // Vérifier si on peut injecter du script dans cet onglet
            if (!currentTab.url || currentTab.url.startsWith('chrome://') || currentTab.url.startsWith('chrome-extension://') || currentTab.url.startsWith('moz-extension://')) {
                // Pour les pages protégées, utiliser les informations de l'onglet
                                 pageInfo.value = {
                     // Informations de base
                     templateName: '-',
                     brandTrigram: '-',
                     pageId: '-',
                     pageTitle: currentTab.title || '-',
                     pageDescription: '-',
                     url: currentTab.url || '-',
                     domain: currentTab.url ? new URL(currentTab.url).hostname : '-',
                     protocol: currentTab.url ? new URL(currentTab.url).protocol.toUpperCase().replace(':', '') : '-',
                     language: '-',
                     charset: '-',
                     viewport: '-',

                     // SEO & Meta
                     metaKeywords: '-',
                     canonicalUrl: '-',
                     ogTitle: '-',
                     ogDescription: '-',
                     ogImage: '-',
                     ogType: '-',
                     twitterCard: '-',
                     twitterTitle: '-',
                     twitterDescription: '-',
                     robotsMeta: '-',

                     // Analytics & Tracking
                     googleAnalyticsId: '-',
                     gtmId: '-',
                     facebookPixelId: '-',
                     hotjarId: '-',

                     // Performance & Technique
                     loadTime: '-',
                     resourcesCount: '-',
                     pageSize: '-',
                     httpVersion: '-',
                     fontsLoaded: '-',

                     // Structure & Contenu
                     linksCount: '-',
                     headingsStructure: '-',
                     imagesWithoutAlt: '-',
                     schemaMarkup: '-',

                     // Technique avancée
                     serviceWorker: '-',
                     cookiesCount: '-',
                     storageUsage: '-'
                 }
                lastUpdated.value = new Date()
                return
            }

            try {
                const results = await browser.scripting.executeScript({
                    target: { tabId: currentTab.id! },
                    world: 'MAIN', // Exécuter dans le contexte principal de la page
                    func: () => {
                        try {
                        // Fonction pour récupérer le contenu d'une balise meta
                        function getMetaContent(name: string): string {
                            const meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`) as HTMLMetaElement
                            return meta?.content || ''
                        }

                        // Fonction pour récupérer les variables globales courantes
                        function getGlobalVariable(varName: string): string {
                            try {
                                const value = (window as any)[varName]
                                if (typeof value === 'string') return value
                                if (typeof value === 'object' && value !== null) {
                                    // Pour les objets, essayer de récupérer des propriétés utiles
                                    if (varName === 'brandConfig' && value.trigram) return value.trigram
                                    if (varName === 'templateConfig' && value.name) return value.name
                                }
                                return ''
                            } catch {
                                return ''
                            }
                        }

                        // Fonction pour récupérer l'ID de la page depuis content_object_id
                        function getPageId(): string {
                            try {
                                // Vérifier dans dataLayer
                                if (typeof (window as any).dataLayer !== 'undefined' && Array.isArray((window as any).dataLayer)) {
                                    const dataLayer = (window as any).dataLayer
                                    for (const item of dataLayer) {
                                        const contentObjectId = item.content_object_id || item.contentObjectId
                                        if (contentObjectId) {
                                            // Nettoyer les guillemets simples si présents
                                            const cleanContentObjectId = typeof contentObjectId === 'string'
                                                ? contentObjectId.replace(/'/g, '')
                                                : contentObjectId

                                            if (typeof cleanContentObjectId === 'string' && cleanContentObjectId.includes(':')) {
                                                const parts = cleanContentObjectId.split(':')
                                                const pageId = parts[1] // Récupérer l'ID après le ':'
                                                if (pageId) {
                                                    return pageId
                                                }
                                            } else if (typeof cleanContentObjectId === 'string' && cleanContentObjectId.trim() !== '') {
                                                // Si pas de ':', retourner directement l'ID
                                                return cleanContentObjectId
                                            }
                                        }
                                    }
                                }

                                // Vérifier dans brandConfig (script tag)
                                const brandConfigScript = document.getElementById('brandConfig')
                                if (brandConfigScript) {
                                    try {
                                        const brandConfig = JSON.parse(brandConfigScript.textContent || '{}')
                                        const pageId = brandConfig.pageId || brandConfig.id
                                        if (pageId) {
                                            return pageId
                                        }
                                    } catch (error) {
                                        console.error('Erreur parsing brandConfig:', error)
                                    }
                                }

                                // Vérifier dans window.brandConfig
                                if (typeof (window as any).brandConfig !== 'undefined') {
                                    const brandConfig = (window as any).brandConfig
                                    const pageId = brandConfig.pageId || brandConfig.id
                                    if (pageId) {
                                        return pageId
                                    }
                                }

                                return ''
                            } catch (error) {
                                console.error('Erreur lors de la récupération de l\'ID de page:', error)
                                return ''
                            }
                        }

                                                                        // Fonctions utilitaires pour l'analyse
                        function analyzePerformance() {
                            try {
                                const perf = performance.timing
                                const loadTime = perf.loadEventEnd - perf.navigationStart
                                return {
                                    loadTime: loadTime > 0 ? `${loadTime}ms` : '',
                                    resourcesCount: `${document.scripts.length} JS, ${document.styleSheets.length} CSS, ${document.images.length} images`,
                                    pageSize: `${Math.round(document.documentElement.outerHTML.length / 1024)}KB`
                                }
                            } catch (error) {
                                return {
                                    loadTime: 'Erreur',
                                    resourcesCount: 'Erreur',
                                    pageSize: 'Erreur'
                                }
                            }
                        }

                        function analyzeLinks() {
                            try {
                                const links = document.querySelectorAll('a[href]')
                                const internal = Array.from(links).filter(link =>
                                    link.hostname === window.location.hostname
                                ).length
                                const external = links.length - internal
                                return `${links.length} total (${internal} internes, ${external} externes)`
                            } catch (error) {
                                return 'Erreur d\'analyse'
                            }
                        }

                        function analyzeHeadings() {
                            const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
                            return headings.map(tag => {
                                const count = document.querySelectorAll(tag).length
                                return count > 0 ? `${tag.toUpperCase()}:${count}` : null
                            }).filter(Boolean).join(', ')
                        }

                        function analyzeImages() {
                            const images = document.querySelectorAll('img')
                            const withoutAlt = Array.from(images).filter(img => !img.alt || img.alt.trim() === '').length
                            return withoutAlt > 0 ? `${withoutAlt}/${images.length}` : `0/${images.length}`
                        }

                        function findTrackingIds() {
                            try {
                                const scripts = Array.from(document.scripts).map(s => s.innerHTML).join(' ')

                                // Récupérer tous les GTM
                                const gtmMatches = scripts.match(/GTM-[A-Z0-9]+/g) || []
                                // Supprimer les doublons en utilisant Set
                                const uniqueGtm = [...new Set(gtmMatches)]

                                return {
                                    ga: scripts.match(/G-[A-Z0-9]+|UA-\d+-\d+/)?.[0] || scripts.match(/gtag\('config',\s*'([^']+)'/)?.[1] || '',
                                    gtm: uniqueGtm.length > 0 ? `${uniqueGtm.join(', ')} (${uniqueGtm.length} GTM)` : '',
                                    fbPixel: scripts.match(/fbq\('init',\s*'(\d+)'/)?.[1] || '',
                                    hotjar: scripts.match(/hjid:\s*(\d+)/)?.[1] || ''
                                }
                            } catch (error) {
                                return {
                                    ga: 'Erreur',
                                    gtm: 'Erreur',
                                    fbPixel: 'Erreur',
                                    hotjar: 'Erreur'
                                }
                            }
                        }

                        function analyzeStorage() {
                            let localSize = 0, sessionSize = 0
                            try {
                                localSize = JSON.stringify(localStorage).length
                                sessionSize = JSON.stringify(sessionStorage).length
                            } catch (e) {}
                            return `Local: ${Math.round(localSize/1024)}KB, Session: ${Math.round(sessionSize/1024)}KB`
                        }

                        function analyzeFonts() {
                            try {
                                const fonts = new Set()

                                // 1. Vérifier les fonts via document.fonts (API moderne)
                                if ('fonts' in document && document.fonts) {
                                    document.fonts.forEach(font => {
                                        if (font.family) {
                                            fonts.add(font.family.replace(/['"]/g, ''))
                                        }
                                    })
                                }

                                // 2. Vérifier les liens vers des fonts externes (Google Fonts, etc.)
                                const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"], link[href*="fonts.gstatic.com"], link[href*="typekit.net"], link[href*="fonts.com"]')
                                fontLinks.forEach(link => {
                                    const href = link.href
                                    // Extraire les noms de famille depuis l'URL Google Fonts
                                    if (href.includes('fonts.googleapis.com')) {
                                        const familyMatch = href.match(/family=([^&]+)/)
                                        if (familyMatch) {
                                            const families = familyMatch[1].split('|')
                                            families.forEach(family => {
                                                const cleanFamily = family.split(':')[0].replace(/\+/g, ' ')
                                                fonts.add(cleanFamily)
                                            })
                                        }
                                    }
                                })

                                // 3. Vérifier les @font-face dans les stylesheets
                                try {
                                    for (const stylesheet of document.styleSheets) {
                                        try {
                                            for (const rule of stylesheet.cssRules || []) {
                                                if (rule instanceof CSSFontFaceRule && rule.style.fontFamily) {
                                                    fonts.add(rule.style.fontFamily.replace(/['"]/g, ''))
                                                }
                                            }
                                        } catch (e) {
                                            // Ignore les erreurs CORS pour les stylesheets externes
                                        }
                                    }
                                } catch (e) {
                                    // Fallback si l'accès aux CSS rules échoue
                                }

                                // 4. Vérifier les ressources de fonts chargées
                                const fontResources = Array.from(document.querySelectorAll('link[href*=".woff"], link[href*=".woff2"], link[href*=".ttf"], link[href*=".otf"]'))
                                fontResources.forEach(resource => {
                                    const href = resource.href
                                    const fontName = href.split('/').pop()?.split('.')[0]
                                    if (fontName) {
                                        fonts.add(fontName)
                                    }
                                })

                                // 5. Vérifier les fonts système communes utilisées
                                const computedStyles = []
                                const elementsToCheck = [document.body, document.documentElement, ...document.querySelectorAll('h1, h2, h3, p, span, div')]
                                elementsToCheck.slice(0, 20).forEach(el => {
                                    if (el) {
                                        const style = window.getComputedStyle(el)
                                        const fontFamily = style.fontFamily
                                        if (fontFamily && fontFamily !== 'inherit') {
                                            const families = fontFamily.split(',').map(f => f.trim().replace(/['"]/g, ''))
                                            families.forEach(family => {
                                                if (family && !family.includes('inherit') && !family.includes('initial')) {
                                                    fonts.add(family)
                                                }
                                            })
                                        }
                                    }
                                })

                                const fontList = Array.from(fonts).filter(font =>
                                    font &&
                                    font.length > 0 &&
                                    !font.includes('inherit') &&
                                    !font.includes('initial') &&
                                    !font.includes('unset')
                                )

                                if (fontList.length === 0) {
                                    return 'Aucune police détectée'
                                }

                                return `${fontList.length} police${fontList.length > 1 ? 's' : ''}: ${fontList.join(', ')}`
                            } catch (error) {
                                return 'Erreur lors de l\'analyse des polices'
                            }
                        }



                        const performanceData = analyzePerformance()
                        const trackingIds = findTrackingIds()

                        return {
                            // Informations de base
                            templateName: document.body.getAttribute('data-template-name') ||
                                         document.body.dataset.templateName ||
                                         getGlobalVariable('templateName') ||
                                         '',
                            brandTrigram: document.body.getAttribute('data-brand-trigram') ||
                                         document.body.dataset.brandTrigram ||
                                         getGlobalVariable('brandTrigram') ||
                                         '',
                            pageId: getPageId(),
                            pageTitle: document.title,
                            pageDescription: getMetaContent('description') || getMetaContent('og:description'),
                            url: window.location.href,
                            domain: window.location.hostname,
                            protocol: window.location.protocol.toUpperCase().replace(':', ''),
                            language: document.documentElement.lang ||
                                     getMetaContent('language') ||
                                     navigator.language,
                            charset: document.characterSet || document.charset || 'UTF-8',
                            viewport: getMetaContent('viewport'),

                            // SEO & Meta
                            metaKeywords: getMetaContent('keywords'),
                            canonicalUrl: document.querySelector('link[rel="canonical"]')?.href || '',
                            ogTitle: getMetaContent('og:title'),
                            ogDescription: getMetaContent('og:description'),
                            ogImage: getMetaContent('og:image'),
                            ogType: getMetaContent('og:type'),
                            twitterCard: getMetaContent('twitter:card'),
                            twitterTitle: getMetaContent('twitter:title'),
                            twitterDescription: getMetaContent('twitter:description'),
                            robotsMeta: getMetaContent('robots'),

                            // Analytics & Tracking
                            googleAnalyticsId: trackingIds.ga,
                            gtmId: trackingIds.gtm,
                            facebookPixelId: trackingIds.fbPixel,
                            hotjarId: trackingIds.hotjar,

                            // Performance & Technique
                            loadTime: performanceData.loadTime,
                            resourcesCount: performanceData.resourcesCount,
                            pageSize: performanceData.pageSize,
                            httpVersion: (window as any).chrome?.loadTimes?.()?.connectionInfo || '',
                            fontsLoaded: analyzeFonts(),

                            // Structure & Contenu
                            linksCount: analyzeLinks(),
                            headingsStructure: analyzeHeadings(),
                            imagesWithoutAlt: analyzeImages(),
                            schemaMarkup: document.querySelectorAll('[itemtype], script[type="application/ld+json"]').length > 0 ?
                                         `${document.querySelectorAll('[itemtype], script[type="application/ld+json"]').length} éléments` : '',

                            // Technique avancée
                            serviceWorker: 'serviceWorker' in navigator ?
                                          (navigator.serviceWorker.controller ? 'Actif' : 'Disponible') : 'Non supporté',
                            cookiesCount: `${document.cookie.split(';').filter(c => c.trim()).length} cookies`,
                            storageUsage: analyzeStorage()
                        }
                        } catch (error) {
                            // Retourner un objet d'erreur pour debugging
                            return {
                                _error: true,
                                _errorMessage: error.message || 'Erreur inconnue dans le script injecté',
                                _errorStack: error.stack || 'Pas de stack trace disponible'
                            }
                        }
                    }
                })

                const pageData = results[0]?.result

                // Vérifier s'il y a une erreur dans les résultats
                if (pageData && pageData._error) {
                    throw new Error(`Erreur dans le script injecté: ${pageData._errorMessage}`)
                }

                if (pageData) {
                    pageInfo.value = {
                                            // Informations de base
                    templateName: pageData.templateName || '-',
                    brandTrigram: pageData.brandTrigram || '-',
                    pageId: pageData.pageId || '-',
                    pageTitle: pageData.pageTitle || '-',
                        pageDescription: pageData.pageDescription || '-',
                        url: pageData.url || '-',
                        domain: pageData.domain || '-',
                        protocol: pageData.protocol || '-',
                        language: pageData.language || '-',
                        charset: pageData.charset || '-',
                        viewport: pageData.viewport || '-',

                        // SEO & Meta
                        metaKeywords: pageData.metaKeywords || '-',
                        canonicalUrl: pageData.canonicalUrl || '-',
                        ogTitle: pageData.ogTitle || '-',
                        ogDescription: pageData.ogDescription || '-',
                        ogImage: pageData.ogImage || '-',
                        ogType: pageData.ogType || '-',
                        twitterCard: pageData.twitterCard || '-',
                        twitterTitle: pageData.twitterTitle || '-',
                        twitterDescription: pageData.twitterDescription || '-',
                        robotsMeta: pageData.robotsMeta || '-',

                        // Analytics & Tracking
                        googleAnalyticsId: pageData.googleAnalyticsId || '-',
                        gtmId: pageData.gtmId || '-',
                        facebookPixelId: pageData.facebookPixelId || '-',
                        hotjarId: pageData.hotjarId || '-',

                        // Performance & Technique
                        loadTime: pageData.loadTime || '-',
                        resourcesCount: pageData.resourcesCount || '-',
                        pageSize: pageData.pageSize || '-',
                        httpVersion: pageData.httpVersion || '-',
                        fontsLoaded: pageData.fontsLoaded || '-',

                        // Structure & Contenu
                        linksCount: pageData.linksCount || '-',
                        headingsStructure: pageData.headingsStructure || '-',
                        imagesWithoutAlt: pageData.imagesWithoutAlt || '-',
                        schemaMarkup: pageData.schemaMarkup || '-',

                        // Technique avancée
                        serviceWorker: pageData.serviceWorker || '-',
                        cookiesCount: pageData.cookiesCount || '-',
                        storageUsage: pageData.storageUsage || '-'
                    }
                } else {
                    throw new Error('Aucune donnée récupérée')
                }
            } catch (scriptError) {
                console.warn('Erreur lors de l\'injection de script:', scriptError)
                // Fallback avec les informations de l'onglet Chrome
                pageInfo.value = {
                    // Informations de base
                    templateName: '-',
                    brandTrigram: '-',
                    pageId: '-',
                    pageTitle: currentTab.title || '-',
                    pageDescription: '-',
                    url: currentTab.url || '-',
                    domain: currentTab.url ? new URL(currentTab.url).hostname : '-',
                    protocol: currentTab.url ? new URL(currentTab.url).protocol.toUpperCase().replace(':', '') : '-',
                    language: '-',
                    charset: '-',
                    viewport: '-',

                    // SEO & Meta
                    metaKeywords: '-',
                    canonicalUrl: '-',
                    ogTitle: '-',
                    ogDescription: '-',
                    ogImage: '-',
                    ogType: '-',
                    twitterCard: '-',
                    twitterTitle: '-',
                    twitterDescription: '-',
                    robotsMeta: '-',

                    // Analytics & Tracking
                    googleAnalyticsId: '-',
                    gtmId: '-',
                    facebookPixelId: '-',
                    hotjarId: '-',

                    // Performance & Technique
                    loadTime: '-',
                    resourcesCount: '-',
                    pageSize: '-',
                    httpVersion: '-',
                    fontsLoaded: '-',

                    // Structure & Contenu
                    linksCount: '-',
                    headingsStructure: '-',
                    imagesWithoutAlt: '-',
                    schemaMarkup: '-',

                    // Technique avancée
                    serviceWorker: '-',
                    cookiesCount: '-',
                    storageUsage: '-'
                }
            }
        } else {
            throw new Error('Aucun onglet actif trouvé')
        }

        lastUpdated.value = new Date()
    } catch (error) {
        console.error('Erreur lors de la récupération des informations:', error)
        // Réinitialiser avec des valeurs par défaut
        pageInfo.value = {
            // Informations de base
            templateName: '-',
            brandTrigram: '-',
            pageId: '-',
            pageTitle: '-',
            pageDescription: '-',
            url: '-',
            domain: '-',
            protocol: '-',
            language: '-',
            charset: '-',
            viewport: '-',

            // SEO & Meta
            metaKeywords: '-',
            canonicalUrl: '-',
            ogTitle: '-',
            ogDescription: '-',
            ogImage: '-',
            ogType: '-',
            twitterCard: '-',
            twitterTitle: '-',
            twitterDescription: '-',
            robotsMeta: '-',

            // Analytics & Tracking
            googleAnalyticsId: '-',
            gtmId: '-',
            facebookPixelId: '-',
            hotjarId: '-',

            // Performance & Technique
            loadTime: '-',
            resourcesCount: '-',
            pageSize: '-',
            httpVersion: '-',
            fontsLoaded: '-',

            // Structure & Contenu
            linksCount: '-',
            headingsStructure: '-',
            imagesWithoutAlt: '-',
            schemaMarkup: '-',

            // Technique avancée
            serviceWorker: '-',
            cookiesCount: '-',
            storageUsage: '-'
        }
        lastUpdated.value = new Date()
    }
}

async function refreshPageInfo(): Promise<void> {
    isLoading.value = true
    try {
        await getPageInfoFromTab()
    } finally {
        isLoading.value = false
    }
}

async function copyToClipboard(text: string, label: string): Promise<void> {
    try {
        await navigator.clipboard.writeText(text)
        copyFeedback.value = `${label} copié !`
        setTimeout(() => {
            copyFeedback.value = ''
        }, 2000)
    } catch (error) {
        console.error('Erreur lors de la copie:', error)
        copyFeedback.value = 'Erreur lors de la copie'
        setTimeout(() => {
            copyFeedback.value = ''
        }, 2000)
    }
}

async function copyAllInfo(): Promise<void> {
    const allText = pageInfoCategories.value
        .map(category => {
            const validItems = category.items.filter(item => item.value && item.value !== '-')
            if (validItems.length === 0) return ''

            const categoryText = validItems
                .map(item => `${item.label}: ${item.value}`)
                .join('\n')

            return `=== ${category.title} ===\n${categoryText}`
        })
        .filter(text => text !== '')
        .join('\n\n')

    await copyToClipboard(allText, 'Toutes les informations')
}

// Lifecycle
onMounted(() => {
    refreshPageInfo()
})
</script>

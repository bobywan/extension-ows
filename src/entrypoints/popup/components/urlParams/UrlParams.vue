<template>
    <div class="url-params">
        <!-- Section Environnement CNT -->
        <div class="url-params__section">
            <h2 class="url-params__title">
                        <span class="material-icons">code</span>
                Environnement CNT
            </h2>
            <div class="url-params__grid url-params__grid--three">
                <button
                    v-for="env in cntEnvironments"
                    :key="env.key"
                    :class="[
                        'btn btn--secondary url-params__button url-params__button--cnt',
                        `url-params__button--${env.key}`,
                        { 'btn--selected': selectedCntEnv === env.key }
                    ]"
                    @click="selectCntEnvironment(env.key)"
                >
                    <span class="material-icons">{{ env.icon }}</span>
                    {{ env.label }}
                    </button>
            </div>
        </div>

        <!-- Section Tests Publicitaires -->
        <div class="url-params__section">
            <h2 class="url-params__title">
                        <span class="material-icons">campaign</span>
                Tests Publicitaires
            </h2>
            <div class="url-params__grid url-params__grid--two">
                <button
                    v-for="test in testPubEnvironments"
                    :key="test.key"
                    :class="[
                        'btn btn--secondary url-params__button url-params__button--testpub',
                        `url-params__button--${test.key}`,
                        { 'btn--selected': selectedTestPub === test.key }
                    ]"
                    @click="selectTestPub(test.key)"
                >
                    <span class="material-icons">{{ test.icon }}</span>
                    {{ test.label }}
                    </button>
            </div>
        </div>

        <!-- Section Paramètres URL -->
        <div class="url-params__section">
            <h2 class="url-params__title">
                <span class="material-icons">tune</span>
                Paramètres URL
            </h2>
            <div class="url-params__grid url-params__grid--two">
                <button
                    v-for="param in urlParamsList"
                    :key="param.key"
                    :class="[
                        'btn btn--secondary url-params__button url-params__button--param',
                        `url-params__button--${param.key}`,
                        { 'btn--selected': selectedParams[param.key] }
                    ]"
                    @click="toggleParamSelection(param.key)"
                >
                    <span class="material-icons">{{ param.icon }}</span>
                    {{ param.label }}
                    </button>
            </div>
        </div>

        <!-- Actions -->
        <div class="url-params__actions">
            <button
                class="btn btn--outline url-params__action-btn"
                @click="clearAllParams"
                :disabled="!hasAnySelection"
            >
                        <span class="material-icons">clear_all</span>
                        Retirer tous les paramètres
                    </button>
            <button
                class="btn btn--primary url-params__action-btn"
                @click="applyParams"
                :disabled="!hasAnySelection"
            >
                        <span class="material-icons">send</span>
                        Appliquer les paramètres
                    </button>
        </div>

        <!-- Status -->
        <div v-if="status" class="url-params__status" :class="`url-params__status--${status.type}`">
            <span class="material-icons">{{ getStatusIcon(status.type) }}</span>
            {{ status.message }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'

// Types
interface UrlParam {
    key: string
    label: string
    icon: string
    description: string
    value?: string
}

interface Environment {
    key: string
    label: string
    icon: string
    description: string
}

interface Status {
    type: 'success' | 'error' | 'info'
    message: string
}

// Configuration des paramètres URL
const urlParams: Record<string, UrlParam> = {
    puboff: {
        key: 'puboff',
        label: 'Désactiver Publicité',
        icon: 'ads_click',
        description: 'Désactiver la publicité'
    },
    gtmoff: {
        key: 'gtmoff',
        label: 'Désactiver GTM',
        icon: 'analytics',
        description: 'Désactiver Google Tag Manager'
    },
    cmpoff: {
        key: 'cmpoff',
        label: 'Désactiver CMP',
        icon: 'cookie',
        description: 'Désactiver le CMP'
    },
    ddoff: {
        key: 'ddoff',
        label: 'Désactiver Datadog',
        icon: 'monitor_heart',
        description: 'Désactiver Datadog'
    },
    flushcache: {
        key: 'flushcache',
        label: 'Vider le cache',
        icon: 'cached',
        description: 'Vider le cache',
        value: 'flushCacheApp=true'
    }
}

// Configuration des environnements CNT
const cntEnvironments: Environment[] = [
    {
        key: 'rec2',
        label: 'Recette 2',
        icon: 'code',
        description: 'Recette 2'
    },
    {
        key: 'rec3',
        label: 'Recette 3',
        icon: 'code',
        description: 'Recette 3'
    },
    {
        key: 'prod',
        label: 'Production',
        icon: 'cloud_done',
        description: 'Production'
    }
]

// Configuration des tests publicitaires
const testPubEnvironments: Environment[] = [
    {
        key: 'habillage_prisma_prod',
        label: 'Habillage Prisma Prod',
        icon: 'web',
        description: 'Habillage Prisma Prod'
    },
    {
        key: 'testcampaign',
        label: 'Test Campaign',
        icon: 'campaign',
        description: 'Test Campaign'
    }
]

// État réactif
const selectedParams = reactive<Record<string, boolean>>({})
const selectedCntEnv = ref<string | null>(null)
const selectedTestPub = ref<string | null>(null)
const status = ref<Status | null>(null)

// Computed
const urlParamsList = computed(() => Object.values(urlParams))

const hasAnySelection = computed(() => {
    return (
        Object.values(selectedParams).some(Boolean) ||
        selectedCntEnv.value !== null ||
        selectedTestPub.value !== null
    )
})

// Méthodes
function toggleParamSelection(paramKey: string) {
    selectedParams[paramKey] = !selectedParams[paramKey]
    console.log('Toggle parameter selection:', paramKey, selectedParams[paramKey])
}

function selectCntEnvironment(envKey: string) {
    if (selectedCntEnv.value === envKey) {
        selectedCntEnv.value = null
        console.log('Deselect CNT environment:', envKey)
    } else {
        selectedCntEnv.value = envKey
        console.log('Select CNT environment:', envKey)
    }
}

function selectTestPub(testKey: string) {
    if (selectedTestPub.value === testKey) {
        selectedTestPub.value = null
        console.log('Deselect test pub:', testKey)
    } else {
        selectedTestPub.value = testKey
        console.log('Select test pub:', testKey)
    }
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

async function applyParams() {
    try {
        console.log('Applying parameters:', {
            params: selectedParams,
            cntEnv: selectedCntEnv.value,
            testPub: selectedTestPub.value
        })

        const tabs = await browser.tabs.query({ active: true, currentWindow: true })
        if (!tabs || !tabs[0]) {
            throw new Error('No active tab found')
        }

        const currentTab = tabs[0]
        const currentUrl = currentTab.url!
        const url = new URL(currentUrl)
        const baseUrl = currentUrl.split('?')[0]
        let queryString = url.search.replace('?', '')

        // Gérer CNT_ENV
        const cntEnvRegex = /(^|&)CNT_ENV=[^&]*(&|$)/i
        const hasCntEnv = cntEnvRegex.test(queryString)

        if (selectedCntEnv.value) {
            if (hasCntEnv) {
                queryString = queryString.replace(
                    cntEnvRegex,
                    (match, p1, p2) => `${p1}CNT_ENV=${selectedCntEnv.value}${p2}`
                )
            } else {
                queryString = queryString ?
                    `${queryString}&CNT_ENV=${selectedCntEnv.value}` :
                    `CNT_ENV=${selectedCntEnv.value}`
            }
        } else if (hasCntEnv) {
            queryString = queryString
                .replace(/^CNT_ENV=[^&]*&?/i, '')
                .replace(/&CNT_ENV=[^&]*$/i, '')
                .replace(/&CNT_ENV=[^&]*&/i, '&')
        }

        // Gérer testdfp
        const testdfpRegex = /(^|&)testdfp=[^&]*(&|$)/i
        const hasTestdfp = testdfpRegex.test(queryString)

        if (selectedTestPub.value) {
            if (hasTestdfp) {
                queryString = queryString.replace(
                    testdfpRegex,
                    (match, p1, p2) => `${p1}testdfp=${selectedTestPub.value}${p2}`
                )
            } else {
                queryString = queryString ?
                    `${queryString}&testdfp=${selectedTestPub.value}` :
                    `testdfp=${selectedTestPub.value}`
            }
        } else if (hasTestdfp) {
            queryString = queryString
                .replace(/^testdfp=[^&]*&?/i, '')
                .replace(/&testdfp=[^&]*$/i, '')
                .replace(/&testdfp=[^&]*&/i, '&')
        }

        // Gérer les autres paramètres
        Object.keys(urlParams).forEach(paramKey => {
            const param = urlParams[paramKey]
            const paramRegex = paramKey === 'flushcache' ?
                /(^|&)flushCacheApp=true($|&)/i :
                new RegExp(`(^|&)${paramKey}($|&)`, 'i')

            const hasParam = paramRegex.test(queryString)

            if (selectedParams[paramKey] && !hasParam) {
                const paramValue = param.value || paramKey
                queryString = queryString ?
                    `${queryString}&${paramValue}` :
                    paramValue
            } else if (!selectedParams[paramKey] && hasParam) {
                if (paramKey === 'flushcache') {
                    queryString = queryString
                        .replace(/^flushCacheApp=true&?/i, '')
                        .replace(/&flushCacheApp=true$/i, '')
                        .replace(/&flushCacheApp=true&/i, '&')
                } else {
                    queryString = queryString
                        .replace(new RegExp(`^${paramKey}&?`, 'i'), '')
                        .replace(new RegExp(`&${paramKey}$`, 'i'), '')
                        .replace(new RegExp(`&${paramKey}&`, 'i'), '&')
                }
            }
        })

        const newUrl = baseUrl + (queryString ? `?${queryString}` : '')

        await browser.tabs.update(currentTab.id!, { url: newUrl })
        showStatus('success', 'Paramètres appliqués avec succès')

    } catch (error) {
        console.error('Error applying parameters:', error)
        showStatus('error', 'Erreur lors de l\'application des paramètres')
    }
}

async function clearAllParams() {
    try {
        console.log('Clearing all parameters')

        const tabs = await browser.tabs.query({ active: true, currentWindow: true })
        if (!tabs || !tabs[0]) {
            throw new Error('No active tab found')
        }

        const currentTab = tabs[0]
        const currentUrl = currentTab.url!
        const baseUrl = currentUrl.split('?')[0]

        await browser.tabs.update(currentTab.id!, { url: baseUrl })

        // Réinitialiser l'état
        Object.keys(selectedParams).forEach(key => {
            selectedParams[key] = false
        })
        selectedCntEnv.value = null
        selectedTestPub.value = null

        showStatus('success', 'Tous les paramètres ont été supprimés')

    } catch (error) {
        console.error('Error clearing parameters:', error)
        showStatus('error', 'Erreur lors de la suppression des paramètres')
    }
}

async function detectCurrentParams() {
    try {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true })
        if (!tabs || !tabs[0]) return

        const currentUrl = tabs[0].url!
        const url = new URL(currentUrl)
        const queryString = url.search.replace('?', '')

        // Détecter CNT_ENV
        const cntEnvMatch = queryString.match(/CNT_ENV=([^&]+)/i)
        if (cntEnvMatch && cntEnvMatch[1]) {
            const cntEnv = cntEnvMatch[1].toLowerCase()
            if (cntEnvironments.some(env => env.key === cntEnv)) {
                selectedCntEnv.value = cntEnv
            }
        }

        // Détecter testdfp
        const testdfpMatch = queryString.match(/testdfp=([^&]+)/i)
        if (testdfpMatch && testdfpMatch[1]) {
            const testdfp = testdfpMatch[1]
            if (testPubEnvironments.some(test => test.key === testdfp)) {
                selectedTestPub.value = testdfp
            }
        }

        // Détecter les autres paramètres
        Object.keys(urlParams).forEach(paramKey => {
            const paramRegex = paramKey === 'flushcache' ?
                /(^|&)flushCacheApp=true($|&)/i :
                new RegExp(`(^|&)${paramKey}($|&)`, 'i')

            selectedParams[paramKey] = paramRegex.test(queryString)
        })

    } catch (error) {
        console.error('Error detecting current parameters:', error)
    }
}

// Initialisation
onMounted(() => {
    // Initialiser les paramètres
    Object.keys(urlParams).forEach(key => {
        selectedParams[key] = false
    })

    // Détecter les paramètres actuels
    detectCurrentParams()
})
</script>

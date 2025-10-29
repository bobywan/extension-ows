<template>
    <div class="ows-tools__grid">
        <div class="ows-tools__navigation">
            <Navigation @tab-changed="handleTabChange" />
        </div>
        <div class="ows-tools__content">
            <EnvironmentSite v-if="activeTab === 'environmentSite'" />
            <UrlParams v-if="activeTab === 'urlParams'" />
            <Configuration v-if="activeTab === 'configuration'" />
            <PageInfo v-if="activeTab === 'pageInfo'" />
            <ClassContent v-if="activeTab === 'classContent'" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import Navigation from '@components/navigation/Navigation.vue'
    import EnvironmentSite from '@components/environmentSite/EnvironmentSite.vue'
    import UrlParams from '@components/urlParams/UrlParams.vue'
    import Configuration from '@components/configuration/Configuration.vue'
    import PageInfo from '@components/pageInfo/PageInfo.vue'
    import ClassContent from '@components/classContent/ClassContent.vue'

    // État réactif
    const activeTab = ref<string>('environmentSite')

    // Méthodes
    function handleTabChange(tabId: string) {
        activeTab.value = tabId
        console.log('Active tab changed to:', tabId)
    }

    // Déclencher une ré-évaluation des états à chaque ouverture de popup
    // Particulièrement important pour Firefox
    onMounted(() => {
        // Déclencher un événement personnalisé pour signaler que la popup est ouverte
        const event = new CustomEvent('owsToolsPopupOpened')
        document.dispatchEvent(event)
    })
</script>
export default defineBackground(() => {
  // Liste des domaines supportés
  const SUPPORTED_DOMAINS = [
    'capital.fr',
    'geo.fr',
    'caminteresse.fr',
    'cuisineactuelle.fr',
    'hbrfrance.fr',
    'voici.fr',
    'femmeactuelle.fr',
    'harpersbazaar.fr',
    'cotemaison.fr',
    'hellocoton.fr',
    'quoi.info',
    'selectionshopping.com',
  ];

  // Vérifie si l'URL est sur un site supporté
  function isOnSupportedSite(url: string): boolean {
    try {
      const urlObj = new URL(url);
      const hostname = urlObj.hostname.toLowerCase();

      return SUPPORTED_DOMAINS.some(domain => {
        return hostname.includes(domain.toLowerCase()) ||
               hostname.includes(domain.split('.')[0].toLowerCase());
      });
    } catch (e) {
      console.error('Error parsing URL:', e);
      return false;
    }
  }

  // Met à jour le badge de l'extension
  async function updateBadge(tabId: number, url: string) {
    const isSupported = isOnSupportedSite(url);

    if (isSupported) {
      // Site supporté - badge vert avec checkmark
      await browser.action.setBadgeText({ text: '✓', tabId });
      await browser.action.setBadgeBackgroundColor({ color: '#146C2E', tabId });
      await browser.action.setTitle({
        title: 'OWS Tools - Site supporté\nToutes les fonctionnalités disponibles',
        tabId
      });
    } else {
      // Site non supporté - badge orange avec point d'exclamation
      await browser.action.setBadgeText({ text: '!', tabId });
      await browser.action.setBadgeBackgroundColor({ color: '#8D5524', tabId });
      await browser.action.setTitle({
        title: 'OWS Tools - Site non supporté\nFonctionnalités limitées',
        tabId
      });
    }
  }

  // Écouter les changements d'onglets
  browser.tabs.onActivated.addListener(async (activeInfo: { tabId: number }) => {
    const tab = await browser.tabs.get(activeInfo.tabId);
    if (tab.url) {
      await updateBadge(activeInfo.tabId, tab.url);
    }
  });

  // Écouter les mises à jour d'URL dans les onglets
  browser.tabs.onUpdated.addListener(async (tabId: number, changeInfo: { url?: string }, tab: { url?: string }) => {
    if (changeInfo.url && tab.url) {
      await updateBadge(tabId, tab.url);
    }
  });

  // Initialiser le badge pour l'onglet actif au démarrage
  browser.runtime.onStartup.addListener(async () => {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    if (tabs[0] && tabs[0].url && tabs[0].id) {
      await updateBadge(tabs[0].id, tabs[0].url);
    }
  });

  // Initialiser le badge quand l'extension est installée/activée
  browser.runtime.onInstalled.addListener(async () => {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    if (tabs[0] && tabs[0].url && tabs[0].id) {
      await updateBadge(tabs[0].id, tabs[0].url);
    }
  });
});
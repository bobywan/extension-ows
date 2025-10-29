export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
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
      'selectionshopping.com'
    ];

    // Citations Kaamelott
    const KAAMELOTT_QUOTES = [
      "Je ne mange pas de graines!",
      "C'est pas faux",
      "On en a gros!",
      "Mais je vous emmerde, mon p'tit pote!",
      "Ah, c'est sûr qu'c'est pas Jo l'Rigolo, tous les jours...",
      "Moi, j'serais vous, j'vous écouterais... Non, moi, j'serais nous, j'vous... Si moi, j'étais vous, j'nous écouterais!",
      "Mais évidemment c'est sans alcool!",
      "Faut arrêter ces conneries de nord et de sud ! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout !",
      "Mais bien sûr que si, je vous écoute ! Mais là comme vous parlez de creuser, j'visualise la scène, et je me dis qu'il faut vraiment être con pour creuser un trou dans la glace !",
      "PAYS DE GALLES INDÉPENDANT !",
      "Qu'est-ce que c'est que ce style de bouffer des petits machins tout secs et trois gallettes plein de fromage ?",
      "Moi, une fois, j'ai pris une claque, eh ben, je l'ai jamais retrouvée...",
      "Le Graal, je sais pas où il est mais il va y rester un moment.",
      "Si la mémoire est à la tête ce que le passé, peut-on y accéder à cheval ?",
      "Vous savez c'que c'est, mon problème ? Trop gentil !",
    ];

    // Citations Kaamelott pour les paragraphes
    const KAAMELOTT_PARAGRAPHS = [
      "Moi, je m'en fous, si on me force à choisir entre la peste et le choléra, je prends les deux. Comme ça, je suis tranquille, je sais que je vais mourir, mais au moins je l'ai choisi. C'est ça la liberté ! Maintenant, si vous voulez faire quelque chose pour moi, vous me donnez un bout de fromage et du pain, parce que j'ai faim.",
      "Non mais attendez, je veux dire... Je suis pas en train de chercher à vous embobiner, moi. Les cerfs, les sangliers tout ça, c'est du gibier, mais la biche, enfin les biches, c'est plus sacré ! C'est comme le daim, la biche c'est la dame du sous-bois. Alors c'est un peu comme si on tuait une personne humaine, vous voyez ?",
      "Mais évidemment c'est sans alcool! Vous me prenez pour un soiffard? Non mais vous vous rendez compte que si je fais le service avec de l'alcool, dans une demi-heure il y a plus personne! Ils sont tous raides morts dans les escaliers! Non mais déjà que quand je fais le service avec de l'eau, ils sont tous en train de se plaindre que c'est dégueulasse!",
      "Mais c'est pas possible, d'où sortez-vous ça? Non, mais vous vous croyez où? Non mais vous vous prenez pour qui? Non mais vous vous rendez compte de ce que vous dites? Mais enfin, voyons... Non mais attendez, je rêve! Mais c'est pas vrai! Mais je vais me réveiller! Non mais pincez-moi, je rêve! Non mais je suis dans un cauchemar!",
      "Je vois trouble... C'est le manque de gras. Je vous l'ai déjà dit cent fois : si vous voulez que je sois en forme, il faut me gaver ! Moi, mon métabolisme est comme ça. Je suis pas un animal sauvage. Je suis pas fait pour la cueillette et la chasse. Moi, il me faut de la viande, du gras, du sel, et surtout, surtout... de la cervoise !",
      "Mais attendez... C'est pas possible que ce soit moi qui explique ça à des chevaliers de la Table Ronde ! La Table Ronde, c'est pas une table comme les autres. Art et symbole ! Le Graal, c'est pas une coupe comme les autres. Le château de Kaamelott, c'est pas un château comme les autres ! Et moi, je suis pas un roi comme les autres !",
      "Vous savez que j'ai vécu une expérience unique. J'ai fait un voyage en Irlande... Ah non, c'était en Écosse. Enfin bref, j'ai vu des types, ils étaient tous en kilt, et ils jouaient de la cornemuse. Mais le plus dingue, c'est qu'ils étaient tous bourrés comme des coins. Et là, je me suis dit : 'C'est ça la liberté !'",
      "Non mais je vais vous dire : tout le monde en a rien à foutre. Les chefs de clan, ils font des réunions pour déconner, pour boire des coups, et pour se taper sur l'épaule. Tout le monde s'en fout, de la Grande Bretagne. Tout le monde s'en fout, de l'unification. Tout le monde s'en fout, de tout. Moi le premier."
    ];

    // Personnages de Kaamelott
    const KAAMELOTT_CHARACTERS = [
      "Arthur - Roi de Bretagne",
      "Perceval - Chevalier de Galles",
      "Karadoc - Chevalier de Vannes",
      "Léodagan - Roi de Carmélide",
      "Merlin - L'Enchanteur",
      "Bohort - Chevalier de Gaunes",
      "Lancelot - Chevalier du Lac",
      "Le Père Blaise - Chapelain",
      "Venec - Marchand",
      "Kadoc - Frère de Karadoc",
      "Dame Séli - Reine de Carmélide",
      "Guenièvre - Reine de Bretagne",
      "Yvain - Chevalier au Lion",
      "Gauvain - Chevalier",
      "Angharad - Servante",
      "L'interprète burgonde",
      "Le Maître d'Armes",
      "Le Tavernier"
    ];

    // Images Kaamelott
    const KAAMELOTT_IMAGES = [
      'images/kaamelott/kaamelott-photo-1345687.jpg',
      'images/kaamelott/kaamelott-photo-1388782.jpg',
      'images/kaamelott/kaamelott-photo-1387954.jpg',
      'images/kaamelott/kaamelott-photo-1387952.jpg',
      'images/kaamelott/kaamelott-photo-1388387.jpg',
      'images/kaamelott/kaamelott-photo-1387933.jpg',
      'images/kaamelott/kaamelott-photo-1387934.jpg',
      'images/kaamelott/kaamelott-photo-1387964.jpg',
      'images/kaamelott/kaamelott-photo-1388389.jpg',
      'images/kaamelott/kaamelott-photo-1387942.jpg',
      'images/kaamelott/kaamelott-photo-1387938.jpg',
      'images/kaamelott/kaamelott-photo-1387943.jpg',
      'images/kaamelott/kaamelott-photo-1388388.jpg',
      'images/kaamelott/kaamelott-photo-1388385.webp',
      'images/kaamelott/kaamelott-photo-1388383.jpg',
      'images/kaamelott/kaamelott-photo-alexandre-astier-anne-girouard-1386945.jpg',
      'images/kaamelott/kaamelott-photo-geraldine-nakache-alain-chabat-1386989.jpg',
      'images/kaamelott/kaamelott-photo-kaamelott-1054514.jpg',
      'images/kaamelott/kaamelott-premier-volet-photo-jacques-chambon-1386962.jpg'
    ];

    // Fonctions utilitaires
    function getRandomQuote(): string {
      const randomIndex = Math.floor(Math.random() * KAAMELOTT_QUOTES.length);
      return KAAMELOTT_QUOTES[randomIndex];
    }

    function getRandomParagraph(): string {
      const randomIndex = Math.floor(Math.random() * KAAMELOTT_PARAGRAPHS.length);
      return KAAMELOTT_PARAGRAPHS[randomIndex];
    }

    function getRandomCharacter(): string {
      const randomIndex = Math.floor(Math.random() * KAAMELOTT_CHARACTERS.length);
      return KAAMELOTT_CHARACTERS[randomIndex];
    }

    function getRandomImage(): string {
      const randomIndex = Math.floor(Math.random() * KAAMELOTT_IMAGES.length);
      return browser.runtime.getURL(KAAMELOTT_IMAGES[randomIndex] as any);
    }

    // Vérifie si l'URL actuelle est sur un site supporté
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

    // Fonction pour remplacer le contenu par du Kaamelott
    function replaceContentWithKaamelott(): void {
      // Remplacer les titres des articles
      const articleTitles = document.querySelectorAll('.articleCard-title, .orderedContentList-title, .articleBody-draft h2, .linkCard a, .article-headTitle');
      articleTitles.forEach(title => {
        if (title.textContent) {
          title.textContent = getRandomQuote();
        }
      });

      // Remplacer les textes d'accroche
      const leadTexts = document.querySelectorAll('.articleCard-leadText, .category-head p, .article-headLead p');
      leadTexts.forEach(text => {
        if (text.textContent) {
          text.textContent = getRandomParagraph();
        }
      });

      // Remplacer les catégories
      const categories = document.querySelectorAll('.articleCard-category, .homepageSection .title-link, .category-head .title, .linkCard-title, .tagList-listItem a');
      categories.forEach(category => {
        if (category.textContent) {
          category.textContent = getRandomCharacter();
        }
      });

      // Remplacer le contenu des articles
      const articleParagraphs = document.querySelectorAll('.articleBody-draft p');
      articleParagraphs.forEach(paragraph => {
        if (paragraph.textContent) {
          paragraph.textContent = getRandomParagraph();
        }
      });

      // Remplacer les images directes
      const images = document.querySelectorAll('#corps img, .articleCard-image img, .article-headImage img, img[src*="jpg"], img[src*="png"], img[src*="webp"]');
      images.forEach((img) => {
        const imgElement = img as HTMLImageElement;
        imgElement.src = getRandomImage();
        if (imgElement.srcset) {
          imgElement.srcset = getRandomImage();
        }
        // Ajouter un attribut alt Kaamelott
        imgElement.alt = getRandomQuote();
      });

      // Remplacer les sources dans les balises picture
      const sourcesInPicture = document.querySelectorAll('#corps picture source, picture source');
      sourcesInPicture.forEach((source) => {
        const sourceElement = source as HTMLSourceElement;
        if (sourceElement.srcset) {
          sourceElement.srcset = getRandomImage();
        }
      });

      // Remplacer les images de fond CSS
      const elementsWithBackgroundImage = document.querySelectorAll('[style*="background-image"]');
      elementsWithBackgroundImage.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.backgroundImage = `url(${getRandomImage()})`;
      });
    }

    // Fonction principale qui ajoute le bouton
    function addSiteButton(): void {
      // Vérifier si nous sommes sur un site supporté
      if (!isOnSupportedSite(window.location.href)) {
        return;
      }

      // Vérifier si le bouton existe déjà
      if (document.getElementById('owsTools-buttonHtml')) {
        return;
      }

      // Créer le bouton
      const button = document.createElement('div');
      button.id = 'owsTools-buttonHtml';
      button.textContent = 'OWS';

      // Vérifier la visibilité dans le localStorage
      const shouldBeVisible = localStorage.getItem('owsTools_owsButtonVisible') === 'true';
      button.style.display = shouldBeVisible ? 'flex' : 'none';

      // Récupérer la position sauvegardée si elle existe
      const savedPosition = localStorage.getItem('owsTools-buttonPosition');
      const initialPosition = savedPosition ? JSON.parse(savedPosition) : { top: '20px', left: '20px' };

      // Créer un tooltip
      const tooltip = document.createElement('div');
      tooltip.id = 'owsTools-tooltip';
      tooltip.textContent = 'WIP';
      tooltip.style.cssText = `
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translateY(-50%) translateX(-20px);
        background-color: #333;
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 12px;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        pointer-events: none;
        white-space: nowrap;
        z-index: 10001;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        max-width: 250px;
        white-space: normal;
        text-align: center;
      `;
      button.appendChild(tooltip);

      // Appliquer des styles pour un bouton rond
      button.style.cssText = `
        position: fixed;
        top: ${initialPosition.top};
        left: ${initialPosition.left};
        background-color: #4285F4;
        color: white;
        border: none;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        z-index: 10000;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);
        user-select: none;
        opacity: 0.8;
        transition: all 0.2s ease;
        ${shouldBeVisible ? 'display: flex;' : 'display: none;'}
      `;

      // Ajouter un effet de survol
      button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#3367D6';
        button.style.opacity = '1';
        button.style.transform = 'scale(1.05)';
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateY(-50%) translateX(0)';
      });

      button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#4285F4';
        button.style.opacity = '0.8';
        button.style.transform = 'scale(1)';
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateY(-50%) translateX(-20px)';
      });

      // Variables pour le drag and drop et détection du clic simple
      let isDragging = false;
      let hasMoved = false;
      let offsetX: number, offsetY: number;
      let mouseDownTime: number;

      // Démarrer le glisser-déposer
      button.addEventListener('mousedown', (e) => {
        isDragging = true;
        hasMoved = false;
        mouseDownTime = new Date().getTime();
        offsetX = e.clientX - button.getBoundingClientRect().left;
        offsetY = e.clientY - button.getBoundingClientRect().top;
        button.style.cursor = 'grabbing';
        e.preventDefault();
      });

      // Déplacer le bouton avec la souris
      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        hasMoved = true;

        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;

        if (newX < 0) newX = 0;
        if (newX + buttonWidth > windowWidth) newX = windowWidth - buttonWidth;
        if (newY < 0) newY = 0;
        if (newY + buttonHeight > windowHeight) newY = windowHeight - buttonHeight;

        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
      });

      // Arrêter le glisser-déposer
      document.addEventListener('mouseup', () => {
        if (isDragging) {
          const clickDuration = new Date().getTime() - mouseDownTime;

          // Sauvegarder la nouvelle position
          const position = {
            top: button.style.top,
            left: button.style.left
          };
          localStorage.setItem('owsTools-buttonPosition', JSON.stringify(position));

          // Si l'utilisateur n'a pas déplacé le bouton et que le clic était court, c'est un clic simple
          if (!hasMoved && clickDuration < 200) {
            replaceContentWithKaamelott();

            // Effet visuel de confirmation
            button.style.backgroundColor = '#34A853';
            button.textContent = '✓';
            setTimeout(() => {
              button.style.backgroundColor = '#4285F4';
              button.textContent = 'OWS';
            }, 1000);
          }

          isDragging = false;
          button.style.cursor = 'pointer';
        }
      });

      // Ajouter le bouton au document
      document.body.appendChild(button);
    }

    // Fonction pour mettre à jour la visibilité du bouton
    function updateButtonVisibility(): void {
      const button = document.getElementById('owsTools-buttonHtml');
      if (button) {
        const shouldBeVisible = localStorage.getItem('owsTools_owsButtonVisible') === 'true';
        button.style.display = shouldBeVisible ? 'flex' : 'none';
      }
    }

    // Écouter les changements de localStorage pour la visibilité
    window.addEventListener('storage', (e) => {
      if (e.key === 'owsTools_owsButtonVisible') {
        updateButtonVisibility();
      }
    });

    // Initialiser le bouton
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', addSiteButton);
    } else {
      addSiteButton();
    }

    // Réinitialiser le bouton lors des changements de page (SPA)
    let currentUrl = window.location.href;
    const observer = new MutationObserver(() => {
      if (window.location.href !== currentUrl) {
        currentUrl = window.location.href;
        setTimeout(addSiteButton, 500); // Délai pour laisser la page se charger
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
});
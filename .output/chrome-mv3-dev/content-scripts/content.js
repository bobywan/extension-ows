var content = function() {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  var _a, _b;
  function defineContentScript(definition2) {
    return definition2;
  }
  const browser$1 = ((_b = (_a = globalThis.browser) == null ? void 0 : _a.runtime) == null ? void 0 : _b.id) ? globalThis.browser : globalThis.chrome;
  const browser = browser$1;
  const definition = defineContentScript({
    matches: ["<all_urls>"],
    main() {
      const SUPPORTED_DOMAINS = [
        "capital.fr",
        "geo.fr",
        "caminteresse.fr",
        "cuisineactuelle.fr",
        "hbrfrance.fr",
        "voici.fr",
        "femmeactuelle.fr",
        "harpersbazaar.fr",
        "cotemaison.fr",
        "hellocoton.fr",
        "quoi.info",
        "selectionshopping.com"
      ];
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
        "Vous savez c'que c'est, mon problème ? Trop gentil !"
      ];
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
      const KAAMELOTT_IMAGES = [
        "images/kaamelott/kaamelott-photo-1345687.jpg",
        "images/kaamelott/kaamelott-photo-1388782.jpg",
        "images/kaamelott/kaamelott-photo-1387954.jpg",
        "images/kaamelott/kaamelott-photo-1387952.jpg",
        "images/kaamelott/kaamelott-photo-1388387.jpg",
        "images/kaamelott/kaamelott-photo-1387933.jpg",
        "images/kaamelott/kaamelott-photo-1387934.jpg",
        "images/kaamelott/kaamelott-photo-1387964.jpg",
        "images/kaamelott/kaamelott-photo-1388389.jpg",
        "images/kaamelott/kaamelott-photo-1387942.jpg",
        "images/kaamelott/kaamelott-photo-1387938.jpg",
        "images/kaamelott/kaamelott-photo-1387943.jpg",
        "images/kaamelott/kaamelott-photo-1388388.jpg",
        "images/kaamelott/kaamelott-photo-1388385.webp",
        "images/kaamelott/kaamelott-photo-1388383.jpg",
        "images/kaamelott/kaamelott-photo-alexandre-astier-anne-girouard-1386945.jpg",
        "images/kaamelott/kaamelott-photo-geraldine-nakache-alain-chabat-1386989.jpg",
        "images/kaamelott/kaamelott-photo-kaamelott-1054514.jpg",
        "images/kaamelott/kaamelott-premier-volet-photo-jacques-chambon-1386962.jpg"
      ];
      function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * KAAMELOTT_QUOTES.length);
        return KAAMELOTT_QUOTES[randomIndex];
      }
      function getRandomParagraph() {
        const randomIndex = Math.floor(Math.random() * KAAMELOTT_PARAGRAPHS.length);
        return KAAMELOTT_PARAGRAPHS[randomIndex];
      }
      function getRandomCharacter() {
        const randomIndex = Math.floor(Math.random() * KAAMELOTT_CHARACTERS.length);
        return KAAMELOTT_CHARACTERS[randomIndex];
      }
      function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * KAAMELOTT_IMAGES.length);
        return browser.runtime.getURL(KAAMELOTT_IMAGES[randomIndex]);
      }
      function isOnSupportedSite(url) {
        try {
          const urlObj = new URL(url);
          const hostname = urlObj.hostname.toLowerCase();
          return SUPPORTED_DOMAINS.some((domain) => {
            return hostname.includes(domain.toLowerCase()) || hostname.includes(domain.split(".")[0].toLowerCase());
          });
        } catch (e) {
          console.error("Error parsing URL:", e);
          return false;
        }
      }
      function replaceContentWithKaamelott() {
        const articleTitles = document.querySelectorAll(".articleCard-title, .orderedContentList-title, .articleBody-draft h2, .linkCard a, .article-headTitle");
        articleTitles.forEach((title) => {
          if (title.textContent) {
            title.textContent = getRandomQuote();
          }
        });
        const leadTexts = document.querySelectorAll(".articleCard-leadText, .category-head p, .article-headLead p");
        leadTexts.forEach((text) => {
          if (text.textContent) {
            text.textContent = getRandomParagraph();
          }
        });
        const categories = document.querySelectorAll(".articleCard-category, .homepageSection .title-link, .category-head .title, .linkCard-title, .tagList-listItem a");
        categories.forEach((category) => {
          if (category.textContent) {
            category.textContent = getRandomCharacter();
          }
        });
        const articleParagraphs = document.querySelectorAll(".articleBody-draft p");
        articleParagraphs.forEach((paragraph) => {
          if (paragraph.textContent) {
            paragraph.textContent = getRandomParagraph();
          }
        });
        const images = document.querySelectorAll('#corps img, .articleCard-image img, .article-headImage img, img[src*="jpg"], img[src*="png"], img[src*="webp"]');
        images.forEach((img) => {
          const imgElement = img;
          imgElement.src = getRandomImage();
          if (imgElement.srcset) {
            imgElement.srcset = getRandomImage();
          }
          imgElement.alt = getRandomQuote();
        });
        const sourcesInPicture = document.querySelectorAll("#corps picture source, picture source");
        sourcesInPicture.forEach((source) => {
          const sourceElement = source;
          if (sourceElement.srcset) {
            sourceElement.srcset = getRandomImage();
          }
        });
        const elementsWithBackgroundImage = document.querySelectorAll('[style*="background-image"]');
        elementsWithBackgroundImage.forEach((element) => {
          const htmlElement = element;
          htmlElement.style.backgroundImage = `url(${getRandomImage()})`;
        });
      }
      function addSiteButton() {
        if (!isOnSupportedSite(window.location.href)) {
          return;
        }
        if (document.getElementById("owsTools-buttonHtml")) {
          return;
        }
        const button = document.createElement("div");
        button.id = "owsTools-buttonHtml";
        button.textContent = "OWS";
        const shouldBeVisible = localStorage.getItem("owsTools_owsButtonVisible") === "true";
        button.style.display = shouldBeVisible ? "flex" : "none";
        const savedPosition = localStorage.getItem("owsTools-buttonPosition");
        const initialPosition = savedPosition ? JSON.parse(savedPosition) : { top: "20px", left: "20px" };
        const tooltip = document.createElement("div");
        tooltip.id = "owsTools-tooltip";
        tooltip.textContent = "WIP";
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
        ${shouldBeVisible ? "display: flex;" : "display: none;"}
      `;
        button.addEventListener("mouseover", () => {
          button.style.backgroundColor = "#3367D6";
          button.style.opacity = "1";
          button.style.transform = "scale(1.05)";
          tooltip.style.opacity = "1";
          tooltip.style.transform = "translateY(-50%) translateX(0)";
        });
        button.addEventListener("mouseout", () => {
          button.style.backgroundColor = "#4285F4";
          button.style.opacity = "0.8";
          button.style.transform = "scale(1)";
          tooltip.style.opacity = "0";
          tooltip.style.transform = "translateY(-50%) translateX(-20px)";
        });
        let isDragging = false;
        let hasMoved = false;
        let offsetX, offsetY;
        let mouseDownTime;
        button.addEventListener("mousedown", (e) => {
          isDragging = true;
          hasMoved = false;
          mouseDownTime = (/* @__PURE__ */ new Date()).getTime();
          offsetX = e.clientX - button.getBoundingClientRect().left;
          offsetY = e.clientY - button.getBoundingClientRect().top;
          button.style.cursor = "grabbing";
          e.preventDefault();
        });
        document.addEventListener("mousemove", (e) => {
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
        document.addEventListener("mouseup", () => {
          if (isDragging) {
            const clickDuration = (/* @__PURE__ */ new Date()).getTime() - mouseDownTime;
            const position = {
              top: button.style.top,
              left: button.style.left
            };
            localStorage.setItem("owsTools-buttonPosition", JSON.stringify(position));
            if (!hasMoved && clickDuration < 200) {
              replaceContentWithKaamelott();
              button.style.backgroundColor = "#34A853";
              button.textContent = "✓";
              setTimeout(() => {
                button.style.backgroundColor = "#4285F4";
                button.textContent = "OWS";
              }, 1e3);
            }
            isDragging = false;
            button.style.cursor = "pointer";
          }
        });
        document.body.appendChild(button);
      }
      function updateButtonVisibility() {
        const button = document.getElementById("owsTools-buttonHtml");
        if (button) {
          const shouldBeVisible = localStorage.getItem("owsTools_owsButtonVisible") === "true";
          button.style.display = shouldBeVisible ? "flex" : "none";
        }
      }
      window.addEventListener("storage", (e) => {
        if (e.key === "owsTools_owsButtonVisible") {
          updateButtonVisibility();
        }
      });
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", addSiteButton);
      } else {
        addSiteButton();
      }
      let currentUrl = window.location.href;
      const observer = new MutationObserver(() => {
        if (window.location.href !== currentUrl) {
          currentUrl = window.location.href;
          setTimeout(addSiteButton, 500);
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  });
  content;
  function print$1(method, ...args) {
    if (typeof args[0] === "string") {
      const message = args.shift();
      method(`[wxt] ${message}`, ...args);
    } else {
      method("[wxt]", ...args);
    }
  }
  const logger$1 = {
    debug: (...args) => print$1(console.debug, ...args),
    log: (...args) => print$1(console.log, ...args),
    warn: (...args) => print$1(console.warn, ...args),
    error: (...args) => print$1(console.error, ...args)
  };
  const _WxtLocationChangeEvent = class _WxtLocationChangeEvent extends Event {
    constructor(newUrl, oldUrl) {
      super(_WxtLocationChangeEvent.EVENT_NAME, {});
      this.newUrl = newUrl;
      this.oldUrl = oldUrl;
    }
  };
  __publicField(_WxtLocationChangeEvent, "EVENT_NAME", getUniqueEventName("wxt:locationchange"));
  let WxtLocationChangeEvent = _WxtLocationChangeEvent;
  function getUniqueEventName(eventName) {
    var _a2;
    return `${(_a2 = browser == null ? void 0 : browser.runtime) == null ? void 0 : _a2.id}:${"content"}:${eventName}`;
  }
  function createLocationWatcher(ctx) {
    let interval;
    let oldUrl;
    return {
      /**
       * Ensure the location watcher is actively looking for URL changes. If it's already watching,
       * this is a noop.
       */
      run() {
        if (interval != null) return;
        oldUrl = new URL(location.href);
        interval = ctx.setInterval(() => {
          let newUrl = new URL(location.href);
          if (newUrl.href !== oldUrl.href) {
            window.dispatchEvent(new WxtLocationChangeEvent(newUrl, oldUrl));
            oldUrl = newUrl;
          }
        }, 1e3);
      }
    };
  }
  const _ContentScriptContext = class _ContentScriptContext {
    constructor(contentScriptName, options) {
      __publicField(this, "isTopFrame", window.self === window.top);
      __publicField(this, "abortController");
      __publicField(this, "locationWatcher", createLocationWatcher(this));
      __publicField(this, "receivedMessageIds", /* @__PURE__ */ new Set());
      this.contentScriptName = contentScriptName;
      this.options = options;
      this.abortController = new AbortController();
      if (this.isTopFrame) {
        this.listenForNewerScripts({ ignoreFirstEvent: true });
        this.stopOldScripts();
      } else {
        this.listenForNewerScripts();
      }
    }
    get signal() {
      return this.abortController.signal;
    }
    abort(reason) {
      return this.abortController.abort(reason);
    }
    get isInvalid() {
      if (browser.runtime.id == null) {
        this.notifyInvalidated();
      }
      return this.signal.aborted;
    }
    get isValid() {
      return !this.isInvalid;
    }
    /**
     * Add a listener that is called when the content script's context is invalidated.
     *
     * @returns A function to remove the listener.
     *
     * @example
     * browser.runtime.onMessage.addListener(cb);
     * const removeInvalidatedListener = ctx.onInvalidated(() => {
     *   browser.runtime.onMessage.removeListener(cb);
     * })
     * // ...
     * removeInvalidatedListener();
     */
    onInvalidated(cb) {
      this.signal.addEventListener("abort", cb);
      return () => this.signal.removeEventListener("abort", cb);
    }
    /**
     * Return a promise that never resolves. Useful if you have an async function that shouldn't run
     * after the context is expired.
     *
     * @example
     * const getValueFromStorage = async () => {
     *   if (ctx.isInvalid) return ctx.block();
     *
     *   // ...
     * }
     */
    block() {
      return new Promise(() => {
      });
    }
    /**
     * Wrapper around `window.setInterval` that automatically clears the interval when invalidated.
     */
    setInterval(handler, timeout) {
      const id = setInterval(() => {
        if (this.isValid) handler();
      }, timeout);
      this.onInvalidated(() => clearInterval(id));
      return id;
    }
    /**
     * Wrapper around `window.setTimeout` that automatically clears the interval when invalidated.
     */
    setTimeout(handler, timeout) {
      const id = setTimeout(() => {
        if (this.isValid) handler();
      }, timeout);
      this.onInvalidated(() => clearTimeout(id));
      return id;
    }
    /**
     * Wrapper around `window.requestAnimationFrame` that automatically cancels the request when
     * invalidated.
     */
    requestAnimationFrame(callback) {
      const id = requestAnimationFrame((...args) => {
        if (this.isValid) callback(...args);
      });
      this.onInvalidated(() => cancelAnimationFrame(id));
      return id;
    }
    /**
     * Wrapper around `window.requestIdleCallback` that automatically cancels the request when
     * invalidated.
     */
    requestIdleCallback(callback, options) {
      const id = requestIdleCallback((...args) => {
        if (!this.signal.aborted) callback(...args);
      }, options);
      this.onInvalidated(() => cancelIdleCallback(id));
      return id;
    }
    addEventListener(target, type, handler, options) {
      var _a2;
      if (type === "wxt:locationchange") {
        if (this.isValid) this.locationWatcher.run();
      }
      (_a2 = target.addEventListener) == null ? void 0 : _a2.call(
        target,
        type.startsWith("wxt:") ? getUniqueEventName(type) : type,
        handler,
        {
          ...options,
          signal: this.signal
        }
      );
    }
    /**
     * @internal
     * Abort the abort controller and execute all `onInvalidated` listeners.
     */
    notifyInvalidated() {
      this.abort("Content script context invalidated");
      logger$1.debug(
        `Content script "${this.contentScriptName}" context invalidated`
      );
    }
    stopOldScripts() {
      window.postMessage(
        {
          type: _ContentScriptContext.SCRIPT_STARTED_MESSAGE_TYPE,
          contentScriptName: this.contentScriptName,
          messageId: Math.random().toString(36).slice(2)
        },
        "*"
      );
    }
    verifyScriptStartedEvent(event) {
      var _a2, _b2, _c;
      const isScriptStartedEvent = ((_a2 = event.data) == null ? void 0 : _a2.type) === _ContentScriptContext.SCRIPT_STARTED_MESSAGE_TYPE;
      const isSameContentScript = ((_b2 = event.data) == null ? void 0 : _b2.contentScriptName) === this.contentScriptName;
      const isNotDuplicate = !this.receivedMessageIds.has((_c = event.data) == null ? void 0 : _c.messageId);
      return isScriptStartedEvent && isSameContentScript && isNotDuplicate;
    }
    listenForNewerScripts(options) {
      let isFirst = true;
      const cb = (event) => {
        if (this.verifyScriptStartedEvent(event)) {
          this.receivedMessageIds.add(event.data.messageId);
          const wasFirst = isFirst;
          isFirst = false;
          if (wasFirst && (options == null ? void 0 : options.ignoreFirstEvent)) return;
          this.notifyInvalidated();
        }
      };
      addEventListener("message", cb);
      this.onInvalidated(() => removeEventListener("message", cb));
    }
  };
  __publicField(_ContentScriptContext, "SCRIPT_STARTED_MESSAGE_TYPE", getUniqueEventName(
    "wxt:content-script-started"
  ));
  let ContentScriptContext = _ContentScriptContext;
  function initPlugins() {
  }
  function print(method, ...args) {
    if (typeof args[0] === "string") {
      const message = args.shift();
      method(`[wxt] ${message}`, ...args);
    } else {
      method("[wxt]", ...args);
    }
  }
  const logger = {
    debug: (...args) => print(console.debug, ...args),
    log: (...args) => print(console.log, ...args),
    warn: (...args) => print(console.warn, ...args),
    error: (...args) => print(console.error, ...args)
  };
  const result = (async () => {
    try {
      initPlugins();
      const { main, ...options } = definition;
      const ctx = new ContentScriptContext("content", options);
      return await main(ctx);
    } catch (err) {
      logger.error(
        `The content script "${"content"}" crashed on startup!`,
        err
      );
      throw err;
    }
  })();
  return result;
}();
content;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3d4dC9kaXN0L3V0aWxzL2RlZmluZS1jb250ZW50LXNjcmlwdC5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd4dC1kZXYvYnJvd3Nlci9zcmMvaW5kZXgubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3d4dC9kaXN0L2Jyb3dzZXIubWpzIiwiLi4vLi4vLi4vc3JjL2VudHJ5cG9pbnRzL2NvbnRlbnQudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvdXRpbHMvaW50ZXJuYWwvbG9nZ2VyLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy93eHQvZGlzdC91dGlscy9pbnRlcm5hbC9jdXN0b20tZXZlbnRzLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy93eHQvZGlzdC91dGlscy9pbnRlcm5hbC9sb2NhdGlvbi13YXRjaGVyLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy93eHQvZGlzdC91dGlscy9jb250ZW50LXNjcmlwdC1jb250ZXh0Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGVmaW5lQ29udGVudFNjcmlwdChkZWZpbml0aW9uKSB7XG4gIHJldHVybiBkZWZpbml0aW9uO1xufVxuIiwiLy8gI3JlZ2lvbiBzbmlwcGV0XG5leHBvcnQgY29uc3QgYnJvd3NlciA9IGdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZT8uaWRcbiAgPyBnbG9iYWxUaGlzLmJyb3dzZXJcbiAgOiBnbG9iYWxUaGlzLmNocm9tZTtcbi8vICNlbmRyZWdpb24gc25pcHBldFxuIiwiaW1wb3J0IHsgYnJvd3NlciBhcyBfYnJvd3NlciB9IGZyb20gXCJAd3h0LWRldi9icm93c2VyXCI7XG5leHBvcnQgY29uc3QgYnJvd3NlciA9IF9icm93c2VyO1xuZXhwb3J0IHt9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29udGVudFNjcmlwdCh7XG4gIG1hdGNoZXM6IFsnPGFsbF91cmxzPiddLFxuICBtYWluKCkge1xuICAgIC8vIExpc3RlIGRlcyBkb21haW5lcyBzdXBwb3J0w6lzXG4gICAgY29uc3QgU1VQUE9SVEVEX0RPTUFJTlMgPSBbXG4gICAgICAnY2FwaXRhbC5mcicsXG4gICAgICAnZ2VvLmZyJyxcbiAgICAgICdjYW1pbnRlcmVzc2UuZnInLFxuICAgICAgJ2N1aXNpbmVhY3R1ZWxsZS5mcicsXG4gICAgICAnaGJyZnJhbmNlLmZyJyxcbiAgICAgICd2b2ljaS5mcicsXG4gICAgICAnZmVtbWVhY3R1ZWxsZS5mcicsXG4gICAgICAnaGFycGVyc2JhemFhci5mcicsXG4gICAgICAnY290ZW1haXNvbi5mcicsXG4gICAgICAnaGVsbG9jb3Rvbi5mcicsXG4gICAgICAncXVvaS5pbmZvJyxcbiAgICAgICdzZWxlY3Rpb25zaG9wcGluZy5jb20nXG4gICAgXTtcblxuICAgIC8vIENpdGF0aW9ucyBLYWFtZWxvdHRcbiAgICBjb25zdCBLQUFNRUxPVFRfUVVPVEVTID0gW1xuICAgICAgXCJKZSBuZSBtYW5nZSBwYXMgZGUgZ3JhaW5lcyFcIixcbiAgICAgIFwiQydlc3QgcGFzIGZhdXhcIixcbiAgICAgIFwiT24gZW4gYSBncm9zIVwiLFxuICAgICAgXCJNYWlzIGplIHZvdXMgZW1tZXJkZSwgbW9uIHAndGl0IHBvdGUhXCIsXG4gICAgICBcIkFoLCBjJ2VzdCBzw7tyIHF1J2MnZXN0IHBhcyBKbyBsJ1JpZ29sbywgdG91cyBsZXMgam91cnMuLi5cIixcbiAgICAgIFwiTW9pLCBqJ3NlcmFpcyB2b3VzLCBqJ3ZvdXMgw6ljb3V0ZXJhaXMuLi4gTm9uLCBtb2ksIGonc2VyYWlzIG5vdXMsIGondm91cy4uLiBTaSBtb2ksIGonw6l0YWlzIHZvdXMsIGonbm91cyDDqWNvdXRlcmFpcyFcIixcbiAgICAgIFwiTWFpcyDDqXZpZGVtbWVudCBjJ2VzdCBzYW5zIGFsY29vbCFcIixcbiAgICAgIFwiRmF1dCBhcnLDqnRlciBjZXMgY29ubmVyaWVzIGRlIG5vcmQgZXQgZGUgc3VkICEgVW5lIGZvaXMgcG91ciB0b3V0ZXMsIGxlIG5vcmQsIHN1aXZhbnQgY29tbWVudCBvbiBlc3QgdG91cm7DqSwgw6dhIGNoYW5nZSB0b3V0ICFcIixcbiAgICAgIFwiTWFpcyBiaWVuIHPDu3IgcXVlIHNpLCBqZSB2b3VzIMOpY291dGUgISBNYWlzIGzDoCBjb21tZSB2b3VzIHBhcmxleiBkZSBjcmV1c2VyLCBqJ3Zpc3VhbGlzZSBsYSBzY8OobmUsIGV0IGplIG1lIGRpcyBxdSdpbCBmYXV0IHZyYWltZW50IMOqdHJlIGNvbiBwb3VyIGNyZXVzZXIgdW4gdHJvdSBkYW5zIGxhIGdsYWNlICFcIixcbiAgICAgIFwiUEFZUyBERSBHQUxMRVMgSU5Ew4lQRU5EQU5UICFcIixcbiAgICAgIFwiUXUnZXN0LWNlIHF1ZSBjJ2VzdCBxdWUgY2Ugc3R5bGUgZGUgYm91ZmZlciBkZXMgcGV0aXRzIG1hY2hpbnMgdG91dCBzZWNzIGV0IHRyb2lzIGdhbGxldHRlcyBwbGVpbiBkZSBmcm9tYWdlID9cIixcbiAgICAgIFwiTW9pLCB1bmUgZm9pcywgaidhaSBwcmlzIHVuZSBjbGFxdWUsIGVoIGJlbiwgamUgbCdhaSBqYW1haXMgcmV0cm91dsOpZS4uLlwiLFxuICAgICAgXCJMZSBHcmFhbCwgamUgc2FpcyBwYXMgb8O5IGlsIGVzdCBtYWlzIGlsIHZhIHkgcmVzdGVyIHVuIG1vbWVudC5cIixcbiAgICAgIFwiU2kgbGEgbcOpbW9pcmUgZXN0IMOgIGxhIHTDqnRlIGNlIHF1ZSBsZSBwYXNzw6ksIHBldXQtb24geSBhY2PDqWRlciDDoCBjaGV2YWwgP1wiLFxuICAgICAgXCJWb3VzIHNhdmV6IGMncXVlIGMnZXN0LCBtb24gcHJvYmzDqG1lID8gVHJvcCBnZW50aWwgIVwiLFxuICAgIF07XG5cbiAgICAvLyBDaXRhdGlvbnMgS2FhbWVsb3R0IHBvdXIgbGVzIHBhcmFncmFwaGVzXG4gICAgY29uc3QgS0FBTUVMT1RUX1BBUkFHUkFQSFMgPSBbXG4gICAgICBcIk1vaSwgamUgbSdlbiBmb3VzLCBzaSBvbiBtZSBmb3JjZSDDoCBjaG9pc2lyIGVudHJlIGxhIHBlc3RlIGV0IGxlIGNob2zDqXJhLCBqZSBwcmVuZHMgbGVzIGRldXguIENvbW1lIMOnYSwgamUgc3VpcyB0cmFucXVpbGxlLCBqZSBzYWlzIHF1ZSBqZSB2YWlzIG1vdXJpciwgbWFpcyBhdSBtb2lucyBqZSBsJ2FpIGNob2lzaS4gQydlc3Qgw6dhIGxhIGxpYmVydMOpICEgTWFpbnRlbmFudCwgc2kgdm91cyB2b3VsZXogZmFpcmUgcXVlbHF1ZSBjaG9zZSBwb3VyIG1vaSwgdm91cyBtZSBkb25uZXogdW4gYm91dCBkZSBmcm9tYWdlIGV0IGR1IHBhaW4sIHBhcmNlIHF1ZSBqJ2FpIGZhaW0uXCIsXG4gICAgICBcIk5vbiBtYWlzIGF0dGVuZGV6LCBqZSB2ZXV4IGRpcmUuLi4gSmUgc3VpcyBwYXMgZW4gdHJhaW4gZGUgY2hlcmNoZXIgw6Agdm91cyBlbWJvYmluZXIsIG1vaS4gTGVzIGNlcmZzLCBsZXMgc2FuZ2xpZXJzIHRvdXQgw6dhLCBjJ2VzdCBkdSBnaWJpZXIsIG1haXMgbGEgYmljaGUsIGVuZmluIGxlcyBiaWNoZXMsIGMnZXN0IHBsdXMgc2FjcsOpICEgQydlc3QgY29tbWUgbGUgZGFpbSwgbGEgYmljaGUgYydlc3QgbGEgZGFtZSBkdSBzb3VzLWJvaXMuIEFsb3JzIGMnZXN0IHVuIHBldSBjb21tZSBzaSBvbiB0dWFpdCB1bmUgcGVyc29ubmUgaHVtYWluZSwgdm91cyB2b3lleiA/XCIsXG4gICAgICBcIk1haXMgw6l2aWRlbW1lbnQgYydlc3Qgc2FucyBhbGNvb2whIFZvdXMgbWUgcHJlbmV6IHBvdXIgdW4gc29pZmZhcmQ/IE5vbiBtYWlzIHZvdXMgdm91cyByZW5kZXogY29tcHRlIHF1ZSBzaSBqZSBmYWlzIGxlIHNlcnZpY2UgYXZlYyBkZSBsJ2FsY29vbCwgZGFucyB1bmUgZGVtaS1oZXVyZSBpbCB5IGEgcGx1cyBwZXJzb25uZSEgSWxzIHNvbnQgdG91cyByYWlkZXMgbW9ydHMgZGFucyBsZXMgZXNjYWxpZXJzISBOb24gbWFpcyBkw6lqw6AgcXVlIHF1YW5kIGplIGZhaXMgbGUgc2VydmljZSBhdmVjIGRlIGwnZWF1LCBpbHMgc29udCB0b3VzIGVuIHRyYWluIGRlIHNlIHBsYWluZHJlIHF1ZSBjJ2VzdCBkw6lndWV1bGFzc2UhXCIsXG4gICAgICBcIk1haXMgYydlc3QgcGFzIHBvc3NpYmxlLCBkJ2/DuSBzb3J0ZXotdm91cyDDp2E/IE5vbiwgbWFpcyB2b3VzIHZvdXMgY3JveWV6IG/DuT8gTm9uIG1haXMgdm91cyB2b3VzIHByZW5leiBwb3VyIHF1aT8gTm9uIG1haXMgdm91cyB2b3VzIHJlbmRleiBjb21wdGUgZGUgY2UgcXVlIHZvdXMgZGl0ZXM/IE1haXMgZW5maW4sIHZveW9ucy4uLiBOb24gbWFpcyBhdHRlbmRleiwgamUgcsOqdmUhIE1haXMgYydlc3QgcGFzIHZyYWkhIE1haXMgamUgdmFpcyBtZSByw6l2ZWlsbGVyISBOb24gbWFpcyBwaW5jZXotbW9pLCBqZSByw6p2ZSEgTm9uIG1haXMgamUgc3VpcyBkYW5zIHVuIGNhdWNoZW1hciFcIixcbiAgICAgIFwiSmUgdm9pcyB0cm91YmxlLi4uIEMnZXN0IGxlIG1hbnF1ZSBkZSBncmFzLiBKZSB2b3VzIGwnYWkgZMOpasOgIGRpdCBjZW50IGZvaXMgOiBzaSB2b3VzIHZvdWxleiBxdWUgamUgc29pcyBlbiBmb3JtZSwgaWwgZmF1dCBtZSBnYXZlciAhIE1vaSwgbW9uIG3DqXRhYm9saXNtZSBlc3QgY29tbWUgw6dhLiBKZSBzdWlzIHBhcyB1biBhbmltYWwgc2F1dmFnZS4gSmUgc3VpcyBwYXMgZmFpdCBwb3VyIGxhIGN1ZWlsbGV0dGUgZXQgbGEgY2hhc3NlLiBNb2ksIGlsIG1lIGZhdXQgZGUgbGEgdmlhbmRlLCBkdSBncmFzLCBkdSBzZWwsIGV0IHN1cnRvdXQsIHN1cnRvdXQuLi4gZGUgbGEgY2Vydm9pc2UgIVwiLFxuICAgICAgXCJNYWlzIGF0dGVuZGV6Li4uIEMnZXN0IHBhcyBwb3NzaWJsZSBxdWUgY2Ugc29pdCBtb2kgcXVpIGV4cGxpcXVlIMOnYSDDoCBkZXMgY2hldmFsaWVycyBkZSBsYSBUYWJsZSBSb25kZSAhIExhIFRhYmxlIFJvbmRlLCBjJ2VzdCBwYXMgdW5lIHRhYmxlIGNvbW1lIGxlcyBhdXRyZXMuIEFydCBldCBzeW1ib2xlICEgTGUgR3JhYWwsIGMnZXN0IHBhcyB1bmUgY291cGUgY29tbWUgbGVzIGF1dHJlcy4gTGUgY2jDonRlYXUgZGUgS2FhbWVsb3R0LCBjJ2VzdCBwYXMgdW4gY2jDonRlYXUgY29tbWUgbGVzIGF1dHJlcyAhIEV0IG1vaSwgamUgc3VpcyBwYXMgdW4gcm9pIGNvbW1lIGxlcyBhdXRyZXMgIVwiLFxuICAgICAgXCJWb3VzIHNhdmV6IHF1ZSBqJ2FpIHbDqWN1IHVuZSBleHDDqXJpZW5jZSB1bmlxdWUuIEonYWkgZmFpdCB1biB2b3lhZ2UgZW4gSXJsYW5kZS4uLiBBaCBub24sIGMnw6l0YWl0IGVuIMOJY29zc2UuIEVuZmluIGJyZWYsIGonYWkgdnUgZGVzIHR5cGVzLCBpbHMgw6l0YWllbnQgdG91cyBlbiBraWx0LCBldCBpbHMgam91YWllbnQgZGUgbGEgY29ybmVtdXNlLiBNYWlzIGxlIHBsdXMgZGluZ3VlLCBjJ2VzdCBxdSdpbHMgw6l0YWllbnQgdG91cyBib3VycsOpcyBjb21tZSBkZXMgY29pbnMuIEV0IGzDoCwgamUgbWUgc3VpcyBkaXQgOiAnQydlc3Qgw6dhIGxhIGxpYmVydMOpICEnXCIsXG4gICAgICBcIk5vbiBtYWlzIGplIHZhaXMgdm91cyBkaXJlIDogdG91dCBsZSBtb25kZSBlbiBhIHJpZW4gw6AgZm91dHJlLiBMZXMgY2hlZnMgZGUgY2xhbiwgaWxzIGZvbnQgZGVzIHLDqXVuaW9ucyBwb3VyIGTDqWNvbm5lciwgcG91ciBib2lyZSBkZXMgY291cHMsIGV0IHBvdXIgc2UgdGFwZXIgc3VyIGwnw6lwYXVsZS4gVG91dCBsZSBtb25kZSBzJ2VuIGZvdXQsIGRlIGxhIEdyYW5kZSBCcmV0YWduZS4gVG91dCBsZSBtb25kZSBzJ2VuIGZvdXQsIGRlIGwndW5pZmljYXRpb24uIFRvdXQgbGUgbW9uZGUgcydlbiBmb3V0LCBkZSB0b3V0LiBNb2kgbGUgcHJlbWllci5cIlxuICAgIF07XG5cbiAgICAvLyBQZXJzb25uYWdlcyBkZSBLYWFtZWxvdHRcbiAgICBjb25zdCBLQUFNRUxPVFRfQ0hBUkFDVEVSUyA9IFtcbiAgICAgIFwiQXJ0aHVyIC0gUm9pIGRlIEJyZXRhZ25lXCIsXG4gICAgICBcIlBlcmNldmFsIC0gQ2hldmFsaWVyIGRlIEdhbGxlc1wiLFxuICAgICAgXCJLYXJhZG9jIC0gQ2hldmFsaWVyIGRlIFZhbm5lc1wiLFxuICAgICAgXCJMw6lvZGFnYW4gLSBSb2kgZGUgQ2FybcOpbGlkZVwiLFxuICAgICAgXCJNZXJsaW4gLSBMJ0VuY2hhbnRldXJcIixcbiAgICAgIFwiQm9ob3J0IC0gQ2hldmFsaWVyIGRlIEdhdW5lc1wiLFxuICAgICAgXCJMYW5jZWxvdCAtIENoZXZhbGllciBkdSBMYWNcIixcbiAgICAgIFwiTGUgUMOocmUgQmxhaXNlIC0gQ2hhcGVsYWluXCIsXG4gICAgICBcIlZlbmVjIC0gTWFyY2hhbmRcIixcbiAgICAgIFwiS2Fkb2MgLSBGcsOocmUgZGUgS2FyYWRvY1wiLFxuICAgICAgXCJEYW1lIFPDqWxpIC0gUmVpbmUgZGUgQ2FybcOpbGlkZVwiLFxuICAgICAgXCJHdWVuacOodnJlIC0gUmVpbmUgZGUgQnJldGFnbmVcIixcbiAgICAgIFwiWXZhaW4gLSBDaGV2YWxpZXIgYXUgTGlvblwiLFxuICAgICAgXCJHYXV2YWluIC0gQ2hldmFsaWVyXCIsXG4gICAgICBcIkFuZ2hhcmFkIC0gU2VydmFudGVcIixcbiAgICAgIFwiTCdpbnRlcnByw6h0ZSBidXJnb25kZVwiLFxuICAgICAgXCJMZSBNYcOudHJlIGQnQXJtZXNcIixcbiAgICAgIFwiTGUgVGF2ZXJuaWVyXCJcbiAgICBdO1xuXG4gICAgLy8gSW1hZ2VzIEthYW1lbG90dFxuICAgIGNvbnN0IEtBQU1FTE9UVF9JTUFHRVMgPSBbXG4gICAgICAnaW1hZ2VzL2thYW1lbG90dC9rYWFtZWxvdHQtcGhvdG8tMTM0NTY4Ny5qcGcnLFxuICAgICAgJ2ltYWdlcy9rYWFtZWxvdHQva2FhbWVsb3R0LXBob3RvLTEzODg3ODIuanBnJyxcbiAgICAgICdpbWFnZXMva2FhbWVsb3R0L2thYW1lbG90dC1waG90by0xMzg3OTU0LmpwZycsXG4gICAgICAnaW1hZ2VzL2thYW1lbG90dC9rYWFtZWxvdHQtcGhvdG8tMTM4Nzk1Mi5qcGcnLFxuICAgICAgJ2ltYWdlcy9rYWFtZWxvdHQva2FhbWVsb3R0LXBob3RvLTEzODgzODcuanBnJyxcbiAgICAgICdpbWFnZXMva2FhbWVsb3R0L2thYW1lbG90dC1waG90by0xMzg3OTMzLmpwZycsXG4gICAgICAnaW1hZ2VzL2thYW1lbG90dC9rYWFtZWxvdHQtcGhvdG8tMTM4NzkzNC5qcGcnLFxuICAgICAgJ2ltYWdlcy9rYWFtZWxvdHQva2FhbWVsb3R0LXBob3RvLTEzODc5NjQuanBnJyxcbiAgICAgICdpbWFnZXMva2FhbWVsb3R0L2thYW1lbG90dC1waG90by0xMzg4Mzg5LmpwZycsXG4gICAgICAnaW1hZ2VzL2thYW1lbG90dC9rYWFtZWxvdHQtcGhvdG8tMTM4Nzk0Mi5qcGcnLFxuICAgICAgJ2ltYWdlcy9rYWFtZWxvdHQva2FhbWVsb3R0LXBob3RvLTEzODc5MzguanBnJyxcbiAgICAgICdpbWFnZXMva2FhbWVsb3R0L2thYW1lbG90dC1waG90by0xMzg3OTQzLmpwZycsXG4gICAgICAnaW1hZ2VzL2thYW1lbG90dC9rYWFtZWxvdHQtcGhvdG8tMTM4ODM4OC5qcGcnLFxuICAgICAgJ2ltYWdlcy9rYWFtZWxvdHQva2FhbWVsb3R0LXBob3RvLTEzODgzODUud2VicCcsXG4gICAgICAnaW1hZ2VzL2thYW1lbG90dC9rYWFtZWxvdHQtcGhvdG8tMTM4ODM4My5qcGcnLFxuICAgICAgJ2ltYWdlcy9rYWFtZWxvdHQva2FhbWVsb3R0LXBob3RvLWFsZXhhbmRyZS1hc3RpZXItYW5uZS1naXJvdWFyZC0xMzg2OTQ1LmpwZycsXG4gICAgICAnaW1hZ2VzL2thYW1lbG90dC9rYWFtZWxvdHQtcGhvdG8tZ2VyYWxkaW5lLW5ha2FjaGUtYWxhaW4tY2hhYmF0LTEzODY5ODkuanBnJyxcbiAgICAgICdpbWFnZXMva2FhbWVsb3R0L2thYW1lbG90dC1waG90by1rYWFtZWxvdHQtMTA1NDUxNC5qcGcnLFxuICAgICAgJ2ltYWdlcy9rYWFtZWxvdHQva2FhbWVsb3R0LXByZW1pZXItdm9sZXQtcGhvdG8tamFjcXVlcy1jaGFtYm9uLTEzODY5NjIuanBnJ1xuICAgIF07XG5cbiAgICAvLyBGb25jdGlvbnMgdXRpbGl0YWlyZXNcbiAgICBmdW5jdGlvbiBnZXRSYW5kb21RdW90ZSgpOiBzdHJpbmcge1xuICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBLQUFNRUxPVFRfUVVPVEVTLmxlbmd0aCk7XG4gICAgICByZXR1cm4gS0FBTUVMT1RUX1FVT1RFU1tyYW5kb21JbmRleF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tUGFyYWdyYXBoKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEtBQU1FTE9UVF9QQVJBR1JBUEhTLmxlbmd0aCk7XG4gICAgICByZXR1cm4gS0FBTUVMT1RUX1BBUkFHUkFQSFNbcmFuZG9tSW5kZXhdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbUNoYXJhY3RlcigpOiBzdHJpbmcge1xuICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBLQUFNRUxPVFRfQ0hBUkFDVEVSUy5sZW5ndGgpO1xuICAgICAgcmV0dXJuIEtBQU1FTE9UVF9DSEFSQUNURVJTW3JhbmRvbUluZGV4XTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSYW5kb21JbWFnZSgpOiBzdHJpbmcge1xuICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBLQUFNRUxPVFRfSU1BR0VTLmxlbmd0aCk7XG4gICAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLmdldFVSTChLQUFNRUxPVFRfSU1BR0VTW3JhbmRvbUluZGV4XSBhcyBhbnkpO1xuICAgIH1cblxuICAgIC8vIFbDqXJpZmllIHNpIGwnVVJMIGFjdHVlbGxlIGVzdCBzdXIgdW4gc2l0ZSBzdXBwb3J0w6lcbiAgICBmdW5jdGlvbiBpc09uU3VwcG9ydGVkU2l0ZSh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwpO1xuICAgICAgICBjb25zdCBob3N0bmFtZSA9IHVybE9iai5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHJldHVybiBTVVBQT1JURURfRE9NQUlOUy5zb21lKGRvbWFpbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIGhvc3RuYW1lLmluY2x1ZGVzKGRvbWFpbi50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgICAgICAgICBob3N0bmFtZS5pbmNsdWRlcyhkb21haW4uc3BsaXQoJy4nKVswXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBhcnNpbmcgVVJMOicsIGUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRm9uY3Rpb24gcG91ciByZW1wbGFjZXIgbGUgY29udGVudSBwYXIgZHUgS2FhbWVsb3R0XG4gICAgZnVuY3Rpb24gcmVwbGFjZUNvbnRlbnRXaXRoS2FhbWVsb3R0KCk6IHZvaWQge1xuICAgICAgLy8gUmVtcGxhY2VyIGxlcyB0aXRyZXMgZGVzIGFydGljbGVzXG4gICAgICBjb25zdCBhcnRpY2xlVGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFydGljbGVDYXJkLXRpdGxlLCAub3JkZXJlZENvbnRlbnRMaXN0LXRpdGxlLCAuYXJ0aWNsZUJvZHktZHJhZnQgaDIsIC5saW5rQ2FyZCBhLCAuYXJ0aWNsZS1oZWFkVGl0bGUnKTtcbiAgICAgIGFydGljbGVUaXRsZXMuZm9yRWFjaCh0aXRsZSA9PiB7XG4gICAgICAgIGlmICh0aXRsZS50ZXh0Q29udGVudCkge1xuICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gZ2V0UmFuZG9tUXVvdGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIFJlbXBsYWNlciBsZXMgdGV4dGVzIGQnYWNjcm9jaGVcbiAgICAgIGNvbnN0IGxlYWRUZXh0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnRpY2xlQ2FyZC1sZWFkVGV4dCwgLmNhdGVnb3J5LWhlYWQgcCwgLmFydGljbGUtaGVhZExlYWQgcCcpO1xuICAgICAgbGVhZFRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgICAgIGlmICh0ZXh0LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGdldFJhbmRvbVBhcmFncmFwaCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gUmVtcGxhY2VyIGxlcyBjYXTDqWdvcmllc1xuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnRpY2xlQ2FyZC1jYXRlZ29yeSwgLmhvbWVwYWdlU2VjdGlvbiAudGl0bGUtbGluaywgLmNhdGVnb3J5LWhlYWQgLnRpdGxlLCAubGlua0NhcmQtdGl0bGUsIC50YWdMaXN0LWxpc3RJdGVtIGEnKTtcbiAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgIGlmIChjYXRlZ29yeS50ZXh0Q29udGVudCkge1xuICAgICAgICAgIGNhdGVnb3J5LnRleHRDb250ZW50ID0gZ2V0UmFuZG9tQ2hhcmFjdGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZW1wbGFjZXIgbGUgY29udGVudSBkZXMgYXJ0aWNsZXNcbiAgICAgIGNvbnN0IGFydGljbGVQYXJhZ3JhcGhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFydGljbGVCb2R5LWRyYWZ0IHAnKTtcbiAgICAgIGFydGljbGVQYXJhZ3JhcGhzLmZvckVhY2gocGFyYWdyYXBoID0+IHtcbiAgICAgICAgaWYgKHBhcmFncmFwaC50ZXh0Q29udGVudCkge1xuICAgICAgICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGdldFJhbmRvbVBhcmFncmFwaCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gUmVtcGxhY2VyIGxlcyBpbWFnZXMgZGlyZWN0ZXNcbiAgICAgIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb3JwcyBpbWcsIC5hcnRpY2xlQ2FyZC1pbWFnZSBpbWcsIC5hcnRpY2xlLWhlYWRJbWFnZSBpbWcsIGltZ1tzcmMqPVwianBnXCJdLCBpbWdbc3JjKj1cInBuZ1wiXSwgaW1nW3NyYyo9XCJ3ZWJwXCJdJyk7XG4gICAgICBpbWFnZXMuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBpbWcgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgaW1nRWxlbWVudC5zcmMgPSBnZXRSYW5kb21JbWFnZSgpO1xuICAgICAgICBpZiAoaW1nRWxlbWVudC5zcmNzZXQpIHtcbiAgICAgICAgICBpbWdFbGVtZW50LnNyY3NldCA9IGdldFJhbmRvbUltYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWpvdXRlciB1biBhdHRyaWJ1dCBhbHQgS2FhbWVsb3R0XG4gICAgICAgIGltZ0VsZW1lbnQuYWx0ID0gZ2V0UmFuZG9tUXVvdGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZW1wbGFjZXIgbGVzIHNvdXJjZXMgZGFucyBsZXMgYmFsaXNlcyBwaWN0dXJlXG4gICAgICBjb25zdCBzb3VyY2VzSW5QaWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvcnBzIHBpY3R1cmUgc291cmNlLCBwaWN0dXJlIHNvdXJjZScpO1xuICAgICAgc291cmNlc0luUGljdHVyZS5mb3JFYWNoKChzb3VyY2UpID0+IHtcbiAgICAgICAgY29uc3Qgc291cmNlRWxlbWVudCA9IHNvdXJjZSBhcyBIVE1MU291cmNlRWxlbWVudDtcbiAgICAgICAgaWYgKHNvdXJjZUVsZW1lbnQuc3Jjc2V0KSB7XG4gICAgICAgICAgc291cmNlRWxlbWVudC5zcmNzZXQgPSBnZXRSYW5kb21JbWFnZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gUmVtcGxhY2VyIGxlcyBpbWFnZXMgZGUgZm9uZCBDU1NcbiAgICAgIGNvbnN0IGVsZW1lbnRzV2l0aEJhY2tncm91bmRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tzdHlsZSo9XCJiYWNrZ3JvdW5kLWltYWdlXCJdJyk7XG4gICAgICBlbGVtZW50c1dpdGhCYWNrZ3JvdW5kSW1hZ2UuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBodG1sRWxlbWVudCA9IGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGh0bWxFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtnZXRSYW5kb21JbWFnZSgpfSlgO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRm9uY3Rpb24gcHJpbmNpcGFsZSBxdWkgYWpvdXRlIGxlIGJvdXRvblxuICAgIGZ1bmN0aW9uIGFkZFNpdGVCdXR0b24oKTogdm9pZCB7XG4gICAgICAvLyBWw6lyaWZpZXIgc2kgbm91cyBzb21tZXMgc3VyIHVuIHNpdGUgc3VwcG9ydMOpXG4gICAgICBpZiAoIWlzT25TdXBwb3J0ZWRTaXRlKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFbDqXJpZmllciBzaSBsZSBib3V0b24gZXhpc3RlIGTDqWrDoFxuICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvd3NUb29scy1idXR0b25IdG1sJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDcsOpZXIgbGUgYm91dG9uXG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGJ1dHRvbi5pZCA9ICdvd3NUb29scy1idXR0b25IdG1sJztcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdPV1MnO1xuXG4gICAgICAvLyBWw6lyaWZpZXIgbGEgdmlzaWJpbGl0w6kgZGFucyBsZSBsb2NhbFN0b3JhZ2VcbiAgICAgIGNvbnN0IHNob3VsZEJlVmlzaWJsZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvd3NUb29sc19vd3NCdXR0b25WaXNpYmxlJykgPT09ICd0cnVlJztcbiAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gc2hvdWxkQmVWaXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnO1xuXG4gICAgICAvLyBSw6ljdXDDqXJlciBsYSBwb3NpdGlvbiBzYXV2ZWdhcmTDqWUgc2kgZWxsZSBleGlzdGVcbiAgICAgIGNvbnN0IHNhdmVkUG9zaXRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3dzVG9vbHMtYnV0dG9uUG9zaXRpb24nKTtcbiAgICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbiA9IHNhdmVkUG9zaXRpb24gPyBKU09OLnBhcnNlKHNhdmVkUG9zaXRpb24pIDogeyB0b3A6ICcyMHB4JywgbGVmdDogJzIwcHgnIH07XG5cbiAgICAgIC8vIENyw6llciB1biB0b29sdGlwXG4gICAgICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b29sdGlwLmlkID0gJ293c1Rvb2xzLXRvb2x0aXAnO1xuICAgICAgdG9vbHRpcC50ZXh0Q29udGVudCA9ICdXSVAnO1xuICAgICAgdG9vbHRpcC5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHotaW5kZXg6IDEwMDAxO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGA7XG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQodG9vbHRpcCk7XG5cbiAgICAgIC8vIEFwcGxpcXVlciBkZXMgc3R5bGVzIHBvdXIgdW4gYm91dG9uIHJvbmRcbiAgICAgIGJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogJHtpbml0aWFsUG9zaXRpb24udG9wfTtcbiAgICAgICAgbGVmdDogJHtpbml0aWFsUG9zaXRpb24ubGVmdH07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1RjQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDY2LCAxMzMsIDI0NCwgMC4zKTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgJHtzaG91bGRCZVZpc2libGUgPyAnZGlzcGxheTogZmxleDsnIDogJ2Rpc3BsYXk6IG5vbmU7J31cbiAgICAgIGA7XG5cbiAgICAgIC8vIEFqb3V0ZXIgdW4gZWZmZXQgZGUgc3Vydm9sXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzMzY3RDYnO1xuICAgICAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxLjA1KSc7XG4gICAgICAgIHRvb2x0aXAuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgdG9vbHRpcC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKDApJztcbiAgICAgIH0pO1xuXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzQyODVGNCc7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzAuOCc7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xuICAgICAgICB0b29sdGlwLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHRvb2x0aXAuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtMjBweCknO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFZhcmlhYmxlcyBwb3VyIGxlIGRyYWcgYW5kIGRyb3AgZXQgZMOpdGVjdGlvbiBkdSBjbGljIHNpbXBsZVxuICAgICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIGxldCBoYXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgbGV0IG9mZnNldFg6IG51bWJlciwgb2Zmc2V0WTogbnVtYmVyO1xuICAgICAgbGV0IG1vdXNlRG93blRpbWU6IG51bWJlcjtcblxuICAgICAgLy8gRMOpbWFycmVyIGxlIGdsaXNzZXItZMOpcG9zZXJcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgaGFzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgbW91c2VEb3duVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBvZmZzZXRYID0gZS5jbGllbnRYIC0gYnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgIG9mZnNldFkgPSBlLmNsaWVudFkgLSBidXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICBidXR0b24uc3R5bGUuY3Vyc29yID0gJ2dyYWJiaW5nJztcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIETDqXBsYWNlciBsZSBib3V0b24gYXZlYyBsYSBzb3VyaXNcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgIGlmICghaXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICAgIGhhc01vdmVkID0gdHJ1ZTtcblxuICAgICAgICBsZXQgbmV3WCA9IGUuY2xpZW50WCAtIG9mZnNldFg7XG4gICAgICAgIGxldCBuZXdZID0gZS5jbGllbnRZIC0gb2Zmc2V0WTtcblxuICAgICAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGJ1dHRvbldpZHRoID0gYnV0dG9uLm9mZnNldFdpZHRoO1xuICAgICAgICBjb25zdCBidXR0b25IZWlnaHQgPSBidXR0b24ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIGlmIChuZXdYIDwgMCkgbmV3WCA9IDA7XG4gICAgICAgIGlmIChuZXdYICsgYnV0dG9uV2lkdGggPiB3aW5kb3dXaWR0aCkgbmV3WCA9IHdpbmRvd1dpZHRoIC0gYnV0dG9uV2lkdGg7XG4gICAgICAgIGlmIChuZXdZIDwgMCkgbmV3WSA9IDA7XG4gICAgICAgIGlmIChuZXdZICsgYnV0dG9uSGVpZ2h0ID4gd2luZG93SGVpZ2h0KSBuZXdZID0gd2luZG93SGVpZ2h0IC0gYnV0dG9uSGVpZ2h0O1xuXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5sZWZ0ID0gYCR7bmV3WH1weGA7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS50b3AgPSBgJHtuZXdZfXB4YDtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBBcnLDqnRlciBsZSBnbGlzc2VyLWTDqXBvc2VyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICBpZiAoaXNEcmFnZ2luZykge1xuICAgICAgICAgIGNvbnN0IGNsaWNrRHVyYXRpb24gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIG1vdXNlRG93blRpbWU7XG5cbiAgICAgICAgICAvLyBTYXV2ZWdhcmRlciBsYSBub3V2ZWxsZSBwb3NpdGlvblxuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBidXR0b24uc3R5bGUudG9wLFxuICAgICAgICAgICAgbGVmdDogYnV0dG9uLnN0eWxlLmxlZnRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvd3NUb29scy1idXR0b25Qb3NpdGlvbicsIEpTT04uc3RyaW5naWZ5KHBvc2l0aW9uKSk7XG5cbiAgICAgICAgICAvLyBTaSBsJ3V0aWxpc2F0ZXVyIG4nYSBwYXMgZMOpcGxhY8OpIGxlIGJvdXRvbiBldCBxdWUgbGUgY2xpYyDDqXRhaXQgY291cnQsIGMnZXN0IHVuIGNsaWMgc2ltcGxlXG4gICAgICAgICAgaWYgKCFoYXNNb3ZlZCAmJiBjbGlja0R1cmF0aW9uIDwgMjAwKSB7XG4gICAgICAgICAgICByZXBsYWNlQ29udGVudFdpdGhLYWFtZWxvdHQoKTtcblxuICAgICAgICAgICAgLy8gRWZmZXQgdmlzdWVsIGRlIGNvbmZpcm1hdGlvblxuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMzRBODUzJztcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICfinJMnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzQyODVGNCc7XG4gICAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdPV1MnO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICAgIGJ1dHRvbi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBBam91dGVyIGxlIGJvdXRvbiBhdSBkb2N1bWVudFxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIH1cblxuICAgIC8vIEZvbmN0aW9uIHBvdXIgbWV0dHJlIMOgIGpvdXIgbGEgdmlzaWJpbGl0w6kgZHUgYm91dG9uXG4gICAgZnVuY3Rpb24gdXBkYXRlQnV0dG9uVmlzaWJpbGl0eSgpOiB2b2lkIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvd3NUb29scy1idXR0b25IdG1sJyk7XG4gICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgIGNvbnN0IHNob3VsZEJlVmlzaWJsZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvd3NUb29sc19vd3NCdXR0b25WaXNpYmxlJykgPT09ICd0cnVlJztcbiAgICAgICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBzaG91bGRCZVZpc2libGUgPyAnZmxleCcgOiAnbm9uZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gw4ljb3V0ZXIgbGVzIGNoYW5nZW1lbnRzIGRlIGxvY2FsU3RvcmFnZSBwb3VyIGxhIHZpc2liaWxpdMOpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnb3dzVG9vbHNfb3dzQnV0dG9uVmlzaWJsZScpIHtcbiAgICAgICAgdXBkYXRlQnV0dG9uVmlzaWJpbGl0eSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSW5pdGlhbGlzZXIgbGUgYm91dG9uXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFkZFNpdGVCdXR0b24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRTaXRlQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgLy8gUsOpaW5pdGlhbGlzZXIgbGUgYm91dG9uIGxvcnMgZGVzIGNoYW5nZW1lbnRzIGRlIHBhZ2UgKFNQQSlcbiAgICBsZXQgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmICE9PSBjdXJyZW50VXJsKSB7XG4gICAgICAgIGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgc2V0VGltZW91dChhZGRTaXRlQnV0dG9uLCA1MDApOyAvLyBEw6lsYWkgcG91ciBsYWlzc2VyIGxhIHBhZ2Ugc2UgY2hhcmdlclxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG4gICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0pOyIsImZ1bmN0aW9uIHByaW50KG1ldGhvZCwgLi4uYXJncykge1xuICBpZiAoaW1wb3J0Lm1ldGEuZW52Lk1PREUgPT09IFwicHJvZHVjdGlvblwiKSByZXR1cm47XG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBhcmdzLnNoaWZ0KCk7XG4gICAgbWV0aG9kKGBbd3h0XSAke21lc3NhZ2V9YCwgLi4uYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgbWV0aG9kKFwiW3d4dF1cIiwgLi4uYXJncyk7XG4gIH1cbn1cbmV4cG9ydCBjb25zdCBsb2dnZXIgPSB7XG4gIGRlYnVnOiAoLi4uYXJncykgPT4gcHJpbnQoY29uc29sZS5kZWJ1ZywgLi4uYXJncyksXG4gIGxvZzogKC4uLmFyZ3MpID0+IHByaW50KGNvbnNvbGUubG9nLCAuLi5hcmdzKSxcbiAgd2FybjogKC4uLmFyZ3MpID0+IHByaW50KGNvbnNvbGUud2FybiwgLi4uYXJncyksXG4gIGVycm9yOiAoLi4uYXJncykgPT4gcHJpbnQoY29uc29sZS5lcnJvciwgLi4uYXJncylcbn07XG4iLCJpbXBvcnQgeyBicm93c2VyIH0gZnJvbSBcInd4dC9icm93c2VyXCI7XG5leHBvcnQgY2xhc3MgV3h0TG9jYXRpb25DaGFuZ2VFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IobmV3VXJsLCBvbGRVcmwpIHtcbiAgICBzdXBlcihXeHRMb2NhdGlvbkNoYW5nZUV2ZW50LkVWRU5UX05BTUUsIHt9KTtcbiAgICB0aGlzLm5ld1VybCA9IG5ld1VybDtcbiAgICB0aGlzLm9sZFVybCA9IG9sZFVybDtcbiAgfVxuICBzdGF0aWMgRVZFTlRfTkFNRSA9IGdldFVuaXF1ZUV2ZW50TmFtZShcInd4dDpsb2NhdGlvbmNoYW5nZVwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmlxdWVFdmVudE5hbWUoZXZlbnROYW1lKSB7XG4gIHJldHVybiBgJHticm93c2VyPy5ydW50aW1lPy5pZH06JHtpbXBvcnQubWV0YS5lbnYuRU5UUllQT0lOVH06JHtldmVudE5hbWV9YDtcbn1cbiIsImltcG9ydCB7IFd4dExvY2F0aW9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi9jdXN0b20tZXZlbnRzLm1qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uV2F0Y2hlcihjdHgpIHtcbiAgbGV0IGludGVydmFsO1xuICBsZXQgb2xkVXJsO1xuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIEVuc3VyZSB0aGUgbG9jYXRpb24gd2F0Y2hlciBpcyBhY3RpdmVseSBsb29raW5nIGZvciBVUkwgY2hhbmdlcy4gSWYgaXQncyBhbHJlYWR5IHdhdGNoaW5nLFxuICAgICAqIHRoaXMgaXMgYSBub29wLlxuICAgICAqL1xuICAgIHJ1bigpIHtcbiAgICAgIGlmIChpbnRlcnZhbCAhPSBudWxsKSByZXR1cm47XG4gICAgICBvbGRVcmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpO1xuICAgICAgaW50ZXJ2YWwgPSBjdHguc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBsZXQgbmV3VXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKG5ld1VybC5ocmVmICE9PSBvbGRVcmwuaHJlZikge1xuICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBXeHRMb2NhdGlvbkNoYW5nZUV2ZW50KG5ld1VybCwgb2xkVXJsKSk7XG4gICAgICAgICAgb2xkVXJsID0gbmV3VXJsO1xuICAgICAgICB9XG4gICAgICB9LCAxZTMpO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IGJyb3dzZXIgfSBmcm9tIFwid3h0L2Jyb3dzZXJcIjtcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gXCIuLi91dGlscy9pbnRlcm5hbC9sb2dnZXIubWpzXCI7XG5pbXBvcnQge1xuICBnZXRVbmlxdWVFdmVudE5hbWVcbn0gZnJvbSBcIi4vaW50ZXJuYWwvY3VzdG9tLWV2ZW50cy5tanNcIjtcbmltcG9ydCB7IGNyZWF0ZUxvY2F0aW9uV2F0Y2hlciB9IGZyb20gXCIuL2ludGVybmFsL2xvY2F0aW9uLXdhdGNoZXIubWpzXCI7XG5leHBvcnQgY2xhc3MgQ29udGVudFNjcmlwdENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50U2NyaXB0TmFtZSwgb3B0aW9ucykge1xuICAgIHRoaXMuY29udGVudFNjcmlwdE5hbWUgPSBjb250ZW50U2NyaXB0TmFtZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGlmICh0aGlzLmlzVG9wRnJhbWUpIHtcbiAgICAgIHRoaXMubGlzdGVuRm9yTmV3ZXJTY3JpcHRzKHsgaWdub3JlRmlyc3RFdmVudDogdHJ1ZSB9KTtcbiAgICAgIHRoaXMuc3RvcE9sZFNjcmlwdHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0ZW5Gb3JOZXdlclNjcmlwdHMoKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIFNDUklQVF9TVEFSVEVEX01FU1NBR0VfVFlQRSA9IGdldFVuaXF1ZUV2ZW50TmFtZShcbiAgICBcInd4dDpjb250ZW50LXNjcmlwdC1zdGFydGVkXCJcbiAgKTtcbiAgaXNUb3BGcmFtZSA9IHdpbmRvdy5zZWxmID09PSB3aW5kb3cudG9wO1xuICBhYm9ydENvbnRyb2xsZXI7XG4gIGxvY2F0aW9uV2F0Y2hlciA9IGNyZWF0ZUxvY2F0aW9uV2F0Y2hlcih0aGlzKTtcbiAgcmVjZWl2ZWRNZXNzYWdlSWRzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgZ2V0IHNpZ25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5hYm9ydENvbnRyb2xsZXIuc2lnbmFsO1xuICB9XG4gIGFib3J0KHJlYXNvbikge1xuICAgIHJldHVybiB0aGlzLmFib3J0Q29udHJvbGxlci5hYm9ydChyZWFzb24pO1xuICB9XG4gIGdldCBpc0ludmFsaWQoKSB7XG4gICAgaWYgKGJyb3dzZXIucnVudGltZS5pZCA9PSBudWxsKSB7XG4gICAgICB0aGlzLm5vdGlmeUludmFsaWRhdGVkKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNpZ25hbC5hYm9ydGVkO1xuICB9XG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiAhdGhpcy5pc0ludmFsaWQ7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBhIGxpc3RlbmVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbnRlbnQgc2NyaXB0J3MgY29udGV4dCBpcyBpbnZhbGlkYXRlZC5cbiAgICpcbiAgICogQHJldHVybnMgQSBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGxpc3RlbmVyLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGNiKTtcbiAgICogY29uc3QgcmVtb3ZlSW52YWxpZGF0ZWRMaXN0ZW5lciA9IGN0eC5vbkludmFsaWRhdGVkKCgpID0+IHtcbiAgICogICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKGNiKTtcbiAgICogfSlcbiAgICogLy8gLi4uXG4gICAqIHJlbW92ZUludmFsaWRhdGVkTGlzdGVuZXIoKTtcbiAgICovXG4gIG9uSW52YWxpZGF0ZWQoY2IpIHtcbiAgICB0aGlzLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgY2IpO1xuICAgIHJldHVybiAoKSA9PiB0aGlzLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgY2IpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gYSBwcm9taXNlIHRoYXQgbmV2ZXIgcmVzb2x2ZXMuIFVzZWZ1bCBpZiB5b3UgaGF2ZSBhbiBhc3luYyBmdW5jdGlvbiB0aGF0IHNob3VsZG4ndCBydW5cbiAgICogYWZ0ZXIgdGhlIGNvbnRleHQgaXMgZXhwaXJlZC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogY29uc3QgZ2V0VmFsdWVGcm9tU3RvcmFnZSA9IGFzeW5jICgpID0+IHtcbiAgICogICBpZiAoY3R4LmlzSW52YWxpZCkgcmV0dXJuIGN0eC5ibG9jaygpO1xuICAgKlxuICAgKiAgIC8vIC4uLlxuICAgKiB9XG4gICAqL1xuICBibG9jaygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBXcmFwcGVyIGFyb3VuZCBgd2luZG93LnNldEludGVydmFsYCB0aGF0IGF1dG9tYXRpY2FsbHkgY2xlYXJzIHRoZSBpbnRlcnZhbCB3aGVuIGludmFsaWRhdGVkLlxuICAgKi9cbiAgc2V0SW50ZXJ2YWwoaGFuZGxlciwgdGltZW91dCkge1xuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkgaGFuZGxlcigpO1xuICAgIH0sIHRpbWVvdXQpO1xuICAgIHRoaXMub25JbnZhbGlkYXRlZCgoKSA9PiBjbGVhckludGVydmFsKGlkKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG4gIC8qKlxuICAgKiBXcmFwcGVyIGFyb3VuZCBgd2luZG93LnNldFRpbWVvdXRgIHRoYXQgYXV0b21hdGljYWxseSBjbGVhcnMgdGhlIGludGVydmFsIHdoZW4gaW52YWxpZGF0ZWQuXG4gICAqL1xuICBzZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICBjb25zdCBpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkgaGFuZGxlcigpO1xuICAgIH0sIHRpbWVvdXQpO1xuICAgIHRoaXMub25JbnZhbGlkYXRlZCgoKSA9PiBjbGVhclRpbWVvdXQoaWQpKTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cbiAgLyoqXG4gICAqIFdyYXBwZXIgYXJvdW5kIGB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lYCB0aGF0IGF1dG9tYXRpY2FsbHkgY2FuY2VscyB0aGUgcmVxdWVzdCB3aGVuXG4gICAqIGludmFsaWRhdGVkLlxuICAgKi9cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWQpIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgIH0pO1xuICAgIHRoaXMub25JbnZhbGlkYXRlZCgoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShpZCkpO1xuICAgIHJldHVybiBpZDtcbiAgfVxuICAvKipcbiAgICogV3JhcHBlciBhcm91bmQgYHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrYCB0aGF0IGF1dG9tYXRpY2FsbHkgY2FuY2VscyB0aGUgcmVxdWVzdCB3aGVuXG4gICAqIGludmFsaWRhdGVkLlxuICAgKi9cbiAgcmVxdWVzdElkbGVDYWxsYmFjayhjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gcmVxdWVzdElkbGVDYWxsYmFjaygoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKCF0aGlzLnNpZ25hbC5hYm9ydGVkKSBjYWxsYmFjayguLi5hcmdzKTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICB0aGlzLm9uSW52YWxpZGF0ZWQoKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG4gIGFkZEV2ZW50TGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGUgPT09IFwid3h0OmxvY2F0aW9uY2hhbmdlXCIpIHtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWQpIHRoaXMubG9jYXRpb25XYXRjaGVyLnJ1bigpO1xuICAgIH1cbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcj8uKFxuICAgICAgdHlwZS5zdGFydHNXaXRoKFwid3h0OlwiKSA/IGdldFVuaXF1ZUV2ZW50TmFtZSh0eXBlKSA6IHR5cGUsXG4gICAgICBoYW5kbGVyLFxuICAgICAge1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBzaWduYWw6IHRoaXMuc2lnbmFsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEFib3J0IHRoZSBhYm9ydCBjb250cm9sbGVyIGFuZCBleGVjdXRlIGFsbCBgb25JbnZhbGlkYXRlZGAgbGlzdGVuZXJzLlxuICAgKi9cbiAgbm90aWZ5SW52YWxpZGF0ZWQoKSB7XG4gICAgdGhpcy5hYm9ydChcIkNvbnRlbnQgc2NyaXB0IGNvbnRleHQgaW52YWxpZGF0ZWRcIik7XG4gICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgYENvbnRlbnQgc2NyaXB0IFwiJHt0aGlzLmNvbnRlbnRTY3JpcHROYW1lfVwiIGNvbnRleHQgaW52YWxpZGF0ZWRgXG4gICAgKTtcbiAgfVxuICBzdG9wT2xkU2NyaXB0cygpIHtcbiAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICB7XG4gICAgICAgIHR5cGU6IENvbnRlbnRTY3JpcHRDb250ZXh0LlNDUklQVF9TVEFSVEVEX01FU1NBR0VfVFlQRSxcbiAgICAgICAgY29udGVudFNjcmlwdE5hbWU6IHRoaXMuY29udGVudFNjcmlwdE5hbWUsXG4gICAgICAgIG1lc3NhZ2VJZDogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMilcbiAgICAgIH0sXG4gICAgICBcIipcIlxuICAgICk7XG4gIH1cbiAgdmVyaWZ5U2NyaXB0U3RhcnRlZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgaXNTY3JpcHRTdGFydGVkRXZlbnQgPSBldmVudC5kYXRhPy50eXBlID09PSBDb250ZW50U2NyaXB0Q29udGV4dC5TQ1JJUFRfU1RBUlRFRF9NRVNTQUdFX1RZUEU7XG4gICAgY29uc3QgaXNTYW1lQ29udGVudFNjcmlwdCA9IGV2ZW50LmRhdGE/LmNvbnRlbnRTY3JpcHROYW1lID09PSB0aGlzLmNvbnRlbnRTY3JpcHROYW1lO1xuICAgIGNvbnN0IGlzTm90RHVwbGljYXRlID0gIXRoaXMucmVjZWl2ZWRNZXNzYWdlSWRzLmhhcyhldmVudC5kYXRhPy5tZXNzYWdlSWQpO1xuICAgIHJldHVybiBpc1NjcmlwdFN0YXJ0ZWRFdmVudCAmJiBpc1NhbWVDb250ZW50U2NyaXB0ICYmIGlzTm90RHVwbGljYXRlO1xuICB9XG4gIGxpc3RlbkZvck5ld2VyU2NyaXB0cyhvcHRpb25zKSB7XG4gICAgbGV0IGlzRmlyc3QgPSB0cnVlO1xuICAgIGNvbnN0IGNiID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy52ZXJpZnlTY3JpcHRTdGFydGVkRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgIHRoaXMucmVjZWl2ZWRNZXNzYWdlSWRzLmFkZChldmVudC5kYXRhLm1lc3NhZ2VJZCk7XG4gICAgICAgIGNvbnN0IHdhc0ZpcnN0ID0gaXNGaXJzdDtcbiAgICAgICAgaXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICBpZiAod2FzRmlyc3QgJiYgb3B0aW9ucz8uaWdub3JlRmlyc3RFdmVudCkgcmV0dXJuO1xuICAgICAgICB0aGlzLm5vdGlmeUludmFsaWRhdGVkKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBhZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBjYik7XG4gICAgdGhpcy5vbkludmFsaWRhdGVkKCgpID0+IHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGNiKSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkZWZpbml0aW9uIiwiYnJvd3NlciIsIl9icm93c2VyIiwicHJpbnQiLCJsb2dnZXIiLCJfYSIsIl9iIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxXQUFTLG9CQUFvQkEsYUFBWTtBQUM5QyxXQUFPQTtBQUFBLEVBQ1Q7QUNETyxRQUFNQyxjQUFVLHNCQUFXLFlBQVgsbUJBQW9CLFlBQXBCLG1CQUE2QixNQUNoRCxXQUFXLFVBQ1gsV0FBVztBQ0ZSLFFBQU0sVUFBVUM7QUNEdkIsUUFBQSxhQUFBLG9CQUFBO0FBQUEsSUFBbUMsU0FBQSxDQUFBLFlBQUE7QUFBQSxJQUNYLE9BQUE7QUFHcEIsWUFBQSxvQkFBQTtBQUFBLFFBQTBCO0FBQUEsUUFDeEI7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDQTtBQUlGLFlBQUEsbUJBQUE7QUFBQSxRQUF5QjtBQUFBLFFBQ3ZCO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0E7QUFJRixZQUFBLHVCQUFBO0FBQUEs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

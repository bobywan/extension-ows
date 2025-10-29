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
        "harpersbazaar.fr"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3d4dC9kaXN0L3V0aWxzL2RlZmluZS1jb250ZW50LXNjcmlwdC5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd4dC1kZXYvYnJvd3Nlci9zcmMvaW5kZXgubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3d4dC9kaXN0L2Jyb3dzZXIubWpzIiwiLi4vLi4vLi4vc3JjL2VudHJ5cG9pbnRzL2NvbnRlbnQudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvdXRpbHMvaW50ZXJuYWwvbG9nZ2VyLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy93eHQvZGlzdC91dGlscy9pbnRlcm5hbC9jdXN0b20tZXZlbnRzLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy93eHQvZGlzdC91dGlscy9pbnRlcm5hbC9sb2NhdGlvbi13YXRjaGVyLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy93eHQvZGlzdC91dGlscy9jb250ZW50LXNjcmlwdC1jb250ZXh0Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGVmaW5lQ29udGVudFNjcmlwdChkZWZpbml0aW9uKSB7XG4gIHJldHVybiBkZWZpbml0aW9uO1xufVxuIiwiLy8gI3JlZ2lvbiBzbmlwcGV0XG5leHBvcnQgY29uc3QgYnJvd3NlciA9IGdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZT8uaWRcbiAgPyBnbG9iYWxUaGlzLmJyb3dzZXJcbiAgOiBnbG9iYWxUaGlzLmNocm9tZTtcbi8vICNlbmRyZWdpb24gc25pcHBldFxuIiwiaW1wb3J0IHsgYnJvd3NlciBhcyBfYnJvd3NlciB9IGZyb20gXCJAd3h0LWRldi9icm93c2VyXCI7XG5leHBvcnQgY29uc3QgYnJvd3NlciA9IF9icm93c2VyO1xuZXhwb3J0IHt9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29udGVudFNjcmlwdCh7XG4gIG1hdGNoZXM6IFsnPGFsbF91cmxzPiddLFxuICBtYWluKCkge1xuICAgIC8vIExpc3RlIGRlcyBkb21haW5lcyBzdXBwb3J0w6lzXG4gICAgY29uc3QgU1VQUE9SVEVEX0RPTUFJTlMgPSBbXG4gICAgICAnY2FwaXRhbC5mcicsXG4gICAgICAnZ2VvLmZyJyxcbiAgICAgICdjYW1pbnRlcmVzc2UuZnInLFxuICAgICAgJ2N1aXNpbmVhY3R1ZWxsZS5mcicsXG4gICAgICAnaGJyZnJhbmNlLmZyJyxcbiAgICAgICd2b2ljaS5mcicsXG4gICAgICAnZmVtbWVhY3R1ZWxsZS5mcicsXG4gICAgICAnaGFycGVyc2JhemFhci5mcidcbiAgICBdO1xuXG4gICAgLy8gQ2l0YXRpb25zIEthYW1lbG90dFxuICAgIGNvbnN0IEtBQU1FTE9UVF9RVU9URVMgPSBbXG4gICAgICBcIkplIG5lIG1hbmdlIHBhcyBkZSBncmFpbmVzIVwiLFxuICAgICAgXCJDJ2VzdCBwYXMgZmF1eFwiLFxuICAgICAgXCJPbiBlbiBhIGdyb3MhXCIsXG4gICAgICBcIk1haXMgamUgdm91cyBlbW1lcmRlLCBtb24gcCd0aXQgcG90ZSFcIixcbiAgICAgIFwiQWgsIGMnZXN0IHPDu3IgcXUnYydlc3QgcGFzIEpvIGwnUmlnb2xvLCB0b3VzIGxlcyBqb3Vycy4uLlwiLFxuICAgICAgXCJNb2ksIGonc2VyYWlzIHZvdXMsIGondm91cyDDqWNvdXRlcmFpcy4uLiBOb24sIG1vaSwgaidzZXJhaXMgbm91cywgaid2b3VzLi4uIFNpIG1vaSwgaifDqXRhaXMgdm91cywgaidub3VzIMOpY291dGVyYWlzIVwiLFxuICAgICAgXCJNYWlzIMOpdmlkZW1tZW50IGMnZXN0IHNhbnMgYWxjb29sIVwiLFxuICAgICAgXCJGYXV0IGFycsOqdGVyIGNlcyBjb25uZXJpZXMgZGUgbm9yZCBldCBkZSBzdWQgISBVbmUgZm9pcyBwb3VyIHRvdXRlcywgbGUgbm9yZCwgc3VpdmFudCBjb21tZW50IG9uIGVzdCB0b3VybsOpLCDDp2EgY2hhbmdlIHRvdXQgIVwiLFxuICAgICAgXCJNYWlzIGJpZW4gc8O7ciBxdWUgc2ksIGplIHZvdXMgw6ljb3V0ZSAhIE1haXMgbMOgIGNvbW1lIHZvdXMgcGFybGV6IGRlIGNyZXVzZXIsIGondmlzdWFsaXNlIGxhIHNjw6huZSwgZXQgamUgbWUgZGlzIHF1J2lsIGZhdXQgdnJhaW1lbnQgw6p0cmUgY29uIHBvdXIgY3JldXNlciB1biB0cm91IGRhbnMgbGEgZ2xhY2UgIVwiLFxuICAgICAgXCJQQVlTIERFIEdBTExFUyBJTkTDiVBFTkRBTlQgIVwiLFxuICAgICAgXCJRdSdlc3QtY2UgcXVlIGMnZXN0IHF1ZSBjZSBzdHlsZSBkZSBib3VmZmVyIGRlcyBwZXRpdHMgbWFjaGlucyB0b3V0IHNlY3MgZXQgdHJvaXMgZ2FsbGV0dGVzIHBsZWluIGRlIGZyb21hZ2UgP1wiLFxuICAgICAgXCJNb2ksIHVuZSBmb2lzLCBqJ2FpIHByaXMgdW5lIGNsYXF1ZSwgZWggYmVuLCBqZSBsJ2FpIGphbWFpcyByZXRyb3V2w6llLi4uXCIsXG4gICAgICBcIkxlIEdyYWFsLCBqZSBzYWlzIHBhcyBvw7kgaWwgZXN0IG1haXMgaWwgdmEgeSByZXN0ZXIgdW4gbW9tZW50LlwiLFxuICAgICAgXCJTaSBsYSBtw6ltb2lyZSBlc3Qgw6AgbGEgdMOqdGUgY2UgcXVlIGxlIHBhc3PDqSwgcGV1dC1vbiB5IGFjY8OpZGVyIMOgIGNoZXZhbCA/XCIsXG4gICAgICBcIlZvdXMgc2F2ZXogYydxdWUgYydlc3QsIG1vbiBwcm9ibMOobWUgPyBUcm9wIGdlbnRpbCAhXCIsXG4gICAgXTtcblxuICAgIC8vIENpdGF0aW9ucyBLYWFtZWxvdHQgcG91ciBsZXMgcGFyYWdyYXBoZXNcbiAgICBjb25zdCBLQUFNRUxPVFRfUEFSQUdSQVBIUyA9IFtcbiAgICAgIFwiTW9pLCBqZSBtJ2VuIGZvdXMsIHNpIG9uIG1lIGZvcmNlIMOgIGNob2lzaXIgZW50cmUgbGEgcGVzdGUgZXQgbGUgY2hvbMOpcmEsIGplIHByZW5kcyBsZXMgZGV1eC4gQ29tbWUgw6dhLCBqZSBzdWlzIHRyYW5xdWlsbGUsIGplIHNhaXMgcXVlIGplIHZhaXMgbW91cmlyLCBtYWlzIGF1IG1vaW5zIGplIGwnYWkgY2hvaXNpLiBDJ2VzdCDDp2EgbGEgbGliZXJ0w6kgISBNYWludGVuYW50LCBzaSB2b3VzIHZvdWxleiBmYWlyZSBxdWVscXVlIGNob3NlIHBvdXIgbW9pLCB2b3VzIG1lIGRvbm5leiB1biBib3V0IGRlIGZyb21hZ2UgZXQgZHUgcGFpbiwgcGFyY2UgcXVlIGonYWkgZmFpbS5cIixcbiAgICAgIFwiTm9uIG1haXMgYXR0ZW5kZXosIGplIHZldXggZGlyZS4uLiBKZSBzdWlzIHBhcyBlbiB0cmFpbiBkZSBjaGVyY2hlciDDoCB2b3VzIGVtYm9iaW5lciwgbW9pLiBMZXMgY2VyZnMsIGxlcyBzYW5nbGllcnMgdG91dCDDp2EsIGMnZXN0IGR1IGdpYmllciwgbWFpcyBsYSBiaWNoZSwgZW5maW4gbGVzIGJpY2hlcywgYydlc3QgcGx1cyBzYWNyw6kgISBDJ2VzdCBjb21tZSBsZSBkYWltLCBsYSBiaWNoZSBjJ2VzdCBsYSBkYW1lIGR1IHNvdXMtYm9pcy4gQWxvcnMgYydlc3QgdW4gcGV1IGNvbW1lIHNpIG9uIHR1YWl0IHVuZSBwZXJzb25uZSBodW1haW5lLCB2b3VzIHZveWV6ID9cIixcbiAgICAgIFwiTWFpcyDDqXZpZGVtbWVudCBjJ2VzdCBzYW5zIGFsY29vbCEgVm91cyBtZSBwcmVuZXogcG91ciB1biBzb2lmZmFyZD8gTm9uIG1haXMgdm91cyB2b3VzIHJlbmRleiBjb21wdGUgcXVlIHNpIGplIGZhaXMgbGUgc2VydmljZSBhdmVjIGRlIGwnYWxjb29sLCBkYW5zIHVuZSBkZW1pLWhldXJlIGlsIHkgYSBwbHVzIHBlcnNvbm5lISBJbHMgc29udCB0b3VzIHJhaWRlcyBtb3J0cyBkYW5zIGxlcyBlc2NhbGllcnMhIE5vbiBtYWlzIGTDqWrDoCBxdWUgcXVhbmQgamUgZmFpcyBsZSBzZXJ2aWNlIGF2ZWMgZGUgbCdlYXUsIGlscyBzb250IHRvdXMgZW4gdHJhaW4gZGUgc2UgcGxhaW5kcmUgcXVlIGMnZXN0IGTDqWd1ZXVsYXNzZSFcIixcbiAgICAgIFwiTWFpcyBjJ2VzdCBwYXMgcG9zc2libGUsIGQnb8O5IHNvcnRlei12b3VzIMOnYT8gTm9uLCBtYWlzIHZvdXMgdm91cyBjcm95ZXogb8O5PyBOb24gbWFpcyB2b3VzIHZvdXMgcHJlbmV6IHBvdXIgcXVpPyBOb24gbWFpcyB2b3VzIHZvdXMgcmVuZGV6IGNvbXB0ZSBkZSBjZSBxdWUgdm91cyBkaXRlcz8gTWFpcyBlbmZpbiwgdm95b25zLi4uIE5vbiBtYWlzIGF0dGVuZGV6LCBqZSByw6p2ZSEgTWFpcyBjJ2VzdCBwYXMgdnJhaSEgTWFpcyBqZSB2YWlzIG1lIHLDqXZlaWxsZXIhIE5vbiBtYWlzIHBpbmNlei1tb2ksIGplIHLDqnZlISBOb24gbWFpcyBqZSBzdWlzIGRhbnMgdW4gY2F1Y2hlbWFyIVwiLFxuICAgICAgXCJKZSB2b2lzIHRyb3VibGUuLi4gQydlc3QgbGUgbWFucXVlIGRlIGdyYXMuIEplIHZvdXMgbCdhaSBkw6lqw6AgZGl0IGNlbnQgZm9pcyA6IHNpIHZvdXMgdm91bGV6IHF1ZSBqZSBzb2lzIGVuIGZvcm1lLCBpbCBmYXV0IG1lIGdhdmVyICEgTW9pLCBtb24gbcOpdGFib2xpc21lIGVzdCBjb21tZSDDp2EuIEplIHN1aXMgcGFzIHVuIGFuaW1hbCBzYXV2YWdlLiBKZSBzdWlzIHBhcyBmYWl0IHBvdXIgbGEgY3VlaWxsZXR0ZSBldCBsYSBjaGFzc2UuIE1vaSwgaWwgbWUgZmF1dCBkZSBsYSB2aWFuZGUsIGR1IGdyYXMsIGR1IHNlbCwgZXQgc3VydG91dCwgc3VydG91dC4uLiBkZSBsYSBjZXJ2b2lzZSAhXCIsXG4gICAgICBcIk1haXMgYXR0ZW5kZXouLi4gQydlc3QgcGFzIHBvc3NpYmxlIHF1ZSBjZSBzb2l0IG1vaSBxdWkgZXhwbGlxdWUgw6dhIMOgIGRlcyBjaGV2YWxpZXJzIGRlIGxhIFRhYmxlIFJvbmRlICEgTGEgVGFibGUgUm9uZGUsIGMnZXN0IHBhcyB1bmUgdGFibGUgY29tbWUgbGVzIGF1dHJlcy4gQXJ0IGV0IHN5bWJvbGUgISBMZSBHcmFhbCwgYydlc3QgcGFzIHVuZSBjb3VwZSBjb21tZSBsZXMgYXV0cmVzLiBMZSBjaMOidGVhdSBkZSBLYWFtZWxvdHQsIGMnZXN0IHBhcyB1biBjaMOidGVhdSBjb21tZSBsZXMgYXV0cmVzICEgRXQgbW9pLCBqZSBzdWlzIHBhcyB1biByb2kgY29tbWUgbGVzIGF1dHJlcyAhXCIsXG4gICAgICBcIlZvdXMgc2F2ZXogcXVlIGonYWkgdsOpY3UgdW5lIGV4cMOpcmllbmNlIHVuaXF1ZS4gSidhaSBmYWl0IHVuIHZveWFnZSBlbiBJcmxhbmRlLi4uIEFoIG5vbiwgYyfDqXRhaXQgZW4gw4ljb3NzZS4gRW5maW4gYnJlZiwgaidhaSB2dSBkZXMgdHlwZXMsIGlscyDDqXRhaWVudCB0b3VzIGVuIGtpbHQsIGV0IGlscyBqb3VhaWVudCBkZSBsYSBjb3JuZW11c2UuIE1haXMgbGUgcGx1cyBkaW5ndWUsIGMnZXN0IHF1J2lscyDDqXRhaWVudCB0b3VzIGJvdXJyw6lzIGNvbW1lIGRlcyBjb2lucy4gRXQgbMOgLCBqZSBtZSBzdWlzIGRpdCA6ICdDJ2VzdCDDp2EgbGEgbGliZXJ0w6kgISdcIixcbiAgICAgIFwiTm9uIG1haXMgamUgdmFpcyB2b3VzIGRpcmUgOiB0b3V0IGxlIG1vbmRlIGVuIGEgcmllbiDDoCBmb3V0cmUuIExlcyBjaGVmcyBkZSBjbGFuLCBpbHMgZm9udCBkZXMgcsOpdW5pb25zIHBvdXIgZMOpY29ubmVyLCBwb3VyIGJvaXJlIGRlcyBjb3VwcywgZXQgcG91ciBzZSB0YXBlciBzdXIgbCfDqXBhdWxlLiBUb3V0IGxlIG1vbmRlIHMnZW4gZm91dCwgZGUgbGEgR3JhbmRlIEJyZXRhZ25lLiBUb3V0IGxlIG1vbmRlIHMnZW4gZm91dCwgZGUgbCd1bmlmaWNhdGlvbi4gVG91dCBsZSBtb25kZSBzJ2VuIGZvdXQsIGRlIHRvdXQuIE1vaSBsZSBwcmVtaWVyLlwiXG4gICAgXTtcblxuICAgIC8vIFBlcnNvbm5hZ2VzIGRlIEthYW1lbG90dFxuICAgIGNvbnN0IEtBQU1FTE9UVF9DSEFSQUNURVJTID0gW1xuICAgICAgXCJBcnRodXIgLSBSb2kgZGUgQnJldGFnbmVcIixcbiAgICAgIFwiUGVyY2V2YWwgLSBDaGV2YWxpZXIgZGUgR2FsbGVzXCIsXG4gICAgICBcIkthcmFkb2MgLSBDaGV2YWxpZXIgZGUgVmFubmVzXCIsXG4gICAgICBcIkzDqW9kYWdhbiAtIFJvaSBkZSBDYXJtw6lsaWRlXCIsXG4gICAgICBcIk1lcmxpbiAtIEwnRW5jaGFudGV1clwiLFxuICAgICAgXCJCb2hvcnQgLSBDaGV2YWxpZXIgZGUgR2F1bmVzXCIsXG4gICAgICBcIkxhbmNlbG90IC0gQ2hldmFsaWVyIGR1IExhY1wiLFxuICAgICAgXCJMZSBQw6hyZSBCbGFpc2UgLSBDaGFwZWxhaW5cIixcbiAgICAgIFwiVmVuZWMgLSBNYXJjaGFuZFwiLFxuICAgICAgXCJLYWRvYyAtIEZyw6hyZSBkZSBLYXJhZG9jXCIsXG4gICAgICBcIkRhbWUgU8OpbGkgLSBSZWluZSBkZSBDYXJtw6lsaWRlXCIsXG4gICAgICBcIkd1ZW5pw6h2cmUgLSBSZWluZSBkZSBCcmV0YWduZVwiLFxuICAgICAgXCJZdmFpbiAtIENoZXZhbGllciBhdSBMaW9uXCIsXG4gICAgICBcIkdhdXZhaW4gLSBDaGV2YWxpZXJcIixcbiAgICAgIFwiQW5naGFyYWQgLSBTZXJ2YW50ZVwiLFxuICAgICAgXCJMJ2ludGVycHLDqHRlIGJ1cmdvbmRlXCIsXG4gICAgICBcIkxlIE1hw650cmUgZCdBcm1lc1wiLFxuICAgICAgXCJMZSBUYXZlcm5pZXJcIlxuICAgIF07XG5cbiAgICAvLyBJbWFnZXMgS2FhbWVsb3R0XG4gICAgY29uc3QgS0FBTUVMT1RUX0lNQUdFUyA9IFtcbiAgICAgICdpbWFnZXMva2FhbWVsb3R0L2thYW1lbG90dC1waG90by0xMzQ1Njg3LmpwZycsXG4gICAgICAnaW1hZ2VzL2thYW1lbG90dC9rYWFtZWxvdHQtcGhvdG8tMTM4ODc4Mi5qcGcnLFxuICAgICAgJ2ltYWdlcy9rYWFtZWxvdHQva2FhbWVsb3R0LXBob3RvLTEzODc5NTQuanBnJyxcbiAgICAgICdpbWFnZXMva2FhbWVsb3R0L2thYW1lbG90dC1waG90by0xMzg3OTUyLmpwZycsXG4gICAgICAnaW1hZ2VzL2thYW1lbG90dC9rYWFtZWxvdHQtcGhvdG8tMTM4ODM4Ny5qcGcnLFxuICAgICAgJ2ltYWdlcy9rYWFtZWxvdHQva2FhbWVsb3R0LXBob3RvLTEzODc5MzMuanBnJyxcbiAgICAgICdpbWFnZXMva2FhbWVsb3R0L2thYW1lbG90dC1waG90by0xMzg3OTM0LmpwZycsXG4gICAgICAnaW1hZ2VzL2thYW1lbG90dC9rYWFtZWxvdHQtcGhvdG8tMTM4Nzk2NC5qcGcnLFxuICAgICAgJ2ltYWdlcy9rYWFtZWxvdHQva2FhbWVsb3R0LXBob3RvLTEzODgzODkuanBnJyxcbiAgICAgICdpbWFnZXMva2FhbWVsb3R0L2thYW1lbG90dC1waG90by0xMzg3OTQyLmpwZycsXG4gICAgICAnaW1hZ2VzL2thYW1lbG90dC9rYWFtZWxvdHQtcGhvdG8tMTM4NzkzOC5qcGcnLFxuICAgICAgJ2ltYWdlcy9rYWFtZWxvdHQva2FhbWVsb3R0LXBob3RvLTEzODc5NDMuanBnJyxcbiAgICAgICdpbWFnZXMva2FhbWVsb3R0L2thYW1lbG90dC1waG90by0xMzg4Mzg4LmpwZycsXG4gICAgICAnaW1hZ2VzL2thYW1lbG90dC9rYWFtZWxvdHQtcGhvdG8tMTM4ODM4NS53ZWJwJyxcbiAgICAgICdpbWFnZXMva2FhbWVsb3R0L2thYW1lbG90dC1waG90by0xMzg4MzgzLmpwZycsXG4gICAgICAnaW1hZ2VzL2thYW1lbG90dC9rYWFtZWxvdHQtcGhvdG8tYWxleGFuZHJlLWFzdGllci1hbm5lLWdpcm91YXJkLTEzODY5NDUuanBnJyxcbiAgICAgICdpbWFnZXMva2FhbWVsb3R0L2thYW1lbG90dC1waG90by1nZXJhbGRpbmUtbmFrYWNoZS1hbGFpbi1jaGFiYXQtMTM4Njk4OS5qcGcnLFxuICAgICAgJ2ltYWdlcy9rYWFtZWxvdHQva2FhbWVsb3R0LXBob3RvLWthYW1lbG90dC0xMDU0NTE0LmpwZycsXG4gICAgICAnaW1hZ2VzL2thYW1lbG90dC9rYWFtZWxvdHQtcHJlbWllci12b2xldC1waG90by1qYWNxdWVzLWNoYW1ib24tMTM4Njk2Mi5qcGcnXG4gICAgXTtcblxuICAgIC8vIEZvbmN0aW9ucyB1dGlsaXRhaXJlc1xuICAgIGZ1bmN0aW9uIGdldFJhbmRvbVF1b3RlKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEtBQU1FTE9UVF9RVU9URVMubGVuZ3RoKTtcbiAgICAgIHJldHVybiBLQUFNRUxPVFRfUVVPVEVTW3JhbmRvbUluZGV4XTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSYW5kb21QYXJhZ3JhcGgoKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogS0FBTUVMT1RUX1BBUkFHUkFQSFMubGVuZ3RoKTtcbiAgICAgIHJldHVybiBLQUFNRUxPVFRfUEFSQUdSQVBIU1tyYW5kb21JbmRleF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tQ2hhcmFjdGVyKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEtBQU1FTE9UVF9DSEFSQUNURVJTLmxlbmd0aCk7XG4gICAgICByZXR1cm4gS0FBTUVMT1RUX0NIQVJBQ1RFUlNbcmFuZG9tSW5kZXhdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbUltYWdlKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEtBQU1FTE9UVF9JTUFHRVMubGVuZ3RoKTtcbiAgICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKEtBQU1FTE9UVF9JTUFHRVNbcmFuZG9tSW5kZXhdIGFzIGFueSk7XG4gICAgfVxuXG4gICAgLy8gVsOpcmlmaWUgc2kgbCdVUkwgYWN0dWVsbGUgZXN0IHN1ciB1biBzaXRlIHN1cHBvcnTDqVxuICAgIGZ1bmN0aW9uIGlzT25TdXBwb3J0ZWRTaXRlKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmxPYmogPSBuZXcgVVJMKHVybCk7XG4gICAgICAgIGNvbnN0IGhvc3RuYW1lID0gdXJsT2JqLmhvc3RuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgcmV0dXJuIFNVUFBPUlRFRF9ET01BSU5TLnNvbWUoZG9tYWluID0+IHtcbiAgICAgICAgICByZXR1cm4gaG9zdG5hbWUuaW5jbHVkZXMoZG9tYWluLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgICAgICAgIGhvc3RuYW1lLmluY2x1ZGVzKGRvbWFpbi5zcGxpdCgnLicpWzBdLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcGFyc2luZyBVUkw6JywgZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGb25jdGlvbiBwb3VyIHJlbXBsYWNlciBsZSBjb250ZW51IHBhciBkdSBLYWFtZWxvdHRcbiAgICBmdW5jdGlvbiByZXBsYWNlQ29udGVudFdpdGhLYWFtZWxvdHQoKTogdm9pZCB7XG4gICAgICAvLyBSZW1wbGFjZXIgbGVzIHRpdHJlcyBkZXMgYXJ0aWNsZXNcbiAgICAgIGNvbnN0IGFydGljbGVUaXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0aWNsZUNhcmQtdGl0bGUsIC5vcmRlcmVkQ29udGVudExpc3QtdGl0bGUsIC5hcnRpY2xlQm9keS1kcmFmdCBoMiwgLmxpbmtDYXJkIGEsIC5hcnRpY2xlLWhlYWRUaXRsZScpO1xuICAgICAgYXJ0aWNsZVRpdGxlcy5mb3JFYWNoKHRpdGxlID0+IHtcbiAgICAgICAgaWYgKHRpdGxlLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBnZXRSYW5kb21RdW90ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gUmVtcGxhY2VyIGxlcyB0ZXh0ZXMgZCdhY2Nyb2NoZVxuICAgICAgY29uc3QgbGVhZFRleHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFydGljbGVDYXJkLWxlYWRUZXh0LCAuY2F0ZWdvcnktaGVhZCBwLCAuYXJ0aWNsZS1oZWFkTGVhZCBwJyk7XG4gICAgICBsZWFkVGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgICAgaWYgKHRleHQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gZ2V0UmFuZG9tUGFyYWdyYXBoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZW1wbGFjZXIgbGVzIGNhdMOpZ29yaWVzXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFydGljbGVDYXJkLWNhdGVnb3J5LCAuaG9tZXBhZ2VTZWN0aW9uIC50aXRsZS1saW5rLCAuY2F0ZWdvcnktaGVhZCAudGl0bGUsIC5saW5rQ2FyZC10aXRsZSwgLnRhZ0xpc3QtbGlzdEl0ZW0gYScpO1xuICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgaWYgKGNhdGVnb3J5LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSBnZXRSYW5kb21DaGFyYWN0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIFJlbXBsYWNlciBsZSBjb250ZW51IGRlcyBhcnRpY2xlc1xuICAgICAgY29uc3QgYXJ0aWNsZVBhcmFncmFwaHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0aWNsZUJvZHktZHJhZnQgcCcpO1xuICAgICAgYXJ0aWNsZVBhcmFncmFwaHMuZm9yRWFjaChwYXJhZ3JhcGggPT4ge1xuICAgICAgICBpZiAocGFyYWdyYXBoLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gZ2V0UmFuZG9tUGFyYWdyYXBoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZW1wbGFjZXIgbGVzIGltYWdlcyBkaXJlY3Rlc1xuICAgICAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvcnBzIGltZywgLmFydGljbGVDYXJkLWltYWdlIGltZywgLmFydGljbGUtaGVhZEltYWdlIGltZywgaW1nW3NyYyo9XCJqcGdcIl0sIGltZ1tzcmMqPVwicG5nXCJdLCBpbWdbc3JjKj1cIndlYnBcIl0nKTtcbiAgICAgIGltYWdlcy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAgICAgY29uc3QgaW1nRWxlbWVudCA9IGltZyBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICBpbWdFbGVtZW50LnNyYyA9IGdldFJhbmRvbUltYWdlKCk7XG4gICAgICAgIGlmIChpbWdFbGVtZW50LnNyY3NldCkge1xuICAgICAgICAgIGltZ0VsZW1lbnQuc3Jjc2V0ID0gZ2V0UmFuZG9tSW1hZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBam91dGVyIHVuIGF0dHJpYnV0IGFsdCBLYWFtZWxvdHRcbiAgICAgICAgaW1nRWxlbWVudC5hbHQgPSBnZXRSYW5kb21RdW90ZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFJlbXBsYWNlciBsZXMgc291cmNlcyBkYW5zIGxlcyBiYWxpc2VzIHBpY3R1cmVcbiAgICAgIGNvbnN0IHNvdXJjZXNJblBpY3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29ycHMgcGljdHVyZSBzb3VyY2UsIHBpY3R1cmUgc291cmNlJyk7XG4gICAgICBzb3VyY2VzSW5QaWN0dXJlLmZvckVhY2goKHNvdXJjZSkgPT4ge1xuICAgICAgICBjb25zdCBzb3VyY2VFbGVtZW50ID0gc291cmNlIGFzIEhUTUxTb3VyY2VFbGVtZW50O1xuICAgICAgICBpZiAoc291cmNlRWxlbWVudC5zcmNzZXQpIHtcbiAgICAgICAgICBzb3VyY2VFbGVtZW50LnNyY3NldCA9IGdldFJhbmRvbUltYWdlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZW1wbGFjZXIgbGVzIGltYWdlcyBkZSBmb25kIENTU1xuICAgICAgY29uc3QgZWxlbWVudHNXaXRoQmFja2dyb3VuZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3N0eWxlKj1cImJhY2tncm91bmQtaW1hZ2VcIl0nKTtcbiAgICAgIGVsZW1lbnRzV2l0aEJhY2tncm91bmRJbWFnZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gZWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgaHRtbEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2dldFJhbmRvbUltYWdlKCl9KWA7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGb25jdGlvbiBwcmluY2lwYWxlIHF1aSBham91dGUgbGUgYm91dG9uXG4gICAgZnVuY3Rpb24gYWRkU2l0ZUJ1dHRvbigpOiB2b2lkIHtcbiAgICAgIC8vIFbDqXJpZmllciBzaSBub3VzIHNvbW1lcyBzdXIgdW4gc2l0ZSBzdXBwb3J0w6lcbiAgICAgIGlmICghaXNPblN1cHBvcnRlZFNpdGUod2luZG93LmxvY2F0aW9uLmhyZWYpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVsOpcmlmaWVyIHNpIGxlIGJvdXRvbiBleGlzdGUgZMOpasOgXG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ293c1Rvb2xzLWJ1dHRvbkh0bWwnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENyw6llciBsZSBib3V0b25cbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYnV0dG9uLmlkID0gJ293c1Rvb2xzLWJ1dHRvbkh0bWwnO1xuICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ09XUyc7XG5cbiAgICAgIC8vIFbDqXJpZmllciBsYSB2aXNpYmlsaXTDqSBkYW5zIGxlIGxvY2FsU3RvcmFnZVxuICAgICAgY29uc3Qgc2hvdWxkQmVWaXNpYmxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ293c1Rvb2xzX293c0J1dHRvblZpc2libGUnKSA9PT0gJ3RydWUnO1xuICAgICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBzaG91bGRCZVZpc2libGUgPyAnZmxleCcgOiAnbm9uZSc7XG5cbiAgICAgIC8vIFLDqWN1cMOpcmVyIGxhIHBvc2l0aW9uIHNhdXZlZ2FyZMOpZSBzaSBlbGxlIGV4aXN0ZVxuICAgICAgY29uc3Qgc2F2ZWRQb3NpdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvd3NUb29scy1idXR0b25Qb3NpdGlvbicpO1xuICAgICAgY29uc3QgaW5pdGlhbFBvc2l0aW9uID0gc2F2ZWRQb3NpdGlvbiA/IEpTT04ucGFyc2Uoc2F2ZWRQb3NpdGlvbikgOiB7IHRvcDogJzIwcHgnLCBsZWZ0OiAnMjBweCcgfTtcblxuICAgICAgLy8gQ3LDqWVyIHVuIHRvb2x0aXBcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvb2x0aXAuaWQgPSAnb3dzVG9vbHMtdG9vbHRpcCc7XG4gICAgICB0b29sdGlwLnRleHRDb250ZW50ID0gJ1dJUCc7XG4gICAgICB0b29sdGlwLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTBweDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgei1pbmRleDogMTAwMDE7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYDtcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0b29sdGlwKTtcblxuICAgICAgLy8gQXBwbGlxdWVyIGRlcyBzdHlsZXMgcG91ciB1biBib3V0b24gcm9uZFxuICAgICAgYnV0dG9uLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAke2luaXRpYWxQb3NpdGlvbi50b3B9O1xuICAgICAgICBsZWZ0OiAke2luaXRpYWxQb3NpdGlvbi5sZWZ0fTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVGNDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNjYsIDEzMywgMjQ0LCAwLjMpO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAke3Nob3VsZEJlVmlzaWJsZSA/ICdkaXNwbGF5OiBmbGV4OycgOiAnZGlzcGxheTogbm9uZTsnfVxuICAgICAgYDtcblxuICAgICAgLy8gQWpvdXRlciB1biBlZmZldCBkZSBzdXJ2b2xcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzMzNjdENic7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBidXR0b24uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEuMDUpJztcbiAgICAgICAgdG9vbHRpcC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICB0b29sdGlwLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoMCknO1xuICAgICAgfSk7XG5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNDI4NUY0JztcbiAgICAgICAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMC44JztcbiAgICAgICAgYnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG4gICAgICAgIHRvb2x0aXAuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgdG9vbHRpcC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC0yMHB4KSc7XG4gICAgICB9KTtcblxuICAgICAgLy8gVmFyaWFibGVzIHBvdXIgbGUgZHJhZyBhbmQgZHJvcCBldCBkw6l0ZWN0aW9uIGR1IGNsaWMgc2ltcGxlXG4gICAgICBsZXQgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgbGV0IGhhc01vdmVkID0gZmFsc2U7XG4gICAgICBsZXQgb2Zmc2V0WDogbnVtYmVyLCBvZmZzZXRZOiBudW1iZXI7XG4gICAgICBsZXQgbW91c2VEb3duVGltZTogbnVtYmVyO1xuXG4gICAgICAvLyBEw6ltYXJyZXIgbGUgZ2xpc3Nlci1kw6lwb3NlclxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICBoYXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICBtb3VzZURvd25UaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIG9mZnNldFggPSBlLmNsaWVudFggLSBidXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgb2Zmc2V0WSA9IGUuY2xpZW50WSAtIGJ1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5jdXJzb3IgPSAnZ3JhYmJpbmcnO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gRMOpcGxhY2VyIGxlIGJvdXRvbiBhdmVjIGxhIHNvdXJpc1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICAgICAgaWYgKCFpc0RyYWdnaW5nKSByZXR1cm47XG5cbiAgICAgICAgaGFzTW92ZWQgPSB0cnVlO1xuXG4gICAgICAgIGxldCBuZXdYID0gZS5jbGllbnRYIC0gb2Zmc2V0WDtcbiAgICAgICAgbGV0IG5ld1kgPSBlLmNsaWVudFkgLSBvZmZzZXRZO1xuXG4gICAgICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY29uc3QgYnV0dG9uV2lkdGggPSBidXR0b24ub2Zmc2V0V2lkdGg7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkhlaWdodCA9IGJ1dHRvbi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgaWYgKG5ld1ggPCAwKSBuZXdYID0gMDtcbiAgICAgICAgaWYgKG5ld1ggKyBidXR0b25XaWR0aCA+IHdpbmRvd1dpZHRoKSBuZXdYID0gd2luZG93V2lkdGggLSBidXR0b25XaWR0aDtcbiAgICAgICAgaWYgKG5ld1kgPCAwKSBuZXdZID0gMDtcbiAgICAgICAgaWYgKG5ld1kgKyBidXR0b25IZWlnaHQgPiB3aW5kb3dIZWlnaHQpIG5ld1kgPSB3aW5kb3dIZWlnaHQgLSBidXR0b25IZWlnaHQ7XG5cbiAgICAgICAgYnV0dG9uLnN0eWxlLmxlZnQgPSBgJHtuZXdYfXB4YDtcbiAgICAgICAgYnV0dG9uLnN0eWxlLnRvcCA9IGAke25ld1l9cHhgO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEFycsOqdGVyIGxlIGdsaXNzZXItZMOpcG9zZXJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICAgICAgY29uc3QgY2xpY2tEdXJhdGlvbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbW91c2VEb3duVGltZTtcblxuICAgICAgICAgIC8vIFNhdXZlZ2FyZGVyIGxhIG5vdXZlbGxlIHBvc2l0aW9uXG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IGJ1dHRvbi5zdHlsZS50b3AsXG4gICAgICAgICAgICBsZWZ0OiBidXR0b24uc3R5bGUubGVmdFxuICAgICAgICAgIH07XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ293c1Rvb2xzLWJ1dHRvblBvc2l0aW9uJywgSlNPTi5zdHJpbmdpZnkocG9zaXRpb24pKTtcblxuICAgICAgICAgIC8vIFNpIGwndXRpbGlzYXRldXIgbidhIHBhcyBkw6lwbGFjw6kgbGUgYm91dG9uIGV0IHF1ZSBsZSBjbGljIMOpdGFpdCBjb3VydCwgYydlc3QgdW4gY2xpYyBzaW1wbGVcbiAgICAgICAgICBpZiAoIWhhc01vdmVkICYmIGNsaWNrRHVyYXRpb24gPCAyMDApIHtcbiAgICAgICAgICAgIHJlcGxhY2VDb250ZW50V2l0aEthYW1lbG90dCgpO1xuXG4gICAgICAgICAgICAvLyBFZmZldCB2aXN1ZWwgZGUgY29uZmlybWF0aW9uXG4gICAgICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzNEE4NTMnO1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ+Kckyc7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNDI4NUY0JztcbiAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ09XUyc7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgICAgYnV0dG9uLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFqb3V0ZXIgbGUgYm91dG9uIGF1IGRvY3VtZW50XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfVxuXG4gICAgLy8gRm9uY3Rpb24gcG91ciBtZXR0cmUgw6Agam91ciBsYSB2aXNpYmlsaXTDqSBkdSBib3V0b25cbiAgICBmdW5jdGlvbiB1cGRhdGVCdXR0b25WaXNpYmlsaXR5KCk6IHZvaWQge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ293c1Rvb2xzLWJ1dHRvbkh0bWwnKTtcbiAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgY29uc3Qgc2hvdWxkQmVWaXNpYmxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ293c1Rvb2xzX293c0J1dHRvblZpc2libGUnKSA9PT0gJ3RydWUnO1xuICAgICAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9IHNob3VsZEJlVmlzaWJsZSA/ICdmbGV4JyA6ICdub25lJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDDiWNvdXRlciBsZXMgY2hhbmdlbWVudHMgZGUgbG9jYWxTdG9yYWdlIHBvdXIgbGEgdmlzaWJpbGl0w6lcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdvd3NUb29sc19vd3NCdXR0b25WaXNpYmxlJykge1xuICAgICAgICB1cGRhdGVCdXR0b25WaXNpYmlsaXR5KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJbml0aWFsaXNlciBsZSBib3V0b25cbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYWRkU2l0ZUJ1dHRvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFNpdGVCdXR0b24oKTtcbiAgICB9XG5cbiAgICAvLyBSw6lpbml0aWFsaXNlciBsZSBib3V0b24gbG9ycyBkZXMgY2hhbmdlbWVudHMgZGUgcGFnZSAoU1BBKVxuICAgIGxldCBjdXJyZW50VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYgIT09IGN1cnJlbnRVcmwpIHtcbiAgICAgICAgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICBzZXRUaW1lb3V0KGFkZFNpdGVCdXR0b24sIDUwMCk7IC8vIETDqWxhaSBwb3VyIGxhaXNzZXIgbGEgcGFnZSBzZSBjaGFyZ2VyXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIHN1YnRyZWU6IHRydWVcbiAgICB9KTtcbiAgfVxufSk7IiwiZnVuY3Rpb24gcHJpbnQobWV0aG9kLCAuLi5hcmdzKSB7XG4gIGlmIChpbXBvcnQubWV0YS5lbnYuTU9ERSA9PT0gXCJwcm9kdWN0aW9uXCIpIHJldHVybjtcbiAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGFyZ3Muc2hpZnQoKTtcbiAgICBtZXRob2QoYFt3eHRdICR7bWVzc2FnZX1gLCAuLi5hcmdzKTtcbiAgfSBlbHNlIHtcbiAgICBtZXRob2QoXCJbd3h0XVwiLCAuLi5hcmdzKTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0IGxvZ2dlciA9IHtcbiAgZGVidWc6ICguLi5hcmdzKSA9PiBwcmludChjb25zb2xlLmRlYnVnLCAuLi5hcmdzKSxcbiAgbG9nOiAoLi4uYXJncykgPT4gcHJpbnQoY29uc29sZS5sb2csIC4uLmFyZ3MpLFxuICB3YXJuOiAoLi4uYXJncykgPT4gcHJpbnQoY29uc29sZS53YXJuLCAuLi5hcmdzKSxcbiAgZXJyb3I6ICguLi5hcmdzKSA9PiBwcmludChjb25zb2xlLmVycm9yLCAuLi5hcmdzKVxufTtcbiIsImltcG9ydCB7IGJyb3dzZXIgfSBmcm9tIFwid3h0L2Jyb3dzZXJcIjtcbmV4cG9ydCBjbGFzcyBXeHRMb2NhdGlvbkNoYW5nZUV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICBjb25zdHJ1Y3RvcihuZXdVcmwsIG9sZFVybCkge1xuICAgIHN1cGVyKFd4dExvY2F0aW9uQ2hhbmdlRXZlbnQuRVZFTlRfTkFNRSwge30pO1xuICAgIHRoaXMubmV3VXJsID0gbmV3VXJsO1xuICAgIHRoaXMub2xkVXJsID0gb2xkVXJsO1xuICB9XG4gIHN0YXRpYyBFVkVOVF9OQU1FID0gZ2V0VW5pcXVlRXZlbnROYW1lKFwid3h0OmxvY2F0aW9uY2hhbmdlXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXF1ZUV2ZW50TmFtZShldmVudE5hbWUpIHtcbiAgcmV0dXJuIGAke2Jyb3dzZXI/LnJ1bnRpbWU/LmlkfToke2ltcG9ydC5tZXRhLmVudi5FTlRSWVBPSU5UfToke2V2ZW50TmFtZX1gO1xufVxuIiwiaW1wb3J0IHsgV3h0TG9jYXRpb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuL2N1c3RvbS1ldmVudHMubWpzXCI7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb25XYXRjaGVyKGN0eCkge1xuICBsZXQgaW50ZXJ2YWw7XG4gIGxldCBvbGRVcmw7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogRW5zdXJlIHRoZSBsb2NhdGlvbiB3YXRjaGVyIGlzIGFjdGl2ZWx5IGxvb2tpbmcgZm9yIFVSTCBjaGFuZ2VzLiBJZiBpdCdzIGFscmVhZHkgd2F0Y2hpbmcsXG4gICAgICogdGhpcyBpcyBhIG5vb3AuXG4gICAgICovXG4gICAgcnVuKCkge1xuICAgICAgaWYgKGludGVydmFsICE9IG51bGwpIHJldHVybjtcbiAgICAgIG9sZFVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG4gICAgICBpbnRlcnZhbCA9IGN0eC5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGxldCBuZXdVcmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAobmV3VXJsLmhyZWYgIT09IG9sZFVybC5ocmVmKSB7XG4gICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IFd4dExvY2F0aW9uQ2hhbmdlRXZlbnQobmV3VXJsLCBvbGRVcmwpKTtcbiAgICAgICAgICBvbGRVcmwgPSBuZXdVcmw7XG4gICAgICAgIH1cbiAgICAgIH0sIDFlMyk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gXCJ3eHQvYnJvd3NlclwiO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWxzL2ludGVybmFsL2xvZ2dlci5tanNcIjtcbmltcG9ydCB7XG4gIGdldFVuaXF1ZUV2ZW50TmFtZVxufSBmcm9tIFwiLi9pbnRlcm5hbC9jdXN0b20tZXZlbnRzLm1qc1wiO1xuaW1wb3J0IHsgY3JlYXRlTG9jYXRpb25XYXRjaGVyIH0gZnJvbSBcIi4vaW50ZXJuYWwvbG9jYXRpb24td2F0Y2hlci5tanNcIjtcbmV4cG9ydCBjbGFzcyBDb250ZW50U2NyaXB0Q29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnRTY3JpcHROYW1lLCBvcHRpb25zKSB7XG4gICAgdGhpcy5jb250ZW50U2NyaXB0TmFtZSA9IGNvbnRlbnRTY3JpcHROYW1lO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgaWYgKHRoaXMuaXNUb3BGcmFtZSkge1xuICAgICAgdGhpcy5saXN0ZW5Gb3JOZXdlclNjcmlwdHMoeyBpZ25vcmVGaXJzdEV2ZW50OiB0cnVlIH0pO1xuICAgICAgdGhpcy5zdG9wT2xkU2NyaXB0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3RlbkZvck5ld2VyU2NyaXB0cygpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgU0NSSVBUX1NUQVJURURfTUVTU0FHRV9UWVBFID0gZ2V0VW5pcXVlRXZlbnROYW1lKFxuICAgIFwid3h0OmNvbnRlbnQtc2NyaXB0LXN0YXJ0ZWRcIlxuICApO1xuICBpc1RvcEZyYW1lID0gd2luZG93LnNlbGYgPT09IHdpbmRvdy50b3A7XG4gIGFib3J0Q29udHJvbGxlcjtcbiAgbG9jYXRpb25XYXRjaGVyID0gY3JlYXRlTG9jYXRpb25XYXRjaGVyKHRoaXMpO1xuICByZWNlaXZlZE1lc3NhZ2VJZHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBnZXQgc2lnbmFsKCkge1xuICAgIHJldHVybiB0aGlzLmFib3J0Q29udHJvbGxlci5zaWduYWw7XG4gIH1cbiAgYWJvcnQocmVhc29uKSB7XG4gICAgcmV0dXJuIHRoaXMuYWJvcnRDb250cm9sbGVyLmFib3J0KHJlYXNvbik7XG4gIH1cbiAgZ2V0IGlzSW52YWxpZCgpIHtcbiAgICBpZiAoYnJvd3Nlci5ydW50aW1lLmlkID09IG51bGwpIHtcbiAgICAgIHRoaXMubm90aWZ5SW52YWxpZGF0ZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2lnbmFsLmFib3J0ZWQ7XG4gIH1cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzSW52YWxpZDtcbiAgfVxuICAvKipcbiAgICogQWRkIGEgbGlzdGVuZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgY29udGVudCBzY3JpcHQncyBjb250ZXh0IGlzIGludmFsaWRhdGVkLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoY2IpO1xuICAgKiBjb25zdCByZW1vdmVJbnZhbGlkYXRlZExpc3RlbmVyID0gY3R4Lm9uSW52YWxpZGF0ZWQoKCkgPT4ge1xuICAgKiAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIoY2IpO1xuICAgKiB9KVxuICAgKiAvLyAuLi5cbiAgICogcmVtb3ZlSW52YWxpZGF0ZWRMaXN0ZW5lcigpO1xuICAgKi9cbiAgb25JbnZhbGlkYXRlZChjYikge1xuICAgIHRoaXMuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBjYik7XG4gICAgcmV0dXJuICgpID0+IHRoaXMuc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBjYik7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiBhIHByb21pc2UgdGhhdCBuZXZlciByZXNvbHZlcy4gVXNlZnVsIGlmIHlvdSBoYXZlIGFuIGFzeW5jIGZ1bmN0aW9uIHRoYXQgc2hvdWxkbid0IHJ1blxuICAgKiBhZnRlciB0aGUgY29udGV4dCBpcyBleHBpcmVkLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCBnZXRWYWx1ZUZyb21TdG9yYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgKiAgIGlmIChjdHguaXNJbnZhbGlkKSByZXR1cm4gY3R4LmJsb2NrKCk7XG4gICAqXG4gICAqICAgLy8gLi4uXG4gICAqIH1cbiAgICovXG4gIGJsb2NrKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFdyYXBwZXIgYXJvdW5kIGB3aW5kb3cuc2V0SW50ZXJ2YWxgIHRoYXQgYXV0b21hdGljYWxseSBjbGVhcnMgdGhlIGludGVydmFsIHdoZW4gaW52YWxpZGF0ZWQuXG4gICAqL1xuICBzZXRJbnRlcnZhbChoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ZhbGlkKSBoYW5kbGVyKCk7XG4gICAgfSwgdGltZW91dCk7XG4gICAgdGhpcy5vbkludmFsaWRhdGVkKCgpID0+IGNsZWFySW50ZXJ2YWwoaWQpKTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cbiAgLyoqXG4gICAqIFdyYXBwZXIgYXJvdW5kIGB3aW5kb3cuc2V0VGltZW91dGAgdGhhdCBhdXRvbWF0aWNhbGx5IGNsZWFycyB0aGUgaW50ZXJ2YWwgd2hlbiBpbnZhbGlkYXRlZC5cbiAgICovXG4gIHNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCkge1xuICAgIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ZhbGlkKSBoYW5kbGVyKCk7XG4gICAgfSwgdGltZW91dCk7XG4gICAgdGhpcy5vbkludmFsaWRhdGVkKCgpID0+IGNsZWFyVGltZW91dChpZCkpO1xuICAgIHJldHVybiBpZDtcbiAgfVxuICAvKipcbiAgICogV3JhcHBlciBhcm91bmQgYHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIHRoYXQgYXV0b21hdGljYWxseSBjYW5jZWxzIHRoZSByZXF1ZXN0IHdoZW5cbiAgICogaW52YWxpZGF0ZWQuXG4gICAqL1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spIHtcbiAgICBjb25zdCBpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkgY2FsbGJhY2soLi4uYXJncyk7XG4gICAgfSk7XG4gICAgdGhpcy5vbkludmFsaWRhdGVkKCgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG4gIC8qKlxuICAgKiBXcmFwcGVyIGFyb3VuZCBgd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2tgIHRoYXQgYXV0b21hdGljYWxseSBjYW5jZWxzIHRoZSByZXF1ZXN0IHdoZW5cbiAgICogaW52YWxpZGF0ZWQuXG4gICAqL1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrKGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc2lnbmFsLmFib3J0ZWQpIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIHRoaXMub25JbnZhbGlkYXRlZCgoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWQpKTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cbiAgYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZSA9PT0gXCJ3eHQ6bG9jYXRpb25jaGFuZ2VcIikge1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkgdGhpcy5sb2NhdGlvbldhdGNoZXIucnVuKCk7XG4gICAgfVxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyPy4oXG4gICAgICB0eXBlLnN0YXJ0c1dpdGgoXCJ3eHQ6XCIpID8gZ2V0VW5pcXVlRXZlbnROYW1lKHR5cGUpIDogdHlwZSxcbiAgICAgIGhhbmRsZXIsXG4gICAgICB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHNpZ25hbDogdGhpcy5zaWduYWxcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQWJvcnQgdGhlIGFib3J0IGNvbnRyb2xsZXIgYW5kIGV4ZWN1dGUgYWxsIGBvbkludmFsaWRhdGVkYCBsaXN0ZW5lcnMuXG4gICAqL1xuICBub3RpZnlJbnZhbGlkYXRlZCgpIHtcbiAgICB0aGlzLmFib3J0KFwiQ29udGVudCBzY3JpcHQgY29udGV4dCBpbnZhbGlkYXRlZFwiKTtcbiAgICBsb2dnZXIuZGVidWcoXG4gICAgICBgQ29udGVudCBzY3JpcHQgXCIke3RoaXMuY29udGVudFNjcmlwdE5hbWV9XCIgY29udGV4dCBpbnZhbGlkYXRlZGBcbiAgICApO1xuICB9XG4gIHN0b3BPbGRTY3JpcHRzKCkge1xuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgdHlwZTogQ29udGVudFNjcmlwdENvbnRleHQuU0NSSVBUX1NUQVJURURfTUVTU0FHRV9UWVBFLFxuICAgICAgICBjb250ZW50U2NyaXB0TmFtZTogdGhpcy5jb250ZW50U2NyaXB0TmFtZSxcbiAgICAgICAgbWVzc2FnZUlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKVxuICAgICAgfSxcbiAgICAgIFwiKlwiXG4gICAgKTtcbiAgfVxuICB2ZXJpZnlTY3JpcHRTdGFydGVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1NjcmlwdFN0YXJ0ZWRFdmVudCA9IGV2ZW50LmRhdGE/LnR5cGUgPT09IENvbnRlbnRTY3JpcHRDb250ZXh0LlNDUklQVF9TVEFSVEVEX01FU1NBR0VfVFlQRTtcbiAgICBjb25zdCBpc1NhbWVDb250ZW50U2NyaXB0ID0gZXZlbnQuZGF0YT8uY29udGVudFNjcmlwdE5hbWUgPT09IHRoaXMuY29udGVudFNjcmlwdE5hbWU7XG4gICAgY29uc3QgaXNOb3REdXBsaWNhdGUgPSAhdGhpcy5yZWNlaXZlZE1lc3NhZ2VJZHMuaGFzKGV2ZW50LmRhdGE/Lm1lc3NhZ2VJZCk7XG4gICAgcmV0dXJuIGlzU2NyaXB0U3RhcnRlZEV2ZW50ICYmIGlzU2FtZUNvbnRlbnRTY3JpcHQgJiYgaXNOb3REdXBsaWNhdGU7XG4gIH1cbiAgbGlzdGVuRm9yTmV3ZXJTY3JpcHRzKG9wdGlvbnMpIHtcbiAgICBsZXQgaXNGaXJzdCA9IHRydWU7XG4gICAgY29uc3QgY2IgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnZlcmlmeVNjcmlwdFN0YXJ0ZWRFdmVudChldmVudCkpIHtcbiAgICAgICAgdGhpcy5yZWNlaXZlZE1lc3NhZ2VJZHMuYWRkKGV2ZW50LmRhdGEubWVzc2FnZUlkKTtcbiAgICAgICAgY29uc3Qgd2FzRmlyc3QgPSBpc0ZpcnN0O1xuICAgICAgICBpc0ZpcnN0ID0gZmFsc2U7XG4gICAgICAgIGlmICh3YXNGaXJzdCAmJiBvcHRpb25zPy5pZ25vcmVGaXJzdEV2ZW50KSByZXR1cm47XG4gICAgICAgIHRoaXMubm90aWZ5SW52YWxpZGF0ZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGNiKTtcbiAgICB0aGlzLm9uSW52YWxpZGF0ZWQoKCkgPT4gcmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgY2IpKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRlZmluaXRpb24iLCJicm93c2VyIiwiX2Jyb3dzZXIiLCJwcmludCIsImxvZ2dlciIsIl9hIiwiX2IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLFdBQVMsb0JBQW9CQSxhQUFZO0FBQzlDLFdBQU9BO0FBQUEsRUFDVDtBQ0RPLFFBQU1DLGNBQVUsc0JBQVcsWUFBWCxtQkFBb0IsWUFBcEIsbUJBQTZCLE1BQ2hELFdBQVcsVUFDWCxXQUFXO0FDRlIsUUFBTSxVQUFVQztBQ0R2QixRQUFBLGFBQUEsb0JBQUE7QUFBQSxJQUFtQyxTQUFBLENBQUEsWUFBQTtBQUFBLElBQ1gsT0FBQTtBQUdwQixZQUFBLG9CQUFBO0FBQUEsUUFBMEI7QUFBQSxRQUN4QjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0E7QUFJRixZQUFBLG1CQUFBO0FBQUEsUUFBeUI7QUFBQSxRQUN2QjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNBO0FBSUYsWUFBQSx1QkFBQTtBQUFBLFFBQTZCO0FBQUEsUUFDM0I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNBO0FBSUYsWUFBQSx1QkFBQTtBQUFBLFFBQTZCO0FBQUEsUUFDM0I7QUFBQSxRQUNBO0FBQUEs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

(function() {
  const STORAGE_KEY = 'cookieConsent'; // 'allow' | 'deny'
  let matomoLoaded = false;

  // === 1. Dynamisch Banner + Toggle erzeugen ===
  document.addEventListener('DOMContentLoaded', function() {
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
        banner.innerHTML = `
      <div class="cookie-banner-image">
        <!-- SVG-Animation -->
        <svg id="cookie-game" viewBox="0 0 260 140">
          <!-- Weißer Hintergrund hinter der Animation -->
          <rect x="0" y="0" width="260" height="140" fill="#ffffff"/>

          <!-- Roboter -->
          <g id="cookie-robot" transform="translate(40,60)">
            <image
              href="/img/Eduard-Red-Top.svg"
              width="40"
              height="40"
              x="-20"
              y="-20"
            />
          </g>

          <!-- Cookies -->
          <g class="cookie" transform="translate(160,40)">
            <image href="/img/Cookie.svg" width="20" height="20" x="-10" y="-10" />
          </g>
          <g class="cookie" transform="translate(200,70)">
            <image href="/img/Cookie.svg" width="20" height="20" x="-10" y="-10" />
          </g>
          <g class="cookie" transform="translate(180,100)">
            <image href="/img/Cookie.svg" width="20" height="20" x="-10" y="-10" />
          </g>
        </svg>
      </div>

      <div class="cookie-banner-content">
        <h2 class="cookie-banner-headline">
          Eduard loves cookies – help him eat them
        </h2>
        <p class="cookie-banner-text">
          We use Matomo (without tracking cookies) to understand how people use our website.
          This anonymous information helps Eduard improve the site and keep his robots running
          smoothly. You can allow this tracking or continue without it – it’s completely up to you.
        </p>

        <div class="cookie-banner-buttons">
          <button id="cookie-accept" class="cookie-btn cookie-accept">
            <span class="cookie-btn-icon">✓</span>
            <span>Allow cookies</span>
          </button>
          <button id="cookie-deny" class="cookie-btn cookie-deny">
            Continue without cookies
          </button>
        </div>

        <div class="cookie-banner-links">
          <a href="/impressum">Impressum</a>
          <span class="cookie-links-separator">·</span>
          <a href="/privacypolicy">Privacy policy</a>
        </div>
      </div>
    `;


    const toggle = document.createElement('div');
    toggle.id = 'cookie-toggle';
    toggle.innerHTML = '🍪';

    document.body.appendChild(banner);
    document.body.appendChild(toggle);

    // === Cookie-Game-Animation ===
    (function initCookieGame() {
      const robot  = banner.querySelector('#cookie-robot');
      const cookies = Array.from(banner.querySelectorAll('.cookie'));
      if (!robot || !cookies.length) return;

      const robotPos = { x: 40, y: 60 };
      let robotAngle = 0;
      const step = 5;

      function updateRobotTransform() {
        robotPos.x = Math.max(20, Math.min(240, robotPos.x));
        robotPos.y = Math.max(20, Math.min(120, robotPos.y));
        robot.setAttribute('transform', `translate(${robotPos.x}, ${robotPos.y}) rotate(${robotAngle})`);
      }

      function isColliding(a, b) {
        const r = a.getBoundingClientRect();
        const c = b.getBoundingClientRect();
        if ((r.width === 0 && r.height === 0) || (c.width === 0 && c.height === 0)) return false;
        return !(r.right < c.left || r.left > c.right || r.bottom < c.top || r.top > c.bottom);
      }

      function checkCollisions() {
        cookies.forEach(cookie => {
          if (cookie.classList.contains('eaten')) return;
          if (isColliding(robot, cookie)) {
            cookie.classList.add('eaten');
            setTimeout(() => cookie.remove(), 200);
          }
        });
      }

      function handleKey(e) {
        let used = false;
        switch (e.key) {
          case 'ArrowUp':
            robotAngle = 0;
            robotPos.y -= step;
            used = true;
            break;
          case 'ArrowRight':
            robotAngle = 90;
            robotPos.x += step;
            used = true;
            break;
          case 'ArrowDown':
            robotAngle = 180;
            robotPos.y += step;
            used = true;
            break;
          case 'ArrowLeft':
            robotAngle = -90;
            robotPos.x -= step;
            used = true;
            break;
        }
        if (used) {
          e.preventDefault();
          updateRobotTransform();
          checkCollisions();
        }
      }

      window.addEventListener('keydown', handleKey);
      updateRobotTransform();
    })();

    // === 2. Funktionen ===
    function setToggleColor(status) {
      toggle.style.backgroundColor = status === 'allow' ? '#000000ff' : '#811811';
      toggle.title = status === 'allow'
        ? 'Cookie-Einstellungen: erlaubt (klicken zum Ändern)'
        : 'Cookie-Einstellungen: abgelehnt (klicken zum Ändern)';
    }

    function showBanner() { banner.style.display = 'flex'; }
    function hideBanner() { banner.style.display = 'none'; }
    function showToggle() { toggle.style.display = 'flex'; }
    function hideToggle() { toggle.style.display = 'none'; }

    // === 3. Matomo laden ===
    function loadMatomo() {
      if (matomoLoaded) return;
      matomoLoaded = true;
      var _paq = window._paq = window._paq || [];
      _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
      _paq.push(["setCookieDomain", "*.eduart-robotik.com"]);
      _paq.push(["setDoNotTrack", true]);
      _paq.push(["disableCookies"]);
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u = "//matomo.sinamatic.de/";
        _paq.push(['setTrackerUrl', u + 'matomo.php']);
        _paq.push(['setSiteId', '2']);
        var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
        g.async = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);
      })();
    }

    // === 4. Aktionen ===
    banner.querySelector('#cookie-accept').addEventListener('click', function() {
      localStorage.setItem(STORAGE_KEY, 'allow');
      hideBanner();
      showToggle();
      setToggleColor('allow');
      loadMatomo();
    });

    banner.querySelector('#cookie-deny').addEventListener('click', function() {
      localStorage.setItem(STORAGE_KEY, 'deny');
      hideBanner();
      showToggle();
      setToggleColor('deny');
    });

    toggle.addEventListener('click', function() {
      showBanner();
    });

    // === 5. Zustand wiederherstellen ===
    const consent = localStorage.getItem(STORAGE_KEY);
    if (consent === 'allow') {
      hideBanner();
      showToggle();
      setToggleColor('allow');
      loadMatomo();
    } else if (consent === 'deny') {
      hideBanner();
      showToggle();
      setToggleColor('deny');
    } else {
      showBanner();
      hideToggle();
    }
  });
})();

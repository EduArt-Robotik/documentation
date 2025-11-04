// src/theme/Navbar/index.js
import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import '@site/src/css/header.css';

// Docusaurus eigene Navbar-Komponenten:
import SearchBar from '@theme/SearchBar';

// Light or Dark Mode Toggle:
import {useColorMode} from '@docusaurus/theme-common';
import {Sun, Moon} from 'lucide-react'; // Icon-Paket (Docusaurus nutzt Lucide intern)

// Language Submenu (wenn i18n genutzt wird):
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useHistory, useLocation} from '@docusaurus/router';
import {Languages} from 'lucide-react';

const isExternal = (url) => /^https?:\/\//i.test(url);
function SmartLink({to, href, children, ...rest}) {
  const external = href || (to && isExternal(to));
  if (external) return <a href={href || to} {...rest}>{children}</a>;
  return <Link to={to} {...rest}>{children}</Link>;
}

function MenuList({items}) {
  if (!items?.length) return null;
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <SmartLink to={item.to} href={item.href}>{item.label}</SmartLink>
          {item.children?.length ? <MenuList items={item.children} /> : null}
        </li>
      ))}
    </ul>
  );
}

// Dark- und Lightmode Toggle Button (Beispiel)
function MyColorModeButton() {
  const {
    colorMode,          // 'light' oder 'dark'
    colorModeChoice,    // user choice (kann null sein)
    setColorMode,
  } = useColorMode();

  const isDark = colorMode === 'dark';

  const toggleMode = () => {
    const nextMode = colorModeChoice === 'dark' ? 'light' : 'dark';
    setColorMode(nextMode);
  };

  return (
    <button
      onClick={toggleMode}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="theme-toggle"
    >
      {isDark ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}

// Language Submenu (wenn i18n genutzt wird)
function MyLocaleDropdown() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  if (!i18n || !i18n.locales || i18n.locales.length <= 1) {
    // Nur eine Sprache → nichts anzeigen
    return null;
  }

  const {currentLocale, locales, defaultLocale, localeConfigs} = i18n;
  const baseUrl = siteConfig.baseUrl || '/';
  const baseWithoutTrailing = baseUrl.endsWith('/')
    ? baseUrl.slice(0, -1)
    : baseUrl;

  const buildPathForLocale = (newLocale) => {
    let path = location.pathname;

    // Pfad relativ zu baseUrl
    if (path.startsWith(baseUrl)) {
      path = path.slice(baseUrl.length - 1); // baseUrl enthält den Slash
    }
    if (!path.startsWith('/')) path = '/' + path;

    // Eventuellen Locale-Prefix entfernen (/de/intro -> /intro)
    const match = path.match(/^\/([^/]+)(\/.*)?$/);
    if (match && locales.includes(match[1])) {
      path = match[2] || '/';
    }

    // für defaultLocale kein Prefix, sonst /locale/…
    if (newLocale === defaultLocale) {
      return `${baseWithoutTrailing}${path}`;
    }
    return `${baseWithoutTrailing}/${newLocale}${path}`;
  };

  const handleSelect = (locale) => {
    if (locale === currentLocale) {
      setOpen(false);
      return;
    }
    const newPath = buildPathForLocale(locale);
    history.push(newPath);
    setOpen(false);
  };

  const currentLabel =
    localeConfigs?.[currentLocale]?.label || currentLocale.toUpperCase();

  return (
    <div className="locale-menu">
      <button
        type="button"
        className="locale-button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <Languages size={16} className="locale-button__icon" />
        <span className="locale-button__label">{currentLabel}</span>
        <span className={`locale-button__caret ${open ? 'open' : ''}`}>▾</span>
      </button>

      {open && (
        <ul
          className="locale-dropdown"
          role="listbox"
          aria-label="Sprache wählen"
        >
          {locales.map((locale) => {
            const label =
              localeConfigs?.[locale]?.label || locale.toUpperCase();
            const isActive = locale === currentLocale;
            return (
              <li key={locale}>
                <button
                  type="button"
                  className={`locale-dropdown__item ${
                    isActive ? 'active' : ''
                  }`}
                  onClick={() => handleSelect(locale)}
                  aria-current={isActive ? 'true' : 'false'}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

// Deine Menüstruktur

const menuData = [
  {
    label: 'Home',
    to: 'https://eduart-robotik.com',
  },
  {label: 'Products', 
    to: 'https://eduart-robotik.com/products', 
    children: [
      {label: 'R&D Platform "Eduard"', to: 'https://eduart-robotik.com/products/rd-platform-eduard/'},
      {label: '@work Platform "Arthur"', to: 'https://eduart-robotik.com/products/atWork-platform-arthur/'},
      {label: 'Kinematics Kit "Kim"', to: 'https://eduart-robotik.com/products/kinematics-kit-kim/'},
      {label: 'Sensor ring "Vision360"', to: 'https://eduart-robotik.com/products/sensor-ring-vision360/'},
    ] 
}, 
  {label: 'Contact', to: 'https://eduart-robotik.com/contact/'},
  {label: 'Documentation', to: '/',  /* children: [{label: 'Log', to: '/blog' },
  ],*/},
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Unsichtbare Placeholder-Navbar: verhindert Crash & verschiebt nichts */}
      <div className="navbar" aria-hidden="true" style={{height: 0, display: 'block', visibility: 'hidden'}} />

      {/* GESCOPEDER HEADER */}
      <div id="eduart-header">
        <nav className="menu" role="navigation" aria-label="Hauptnavigation">
          <button
            id="burger"
            className="burger"
            aria-label="Menü öffnen"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            ☰
          </button>

          <div className="menu__logo">
            <SmartLink to="/" aria-label="EduArt Robotik GmbH Home">
              <picture>
                <source srcSet="logos/EduArt_Logo_white.svg" type="image/svg+xml" />
                <img
                  src="logos/EduArt_Logo_white.svg"
                  alt="EduArt Robotik GmbH Logo"
                  width="180" height="40"
                  loading="eager" decoding="async"
                />
              </picture>
            </SmartLink>
          </div>

          <nav className="menu__nav" aria-label="Primäre Navigation">
            <MenuList items={menuData} />
          </nav>

          

          
          <div className="social-icons">
            
            
            <SearchBar />
            <MyLocaleDropdown />
            <MyColorModeButton />
            

          </div>

          <ul
            id="mobileNav"
            className={`mobile-nav ${open ? 'active' : ''}`}
            aria-label="Mobile Navigation"
          >
            <li className="__inject">
              <MenuList items={menuData} />
            </li>
          </ul>
        </nav>
      </div>
    </>


  );
}

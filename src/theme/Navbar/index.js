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
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const i18n = siteConfig.i18n;
  if (!i18n || !i18n.locales || i18n.locales.length <= 1) return null;

  const { locales, defaultLocale, localeConfigs } = i18n;
  const pathname = location.pathname;

  // Aktuelles Locale bestimmen: Ist erstes Segment eine Sprache?
  const pathParts = pathname.replace(/^\/+/, '').split('/');
  const firstSegment = pathParts[0];
  const hasLocalePrefix = locales.includes(firstSegment);
  const currentLocale = hasLocalePrefix ? firstSegment : defaultLocale;

  // Pfad ohne das Sprach-Präfix rekonstruieren
  const pathWithoutLocale = hasLocalePrefix
    ? '/' + pathParts.slice(1).join('/')
    : pathname;

  // Ziel-URL bauen
  const makeLocaleUrl = (locale) => {
    if (locale === defaultLocale) return pathWithoutLocale;
    return `/${locale}${pathWithoutLocale}`;
  };

  const handleSelect = (locale) => {
    if (locale === currentLocale) return setOpen(false);
    window.location.href = makeLocaleUrl(locale);
  };

  const currentLabel =
    localeConfigs?.[currentLocale]?.label ?? currentLocale.toUpperCase();

  return (
    <div className="locale-menu">
      <button
        type="button"
        className="locale-button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <Languages size={16} className="locale-button__icon" />
        <span className="locale-button__label">{currentLabel}</span>
        <span className={`locale-button__caret ${open ? 'open' : ''}`}>▾</span>
      </button>

      {open && (
        <ul className="locale-dropdown" role="listbox" aria-label="Sprache wählen">
          {locales.map((locale) => {
            const label =
              localeConfigs?.[locale]?.label ?? locale.toUpperCase();
            const isActive = locale === currentLocale;
            return (
              <li key={locale}>
                <button
                  type="button"
                  className={`locale-dropdown__item ${isActive ? 'active' : ''}`}
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

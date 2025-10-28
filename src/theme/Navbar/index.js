// src/theme/Navbar/index.js
import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import '@site/src/css/header.css';

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

// Deine Menüstruktur

const menuData = [
  {
    label: 'Home',
    to: 'https://test.eduart-robotik.com',
  },
  {label: 'Products', 
    to: 'https://test.eduart-robotik.com/products', 
    children: [
      {label: 'R&D Platform "Eduard"', to: 'http://test.eduart-robotik.com/products/rd-platform-eduard/'},
      {label: '@work Platform "Arthur"', to: 'http://test.eduart-robotik.com/products/atWork-platform-arthur/'},
      {label: 'Kinematics Kit "Kim"', to: 'http://test.eduart-robotik.com/products/kinematics-kit-kim/'},
      {label: 'Sensor ring "Vision360"', to: 'http://test.eduart-robotik.com/products/sensor-ring-vision360/'},
    ] 
}, 
  {label: 'Contact', to: 'http://test.eduart-robotik.com/contact/'},
  {label: 'Documentation', to: '/docs/intro'},
  {label: 'Blog', to: '/blog'},
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
                  src="logos/EduArt_Logo_white.png"
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

          <div className="social-icons" aria-label="Social Media">
            <a href="https://forum.eduart-robotik.com" aria-label="Forum">
              <picture>
                <source srcSet="icons/forum.svg" type="image/svg+xml" />
                <img src="icons/forum.png" alt="Forum" />
              </picture>
            </a>
            <a href="https://www.youtube.com/@eduart_robotik" aria-label="YouTube">
              <picture>
                <source srcSet="icons/youtube.svg" type="image/svg+xml" />
                <img src="icons/youtube.png" alt="YouTube" />
              </picture>
            </a>
            <a href="https://www.instagram.com/eduart_robotik/" aria-label="Instagram">
              <picture>
                <source srcSet="icons/instagram.svg" type="image/svg+xml" />
                <img src="icons/instagram.png" alt="Instagram" />
              </picture>
            </a>
            <a href="https://www.linkedin.com/company/eduart-robotik/" aria-label="LinkedIn">
              <picture>
                <source srcSet="icons/linkedin.svg" type="image/svg+xml" />
                <img src="icons/linkedin.png" alt="LinkedIn" />
              </picture>
            </a>
            <a href="https://github.com/EduArt-Robotik" aria-label="GitHub">
              <picture>
                <source srcSet="icons/github.svg" type="image/svg+xml" />
                <img src="icons/github.png" alt="GitHub" />
              </picture>
            </a>
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

// src/theme/Footer/index.js
import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "@site/src/css/footer.css";

const currentYear = new Date().getFullYear();

function ScrollToTopButton() {
  const handleClick = (event) => {
    event.preventDefault();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      className="scroll-to-top"
      title="Zurück nach oben"
      onClick={handleClick}
    >
      ↑
    </button>
  );
}

export default function Footer() {
  const forumIcon = useBaseUrl("/icons/forum.svg");
  const youtubeIcon = useBaseUrl("/icons/youtube.svg");
  const instagramIcon = useBaseUrl("/icons/instagram.svg");
  const linkedinIcon = useBaseUrl("/icons/linkedin.svg");
  const githubIcon = useBaseUrl("/icons/github.svg");

  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <p>© {currentYear} EduArt Robotik GmbH</p>
        </div>

        <div className="footer-center">
          {/* Links kannst du auf deine Hauptseite oder Docusaurus-Seiten zeigen lassen */}
          <a href="https://eduart-robotik.com/impressum/">Impressum</a>
          <a href="https://eduart-robotik.com/privacypolicy/">Privacy Policy</a>
          <a href="https://eduart-robotik.com/contact/">Contact</a>
        </div>

        <div className="footer-right">
          <a
            href="https://forum.eduart-robotik.com"
            aria-label="Forum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={forumIcon} alt="Forum" />
          </a>
          <a
            href="https://www.youtube.com/@eduart_robotik"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeIcon} alt="YouTube" />
          </a>
          <a
            href="https://www.instagram.com/eduart_robotik/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/eduart-robotik/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/EduArt-Robotik"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </footer>

      <ScrollToTopButton />
    </>
  );
}

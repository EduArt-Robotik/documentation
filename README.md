# Usage
- docs/EduArts-Tutorials is main page of this, for better adjustment open /docs Folder in Obsidian App 
- static includes pictures etc., write path always without static (e.g. logos/EduArtLogo.svg)
- src/theme/index.js overrides standard menu from docusaurus with EduArt Menu


# ToDo
- EduArt Logo vanishes sometimes? find out why and how to fix that
- structure of tutorials 

# Installation 
```
npm run start
```

```
npm run build
```


Use Menu of website instead of Docusaurus menu

```
npx docusaurus swizzle @docusaurus/theme-classic Navbar --eject --danger
```

Render LaTeX https://docusaurus.io/docs/markdown-features/math-equations

```
npm install --save remark-math@6 rehype-katex@7
```

Use lokale search 

```
npm install @easyops-cn/docusaurus-search-local
```

Light- und Darkmode Icons and Language Icon

```
npm install lucide-react
```

Add english translation

```
npx docusaurus write-translations --locale en
```


# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.


# Write Instructions

Filename: 1_schnellstart-docker
- Number: Same as sidebar_position metadata
- write everything small
- schnellstart-docker same as id meta tag (used for references), ATTENTION ALWAYS USE UNIQUE(!!!) IDs, unique IDs necessary for translations!

Content:
- everything in german in /docs folder
- for english translations copy file(s) in i18n/en/docusaurus-plugin-content-docs/current folder (or add another translation, check above)
- same folder structure as in /docs
- translate document with github copilot
- make sure that the id is the same as in the original doc in /docs
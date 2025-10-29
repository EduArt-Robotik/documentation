# Usage
- docs/EduArts-Tutorials is main page of this
- static includes pictures etc., write path always without static (e.g. logos/EduArtLogo.svg)
- src/theme/index.js overrides standard menu from docusaurus with EduArt Menu

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



# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.


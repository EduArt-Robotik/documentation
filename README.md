# Usage
- docs/EduArts-Tutorials is main page of this
- static includes pictures etc., write path always without static (e.g. logos/EduArtLogo.svg)
- src/theme/index.js overrides standard menu from docusaurus with EduArt Menu

# ToDo
- Social Media Icons weg, dafür Suche + Dark/Lightmode Button wieder hin

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
````
npm install @easyops-cn/docusaurus-search-local
```

Light- und Darkmode Icons and Language Icon
````
npm install lucide-react
```

Add english translation
```
npx docusaurus write-translations --locale en
```


# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.


# VSC Plugins
Markdown Preview Enhanced 
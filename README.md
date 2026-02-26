Rendered Docu here: https://docs.eduart-robotik.com

# Usage
- docs/EduArts-Tutorials is main page of this, for better adjustment open /docs Folder in Obsidian App 
- static includes pictures etc., write path always without static (e.g. logos/EduArtLogo.svg)
- src/theme/index.js overrides standard menu from docusaurus with EduArt Menu
- the `master` branch of this repo automatically deploys to https://docs.eduart-robotik.com every day at 4 am
- for local development use `npm run start` and open http://localhost:3000 in your browser 
- please work on your own branch 


# ToDo
- [ ] EduArt Logo vanishes sometimes? find out why and how to fix that
- [ ] structure of tutorials 
- [ ] add english translations / check existing translations

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

# English versions

Use the following commands to check if the translation works

```
npm run build
```

```
npm run serve
```

and then switch to EN

# Help us
If you want to help us update the Docu or write a chapter, please Fork the Repo and create a Pull Request, we will check it and merge it if everything is fine. You can also contact us directly if you have any questions or suggestions.

# Formating
## Add reference to another chapter
Example: [Name of chapter](Link_to_chapter.md)

## Add reference to website
Example: [Name of website](https://www.example.com)

## Add picture
Add an ordner called "assets" in the same folder as the doc, then add the picture in this folder and reference it with the path "assets/picture.png". Name the picture with a descriptive name, so you can easily find it later. Use subfolders if you have many pictures, e.g. "assets/quickstart/picture.png".

Example: ![RViz](./assets/quickstart/7rviz.png)

## Add code snippet
```shell
cd edu_simulation_quickstart
```

```python
# This is a code snippet
def hello_world():
    print("Hello, World!")
```
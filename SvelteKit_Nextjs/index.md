---
marp: true
---

<!-- paginate: true -->
<!-- headingDivider: 1 -->
<!-- footer: '[Abraham Schilling](https://github.com/n4bb12), 05.05.2021' -->

<!-- Base Theme -->
<style>
  section {
    font-size: 1.25rem;
    line-height: 1.5;
    padding: 20%;
    padding-top: 10%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #224466;
    margin-bottom: 1.5rem;
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    width: 100%;
    text-align: center;
  }
  h1 img,
  h2 img,
  h3 img,
  h4 img,
  h5 img,
  h6 img,
  pre img {
    display: inline;
  }
  blockquote,
  ul,
  ol,
  table,
  pre {
    width: auto;
    margin: 0 auto 1rem;
  }
  p {
    width: auto;
    margin: 0 auto 0.5rem;
  }
  pre + pre {
    margin-top: -0.75rem;
  }
  footer {
    font-size: 0.75rem;
  }
  footer a {
    text-decoration: underline;
    color: inherit;
  }
  pre {
    width: 90%;
    margin: 0 auto 1rem;
    border: 0;
    background: #0a0d14;
    color: white;
    font-size: 1rem;
  }
  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-type {
    color: #e40f1f;
  }
  .hljs-number,
  .hljs-string,
  .hljs-built_in {
    color: #b30c7f;
  }
  .hljs-attr,
  .hljs-selector-attr,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-selector-pseudo,
  .hljs-title {
    color: #ee7600;
  }

  /* Split Slides */
  /* Inspired by https://www.gitmemory.com/issue/marp-team/marpit/137/524175560 */
  section.split {
    overflow: visible;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "slideheading slideheading"
      "leftpanel rightpanel";
  }
  section.split h1 {
    grid-column: span 2;
  }
  section.split .left {
    grid-area: leftpanel;
  }
  section.split .right {
    grid-area: rightpanel;
  }
</style>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Overpass:wght@300;400;700&display=swap");

  :root {
    --back: #ffffff;
    --back-light: #f6fafd;
    --back-api: #eff8ff;
    --prime: #ff3e00;
    --second: #676778;
    --flash: #40b3ff;
    --text: #444;
    --font: "Overpass", sans-serif;
    --font-mono: "Fira Mono", monospace;

    color: var(--text);
    font-family: var(--font);
    font-weight: 300;
  }
  h1,
  h2 {
    text-transform: uppercase;
    font-weight: 400;
    color: var(--second);
  }
  a {
    color: var(--prime);
    text-decoration: none;
    border-bottom: 1px solid currentColor;
  }
  a:hover,
  a:active {
    color: var(--flash);
    text-decoration: none;
  }
  footer a {
    text-decoration: none;
  }
  .svelte {
    color: var(--prime);
  }
  .react {
    color: #61dbfb;
    color: #224466;
  }
</style>

#

![h:100](resources/svelte_kit.svg)

https://kit.svelte.dev

# 🔨 Create App

```
npm init svelte@next svelte-app
cd svelte-app
yarn
yarn dev --open
```

<style scoped>
  pre {
    max-width: 50%;
  }
</style>

# VSCode Extensions

- 👑 [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) — syntax highlighting / formatting / linting / quick fixes / code completion
- 👑 [Svelte 3 Snippets](https://marketplace.visualstudio.com/items?itemName=fivethree.vscode-svelte-snippets) — comprehensive set of `s-`prefixed snippets
- ❌ You DON'T need [Svelte Intellisense](https://marketplace.visualstudio.com/items?itemName=ardenivanov.svelte-intellisense) — it is unmaintained, outdated, and its features are included in the main extension
- ❌ You DON'T need [svelte-format](https://marketplace.visualstudio.com/items?itemName=melihaltintas.svelte-format) — formatting is included in the main extension and integrates with Prettier via [prettier-plugin-svelte](https://github.com/sveltejs/prettier-plugin-svelte#prettierrc-example)

<br>

https://svelte.dev/blog/setting-up-your-editor

# Coding

<img src="https://media4.giphy.com/media/3oKIPnAiaMCws8nOsE/200w.gif?cid=6889e3d5lemyy3a30dij7ukc6t37afjbf9h4z2n2qhbwhbzw&rid=200w.gif&ct=g" width="300"/>

<br>

https://github.com/n4bb12/svektekit-example

<style scoped>
  img {
    margin: 0 auto;
  }
</style>

# ![h:50](resources/svelte_square.png) Advantages over Next.js

- Multiple layouts and nested layouts
- Independent data-loading in layouts
- Data-loading is render-mode-agnostic
- Custom global middlwares
- More flexible API endpoints
- Build adapters
- Built-in service worker support

# ![h:50](resources/nextjs_logo.png) Missing Next.js Features

- [Internationalized routing](https://nextjs.org/docs/advanced-features/i18n-routing)
- [Automatic prefetching & viewport prefetching](https://nextjs.org/docs/api-reference/next/link)
- [Incremental static regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration)
- [Image optimization & lazy loading](https://nextjs.org/docs/basic-features/image-optimization)
- [Preview mode](https://nextjs.org/docs/advanced-features/preview-mode)
- [Styling alternatives](https://nextjs.org/docs/basic-features/built-in-css-support)

<style scoped>
  h1 {
    font-weight: 700;
    color: #111;
    vertical-align: middle
  }
  a {
    border-bottom: 1px dotted;
    color: #111;
  }
  a:hover {
   color: gray;
  }
</style>

# 🥺 Pain Points

- Issues with CommonJS modules

# Similar Projects

- ![](https://www.google.com/s2/favicons?domain_url=https://sapper.svelte.dev) https://sapper.svelte.dev
- ![](https://www.google.com/s2/favicons?domain_url=https://elderguide.com/tech/elderjs) https://elderguide.com/tech/elderjs
- ![](https://www.google.com/s2/favicons?domain_url=https://routify.dev) https://routify.dev
- ![](https://www.google.com/s2/favicons?domain_url=https://plenti.co) https://plenti.co
- ![](https://www.google.com/s2/favicons?domain_url=https://crownframework.com) https://crownframework.com
- ![](https://www.google.com/s2/favicons?domain_url=https://www.junglejs.org) https://www.junglejs.org

#

![h:100](resources/svelte_square.png)

## Thanks 🍻

<style scoped>
  section {
    padding-top: 15%;
  }
  h2 {
    font-size: 2rem;
    color: #444;
  }
</style>

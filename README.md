<h1 align="center">
    <b>Vite React Template for SOHO</b>
</h1>

<p align="center">React template in javascript/Typesciprt base using vite</p>

[![Visitors](https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2Fcomnori%2Fvite-template-awesome-soho%2F&countColor=%23263759)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fcomnori%2Fvite-template-awesome-soho%2F)

### Features

1. Using Nextgeneration Frontend tool (Vite / yarn berry)
2. Freedom of choice of language
   - ECMAScript (javascript)
   - [ECMAScript with JsDoc typecheck](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html)
   - Typescript
3. Collaboration between library and vscode extension
4. Well-defined folder structure
5. Document Automation
6. [Light, Dark] theme changer
7. Multilingual support
8. IDE environment integration
9. No need to setting for develop environment

### Browser Support

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                         | Latest ✔                                                                                            | Latest ✔                                                                                         | Latest ✔                                                                                      | Latest ✔                                                                                   |

## Installation

1. Install `Dev Containers` extension
2. Download template

```bash
npx degit comnori/vite-template-awesome-soho my-app
```

3. git initialization

```bash
git init
```

### Main Library

### Language

<img height="32" width="32" src="https://cdn.simpleicons.org/javascript" alt="javascript" /> <img height="32" width="32" src="https://cdn.simpleicons.org/typescript" alt="typesciprt"/>

### Created by

<img height="32" width="32" src="https://cdn.simpleicons.org/vite" alt="vite" />

### Library

<img height="32" width="32" src="https://cdn.simpleicons.org/react" alt="react"/> <img height="32" width="32" src="https://cdn.simpleicons.org/reactrouter" alt="react-router"/> <img height="32" width="32" src="https://cdn.simpleicons.org/antdesign" alt="ant design"/>
<img height="32" width="32" src="https://cdn.simpleicons.org/redux" alt="redux"/> <img height="32" width="32" src="https://cdn.simpleicons.org/axios" alt="axios"/> <img height="32" width="32" src="https://cdn.simpleicons.org/sass" alt="sass"/> <img height="32" width="32" src="https://cdn.simpleicons.org/i18next" alt="i18next" />

### Dev tools

<img height="32" width="32" src="https://cdn.simpleicons.org/eslint" alt="eslint"/> <img height="32" width="32" src="https://cdn.simpleicons.org/prettier" alt="prettier"/> <img height="32" width="32" src="https://cdn.simpleicons.org/dotenv" alt=".env"/> <img height="32" width="32" src="https://cdn.simpleicons.org/editorconfig/aaaaaa" alt="EditorConfig"/> <img height="32" width="32" src="https://cdn.simpleicons.org/containerd/aaaaaa" alt="devcontainer"/> <img height="32" width="32" src="https://cdn.simpleicons.org/sonarlint" alt="Sonar Lint"/> <img height="32" width="32" src="https://cdn.simpleicons.org/vitest" alt="vitest"/> <img height="32" width="32" src="https://cdn.simpleicons.org/storybook" alt="storybook"/> <img height="32" width="32" src="https://cdn.simpleicons.org/cypress/000000/ffffff" alt="Cypress"/>

### Src Folder structure

```ascii
Project
├── assets                                    // like svg
├── components                                // atomic design
│   ├── atoms
│   ├── molecules
│   ├── organisms
│   └── templates
├── config                                    // project configuration
│   ├── i18n                                  // i18next resource
│   │   ├── {lang}                            // ISO 639-1 Language Code [en,...,ko]
│   │   │   └── translation.json
│   ├── MenuItems.js
│   └── Router.js
├── context                                   // React Context
│   └── {context name}                        // Context domain name
│       ├── components                        // Context related components
│       └── hooks                             // Context related hooks
├── features                                  // Redux
│   └── {reducer name}
├── hooks                                     // common hooks
├── lib                                       // Library configuration
│   ├── components
│   └── {library name}Config.js
├── pages                                     // Pages
│   ├── {domain}
│   │   ├── {page}
│   ├── {page}
│   │   ├── components                        // children for page
│   │   ├── {page}.jsx
│   │   ├── {page}.module.scss                // module scss
└── utils                                     // common utils

```

## Project configuration

### Javascript Type check enable or disable

1. Enable(true) / Disable(false)

   `tsconfig.json`

   ```json
   {
     ...
     "checkJs": true,
     ...
   }
   ```

2. Optionnal

   If you want to apply or not apply type check to only some parts, check the guide below.

   [JS Projects Utilizing TypeScript](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html#ts-check)

3. Using typescript

### Router

`src/config/Router.js`

### MenuItems

`src/config/Menu.js`

### JsDoc generation

```bash
yarn doc
```

`doc` folder created

### declaration export

```bash
yarn type
```

`type` folder created

## Library configuration

### Theme Config

1. Ant Design Default theme

   The initial theme acts as the system's theme setting.

2. Ant Design Customize theme

   To modify the Antd Theme, set the designToken according to the [Ant Design Customize Theme guide](https://ant.design/docs/react/customize-theme).

   `src/lib/themeConfig.js`

   ```js
   const themeConfig = {
     themeName: getSystemCurrentTheme,
     designToken: {
       components: {
         Layout: {
           headerHeight: 64,
         },
       },
     },
     componentSize: "middle",
   };
   ```

## Working

- [ ] JSDoc to typedoc
- [x] Vitest
- [ ] Storybook
- [ ] Cypress

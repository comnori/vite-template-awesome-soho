<h1 align="center">
    <b>Vite React Template for SOHO</b>
</h1>

<p align="center">Modern React 19 template with TypeScript/JavaScript using Vite</p>

[![Visitors](https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2Fcomnori%2Fvite-template-awesome-soho%2F&countColor=%23263759)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fcomnori%2Fvite-template-awesome-soho%2F)

### ✨ Features

1. **Modern Frontend Stack** - React 19 + Vite 6 + TypeScript 5.7
2. **Language Flexibility**
   - ECMAScript (JavaScript)
   - [ECMAScript with JSDoc typecheck](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html)
   - TypeScript
3. **UI/UX Excellence**
   - Ant Design 5.23 with full theme support
   - Light/Dark theme toggle with system preference detection and localStorage persistence
   - Customizable Ant Design design tokens with component overrides
   - Responsive design with SCSS modules
4. **State Management** - Redux Toolkit with React-Redux
5. **Internationalization** - i18next with Korean/English/Japanese support and automatic language detection
6. **Developer Experience**
   - Hot Module Replacement (HMR)
   - ESLint + Prettier configuration
   - Atomic design pattern (atoms/molecules/organisms/templates)
   - JSDoc documentation generation
   - Dev Container support
7. **Testing & Quality** - Vitest integration
8. **Routing** - React Router DOM v6 with nested routes
9. **Performance** - Bundle optimization with Lodash tree-shaking

### Theme Customization

Customize Ant Design tokens and component themes in [`src/lib/themeConfig.jsx`](src/lib/themeConfig.jsx). The example configuration overrides the global `colorPrimary`, adjusts component styles, and persists the user's theme preference in `localStorage`.

### Browser Support

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                         | Latest ✔                                                                                            | Latest ✔                                                                                         | Latest ✔                                                                                      | Latest ✔                                                                                   |

## 🚀 Quick Start

### Prerequisites

- Node.js >=18
- npm or yarn

### Installation

1. **Clone or download template**

```bash
npx degit comnori/vite-template-awesome-soho my-app
cd my-app
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Initialize git repository**

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

````ascii
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
4. **Start development server**
```bash
npm start
# or
yarn start
````

5. **Optional: Setup VS Code SDK (for Yarn users)**

```bash
yarn dlx @yarnpkg/sdks vscode
```

### Available Scripts

- `npm start` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run test` - Run tests with Vitest
- `npm run lint` - Run ESLint
- `npm run type` - Generate TypeScript declarations
- `npm run doc` - Generate JSDoc documentation

## 🛠️ Tech Stack

### Core Technologies

<img height="32" width="32" src="https://cdn.simpleicons.org/react" alt="react"/> <img height="32" width="32" src="https://cdn.simpleicons.org/typescript" alt="typescript"/> <img height="32" width="32" src="https://cdn.simpleicons.org/javascript" alt="javascript"/> <img height="32" width="32" src="https://cdn.simpleicons.org/vite" alt="vite"/>

**React 19** • **TypeScript 5.7** • **Vite 6** • **JavaScript ES2024**

### UI & Styling

<img height="32" width="32" src="https://cdn.simpleicons.org/antdesign" alt="ant design"/> <img height="32" width="32" src="https://cdn.simpleicons.org/sass" alt="sass"/>

**Ant Design 5.23** • **SCSS Modules** • **CSS-in-JS**

### State Management & Routing

<img height="32" width="32" src="https://cdn.simpleicons.org/redux" alt="redux"/> <img height="32" width="32" src="https://cdn.simpleicons.org/reactrouter" alt="react-router"/>

**Redux Toolkit** • **React Router v6**

### Additional Libraries

<img height="32" width="32" src="https://cdn.simpleicons.org/axios" alt="axios"/> <img height="32" width="32" src="https://cdn.simpleicons.org/i18next" alt="i18next"/>

**Axios** • **i18next** • **Day.js** • **Pino Logger**

### Development Tools

<img height="32" width="32" src="https://cdn.simpleicons.org/eslint" alt="eslint"/> <img height="32" width="32" src="https://cdn.simpleicons.org/prettier" alt="prettier"/> <img height="32" width="32" src="https://cdn.simpleicons.org/vitest" alt="vitest"/> <img height="32" width="32" src="https://cdn.simpleicons.org/containerd/aaaaaa" alt="devcontainer"/>

**ESLint** • **Prettier** • **Vitest** • **Dev Containers** • **JSDoc**

## 📁 Project Structure

```
src/
├── assets/                          # Static assets (icons, images)
│   └── Icons/
│       └── CustomIcons.jsx
├── components/                      # Atomic Design Pattern
│   ├── molecules/                   # Simple UI combinations
│   │   └── LanguageSwitch/
│   ├── organisms/                   # Complex UI components
│   │   └── Common/
│   │       ├── LoginForm/
│   │       ├── Result/
│   │       └── RootErrorBoundary/
│   └── templates/                   # Page layouts
│       ├── BasicLayout/
│       ├── ExactlyCenter/
│       └── MinimalLayout/
├── config/                          # App configuration
│   ├── i18n/                        # Internationalization
│   │   ├── en/translation.json
│   │   └── ko/translation.json
│   ├── MenuItems.jsx                # Navigation menu config
│   └── Router.jsx                   # Route definitions
├── context/                         # React Context providers
│   └── Logger/
│       ├── components/LoggerProvider.jsx
│       └── hooks/useLogger.jsx
├── features/                        # Redux slices & features
│   └── antd/
│       ├── ThemeChangeSwitch/
│       └── antdSlice.jsx
├── lib/                            # Library configurations
│   ├── components/WebVitals.jsx
│   ├── i18nextConfig.jsx
│   ├── pinoConfig.jsx
│   ├── storeConfig.jsx
│   └── themeConfig.jsx
├── pages/                          # Page components
│   ├── Homepage/
│   ├── Login/
│   ├── Loading/
│   └── admin/
│       ├── Dashboard/
│       └── Settings/
└── utils/                          # Utility functions
```

## ⚙️ Configuration

### TypeScript/JavaScript Type Checking

Control type checking behavior in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "checkJs": true, // Enable/disable JS type checking
    "allowJs": true, // Allow JS files in TS project
    "strict": true // Strict type checking
  }
}
```

For selective type checking, use JSDoc comments:

- `// @ts-check` - Enable checking for specific files
- `// @ts-nocheck` - Disable checking for specific files

### Routing Configuration

Define your routes in `src/config/Router.jsx`:

```jsx
const Router = [
  {
    path: "/",
    element: <MinimalLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "login", element: <Login /> },
    ],
  },
];
```

### Menu Configuration

Configure navigation menus in `src/config/MenuItems.jsx`:

```jsx
const MenuItems = {
  NORMAL: [{ key: "home", label: <Link to="/">Home</Link>, icon: <HomeOutlined /> }],
  ADMIN: [{ key: "settings", label: "Settings", icon: <SettingOutlined /> }],
};
```

### Theme Configuration

Customize Ant Design theme in `src/lib/themeConfig.jsx`:

```jsx
const themeConfig = {
  themeName: "light", // or "dark"
  designToken: {
    components: {
      Layout: { headerHeight: 64 },
    },
  },
  componentSize: "middle",
};
```

## 🧪 Development & Testing

### Running Tests

```bash
npm test          # Run tests with Vitest
npm run coverage  # Run tests with coverage report
```

### Linting & Formatting

```bash
npm run lint      # Run ESLint
npx prettier --write src/  # Format code
```

## Working

### Documentation Generation

```bash
npm run doc       # Generate JSDoc documentation
npm run type      # Generate TypeScript declarations
```

## 🐛 Troubleshooting

### Common Issues

1. **Yarn PnP Module Resolution Issues**
   Edit `.yarnrc.yml`:

   ```yml
   nodeLinker: node-modules # Change from 'pnp'
   ```

2. **Port Already in Use**
   - Default dev server runs on port 3000
   - Change port in `vite.config.ts` if needed

### Development Tips

- Use Dev Containers for consistent development environment
- Enable JSDoc type checking for better IntelliSense
- Leverage Atomic Design principles for component organization
- Use Redux DevTools for state debugging

## 🚧 Roadmap

- [x] **React 19 Migration** - ✅ Completed
- [x] **Vite 6 Upgrade** - ✅ Completed
- [x] **Ant Design 5.23** - ✅ Completed
- [x] **Vitest Integration** - ✅ Completed
- [ ] **Storybook Integration** - 🔄 In Progress
- [ ] **Cypress E2E Testing** - 📋 Planned
- [ ] **TypeDoc Migration** - 📋 Planned

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/comnori">comnori</a>
</p>

const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-onboarding'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  }
};
export default config;

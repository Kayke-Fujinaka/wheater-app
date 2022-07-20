const ReactDocgenTypescriptPlugin =
  require("react-docgen-typescript-plugin").default;

module.exports = {
  stories: ["../src/components/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-addon-next'
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  plugins: [new ReactDocgenTypescriptPlugin()],
};
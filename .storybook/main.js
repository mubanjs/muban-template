module.exports = {
  'stories': [
    '../examples/src/**/*.stories.mdx',
    '../examples/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/preset-scss',
      options: {
        sassLoaderOptions: {
          additionalData: '@import "/examples/src/style/_global.scss";',
        }
      }
    },
  ],
};

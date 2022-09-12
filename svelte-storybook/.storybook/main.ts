import preprocess from 'svelte-preprocess'
import { type InlineConfig, mergeConfig } from 'vite'

export default {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-svelte-csf',
    'storybook-addon-mock/register',
  ],
  framework: '@storybook/svelte',
  core: {
    builder: '@storybook/builder-vite',
  },
  svelteOptions: {
    preprocess: preprocess({
      typescript: true,
      postcss: { configFilePath: '../postcss.config.cjs' },
      sourceMap: true,
    }),
  },
  async viteFinal(config: InlineConfig) {
    return mergeConfig(config, {
      configFiles: ['../vite.config.ts'],
    })
  },
}

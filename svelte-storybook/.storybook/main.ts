import preprocess from 'svelte-preprocess'
import { type InlineConfig } from 'vite'
import { resolve } from 'node:path'

export default {
  stories: ['../src/**/*.stories.@(js|jsx|mdx|ts|tsx|svelte)'],
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
    config.resolve!.alias = { $lib: resolve('./src/lib') }
    return config
  },
}

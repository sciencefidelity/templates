const { resolve } = require('path');
const { svelte } = require('@sveltejs/vite-plugin-svelte');
const preprocess = require('svelte-preprocess');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf',
		'storybook-addon-mock/register'
	],
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite'
	},
	async viteFinal(config) {
		const { default: viteConfig } = await import('../vite.config.js');

		const svelteIndex = config.plugins.findIndex(({ name }) => name === 'vite-plugin-svelte');

		config.plugins[svelteIndex] = svelte({
			preprocess: preprocess({ postcss: true })
		});

		// customize the Vite config here
		config.resolve.alias = viteConfig.resolve?.alias;

		// return the customized config
		return config;
	}
};

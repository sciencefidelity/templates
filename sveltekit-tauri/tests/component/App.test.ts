import { test, expect } from '@playwright/experimental-ct-svelte';
import App from '$lib/App.svelte';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
	const component = await mount(App);
	await expect(component).toContainText('Svelte + Tauri');
});

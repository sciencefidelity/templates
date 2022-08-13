import { render } from '@testing-library/svelte';
import App from '$lib/App.svelte';

test('shows proper heading when rendered', () => {
	const { getByText } = render(App);
	expect(getByText('Svelte + Tauri')).toBeInTheDocument();
});

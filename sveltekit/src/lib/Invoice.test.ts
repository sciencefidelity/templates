import { render } from '@testing-library/svelte';
import Invoice from './Invoice.svelte';

it('display the given value formatted as a currency', () => {
	const { getByText } = render(Invoice, { value: 123 });
	expect(getByText('£123')).toBeInTheDocument();
});

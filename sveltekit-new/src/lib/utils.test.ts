import { formatCurrency } from './utils';

it('adds the pound sign before the given number', () => {
	const result1 = formatCurrency(1);
	expect(result1).toBe('£1');

	const result2 = formatCurrency(42);
	expect(result2).toBe('£42');
});

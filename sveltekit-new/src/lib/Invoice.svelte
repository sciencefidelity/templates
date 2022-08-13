<script lang="ts">
	import { formatCurrency } from './utils';

	export let value: number;
</script>

<div>{formatCurrency(value)}</div>

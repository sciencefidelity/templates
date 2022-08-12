<script lang="ts">
	import { formatCurrency } from '$lib/utils';

	export let value: number;
</script>

<div>{formatCurrency(value)}</div>

<script lang="ts">
	import '../app.css';
	import Counter from '$lib/Counter.svelte';
	import svelteLogo from '../assets/svelte.svg?url';
</script>

<main>
	<div>
		<a href="https://kit.svelte.dev" target="_blank">
			<img src={svelteLogo} class="logo" alt="Svelte Logo" />
		</a>
	</div>
	<h1>Svelte Kit</h1>

	<div class="card">
		<Counter />
	</div>

	<p class="read-the-docs">Click on the Svelte logo to learn more</p>
</main>

<style>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
	}

	.logo:hover {
		filter: drop-shadow(0 0 2em hsla(15, 100%, 50%, 0.667));
	}
	.read-the-docs {
		color: hsl(0, 0%, 53%);
	}
</style>

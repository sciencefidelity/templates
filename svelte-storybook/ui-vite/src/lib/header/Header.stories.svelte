<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Header from './Header.svelte';
</script>

<Meta
	title="Example/Header"
	component={Header}
	parameters={{
		layout: 'fullscreen'
	}}
	argTypes={{
		onLogin: { action: 'onLogin' },
		onLogout: { action: 'onLogout' },
		onCreateAccount: { action: 'onCreateAccount' }
	}}
/>

<Template let:args>
	<Header
		component={Header}
		{...args}
		on:login={args.onLogin}
		on:logout={args.onLogout}
		on:createAccount={args.onCreateAccount}
	/>
</Template>

<Story
	name="LoggedIn"
	args={{
		user: {
			name: 'Jane Doe'
		}
	}}
/>

<Story name="LoggedOut" args={{}} />

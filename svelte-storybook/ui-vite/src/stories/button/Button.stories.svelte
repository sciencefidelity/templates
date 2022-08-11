<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';

	const argTypes = {
		backgroundColor: { control: 'color' },
		label: { control: 'text' },
		onClick: { action: 'onClick' },
		primary: { control: 'boolean' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	};
</script>

<Meta title="Example/Button" component={Button} {argTypes} />

<Template let:args>
	<Button component={Button} {...args} on:click={args.onClick} />
</Template>

<Story name="Primary" args={{ primary: true, label: 'Button' }} />

<Story name="Secondary" args={{ label: 'Button' }} />

<Story name="Large" args={{ size: 'large', label: 'Button' }} />

<Story name="Small" args={{ size: 'small', label: 'Button' }} />

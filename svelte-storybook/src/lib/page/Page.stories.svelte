<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import { within, userEvent } from '@storybook/testing-library'
  import Page from './Page.svelte'
</script>

<Meta
  title="Example/Page"
  component={Page}
  parameters={{
    layout: 'fullscreen',
  }}
/>

<Template let:args>
  <Page component={Page} {...args} />
</Template>

<Story
  name="LoggedIn"
  args={{
    user: {
      name: 'Jane Doe',
    },
  }}
/>

<Story name="LoggedOut" args={{}} />

<Story
  name="LoggedIn"
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loginButton = canvas.getByRole('button', { name: /Log in/i })
    userEvent.click(loginButton)
  }}
/>

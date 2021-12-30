# Front-End Templates

These are templates for quickly starting front-end projects with my favorite tools and frameworks. I was loosing a lot of time setting up a development tools when starting a project with one of these frameworks and found myself hunting through other projects searching for config files that contained those defaults to copy into my projects. Installing extra dependencies for Sass, Jest, TypeScript, Stylelint, etc. that aren't included by default in most frameworks and deleting a lot of boilerplate code that the default template included and I don't need.

I was starting to keep these template files on a computer and copying them instead of launching a new project with the CLI tools. The problem with that is that the dependencies go out of date and I loose time updating them, this repo aims to solve the dependency updating problem with Dependabot. Some site generators in development, such as SvelteKit are changing the boilerplate code that new projects download, so I might have to keep an eye on this, or find a better way to store these templates. It's possible that I could clone the template with my configs, then run the CLI to grab the src files. I'll see how it goes.

## Templates

- Minimal TypeScript template for Node/CLI with Jest testing.
- Minimal vanilla TypeScript starter project with [Snowpack](https://snowpack.dev)
- Minimal vanilla TypeScript starter project with [Vite](https://vitejs.dev)
- [React](https://reactjs.org) starter project with [Snowpack](https://snowpack.dev)
- [React](https://reactjs.org) starter project with [Vite](https://vitejs.dev)
- [Svelte](https://svelte.dev) starter project with [Snowpack](https://snowpack.dev)
- [Svelte](https://svelte.dev) starter project with [Vite](https://vitejs.dev)
- [Vue](https://v3.vuejs.org) starter project with [Snowpack](https://snowpack.dev)
- [Vue](https://v3.vuejs.org) starter project with [Vite](https://vitejs.dev)

## Known Issues

- Title props in vue-router not working in Snowpack project



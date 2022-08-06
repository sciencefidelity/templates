import App from "./App.svelte";
import "modern-normalize";
import "styles/globals.scss";

const app = new App({
  target: document.body as HTMLBodyElement,
});

export default app;

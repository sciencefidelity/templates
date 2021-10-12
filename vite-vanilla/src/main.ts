import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import "./style.scss"

const app = document.querySelector<HTMLDivElement>("#app")

export const add = (a: number, b: number): number => {
  return a + b
}

if (app)
  app.innerHTML = `
  <h1 data-testid="greeting">Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank" data-testid="link">Documentation</a>
`

export default app

import { useState } from "react"

export function App() {
  const [count, countSet] = useState(0)
  const title = "Welcome to Vite.js!"
  return (
    <main className="container">
      <div>
        <h1>{title}</h1>
        <button onClick={() => countSet(count + 1)}>Count is: {count}</button>
      </div>
    </main>
  )
}

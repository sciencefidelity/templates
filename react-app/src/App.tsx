import { useState } from "react"

export function App() {
  const [count, countSet] = useState(0)

  return (
    <div className="container">
      <div>
        <button onClick={() => countSet(count + 1)}>Count is: {count}</button>
        {count > 0 ? (
          <p>
            <code>The count is now: {count}</code>
          </p>
        ) : (
          <p>&nbsp;</p>
        )}
      </div>
    </div>
  )
}

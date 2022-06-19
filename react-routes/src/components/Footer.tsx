import { FC } from "react"

export const Footer: FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

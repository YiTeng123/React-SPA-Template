import { createFileRoute } from '@tanstack/react-router'
export default function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}
export const Route = createFileRoute('/about/')({
  component: About
})

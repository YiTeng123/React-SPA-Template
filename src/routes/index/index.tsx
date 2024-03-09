import { createFileRoute } from '@tanstack/react-router'

export default function HomePage() {
  return (
    <div>
      <h1>Home22</h1>
    </div>
  )
}
export const Route = createFileRoute('/index/')({
  component: HomePage
})

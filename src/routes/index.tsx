import { createFileRoute } from '@tanstack/react-router'
function Index() {
  return <div>index</div>
}

export default Index
export const Route = createFileRoute('/')({
  component: Index
})

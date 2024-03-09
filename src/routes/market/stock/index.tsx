import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/market/stock/')({
    component: () => <div>Hello /market/stock/!</div>
  })
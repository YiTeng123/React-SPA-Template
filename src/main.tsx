import ReactDOM from 'react-dom/client'
import '@/styles/global.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
const router = createRouter({ routeTree })
ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)

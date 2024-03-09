import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Container from '../components/container'
import SideBar from '../components/sider_bar'
import Header from '../components/header'
export const Route = createRootRoute({
  component: () => (
    <>
      <Container>
        <SideBar />
        <Header />
        <Outlet />
      </Container>
      <TanStackRouterDevtools />
    </>
  )
})

import { createFileRoute, Outlet } from '@tanstack/react-router'

function Market() {
  return (
    <div>
      Market
      {/*匹配到 http://localhost:5173/market/stock 才会展示Outlet里面的内容 */}
      <Outlet />
    </div>
  )
}

export default Market
export const Route = createFileRoute('/market/')({
  component: Market
})

import { createFileRoute } from '@tanstack/react-router'
import './blog.scss'
function Blog() {
  return (
    <div className="blog">
      blog<div className="blog__author elli2"> 文章作者</div>
    </div>
  )
}

export default Blog
export const Route = createFileRoute('/blog/')({
  component: Blog
})

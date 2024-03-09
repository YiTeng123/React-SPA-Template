import { Link } from '@tanstack/react-router'
function SideBar() {
  const [state, setState] = useState(0)
  return (
    <>
      <div className="w-32 h-32 bg-blue-500">
        <Link to="/" className={state === 0 ? 'red' : ''} onClick={() => setState(0)}>
          /321323
        </Link>
      </div>
      <div>
        <Link to="/about" className={state === 1 ? 'red' : ''} onClick={() => setState(1)}>
          about
        </Link>
      </div>
      <div>
        <Link to="/blog">blog</Link>
      </div>
      <div>
        <Link to="/market">market</Link>
      </div>
    </>
  )
}

export default SideBar

import { Link } from "react-router"

function Nav() {

  return (
    <nav className="min-h-10 max-h-16 flex items-center justify-center gap-8 bg-sky-300 text-lg">
      <Link to="/home">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  )
}

export default Nav
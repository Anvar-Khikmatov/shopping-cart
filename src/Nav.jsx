import { Link } from "react-router"

function Nav() {

  return (
    <nav>
      <div className="min-h-28 max-h-16 flex flex-col items-center justify-center  bg-yellow-500">
        <div>Velora</div>
        <div>Eyewear</div>
      </div>
      <div className="h-14 bg-black text-white flex gap-8 justify-center items-center">
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  )
}

export default Nav
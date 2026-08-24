import { Link } from "react-router"

function Nav() {

  return (
    <nav>
      <div className="min-h-28 max-h-16 flex flex-col items-center justify-center  bg-yellow-500">
        <h1 className="font-[family-name:var(--font-heading)] text-6xl">Velora</h1>
        <p className="text-xs tracking-[0.5rem]">EYEWEAR</p>
      </div>
      <div className="h-14 bg-black text-white flex gap-8 justify-center items-center">
        <Link to="/home">HOME</Link>
        <Link to="/shop">SHOP</Link>
        <Link to="/cart">CART</Link>
      </div>
    </nav>
  )
}

export default Nav
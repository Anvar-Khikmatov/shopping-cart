import { Link } from "react-router"

function Nav() {

  return ( 
    <>
      <header>
        <div className=" min-h-28  flex flex-col items-center justify-center  bg-yellow-500">
          <h1 className="font-(family-name:--font-heading) text-6xl">Velora</h1>
          <p className="text-xs tracking-[0.5rem]">EYEWEAR</p>
        </div>
      </header>
      <nav className="sticky top-0 z-50 h-14 bg-black text-white flex gap-8 justify-center items-center">
        <Link to="/home">HOME</Link>
        <Link to="/shop">SHOP</Link>
        <Link to="/cart">CART</Link>
      </nav>
    </>
  )
}

export default Nav
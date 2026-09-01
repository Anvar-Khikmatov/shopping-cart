import { Link } from "react-router"

function Nav() {

  return ( 
    <>
      <header>
        <div className="w-full h-15 md:h-18 xl:h-22 3xl:h-24 flex flex-col items-center justify-center bg-yellow-500">
          <h1 className="font-(family-name:--font-heading) text-2xl xl:text-5xl 3xl:text-7xl tracking-[0.2rem]">Velora</h1>
          <p className="text-[0.5rem] xl:text-xs tracking-[0.2rem] xl:tracking-[0.5rem]">EYEWEAR</p>
        </div>
      </header>
      <nav className=" h-8 md:h-10 xl:h-12 3xl:h-14 bg-black text-white text-[0.5rem] md:text-xs lg:text-sm 3xl:text-base flex gap-4 2xl:gap-6 justify-center items-center">
        <Link to="/home">HOME</Link>
        <Link to="/shop">SHOP</Link>
        <Link to="/cart">CART</Link>
      </nav>
    </>
  )
}

export default Nav
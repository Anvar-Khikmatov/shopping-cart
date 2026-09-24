import { Link } from "react-router"
import { FaOpencart } from "react-icons/fa";


function Nav() {

  return ( 
    <>
      <header>
        <div className="relative w-full h-15 md:h-18 xl:h-22 3xl:h-24 flex flex-col items-center justify-center bg-yellow-500">
          <h1 className="font-(family-name:--font-heading) text-3xl font-semibold xl:text-5xl 3xl:text-7xl tracking-[0.2rem]">Velora</h1>
          <p className="text-[0.6rem] xl:text-xs tracking-[0.2rem] xl:tracking-[0.5rem]">EYEWEAR</p>
          <Link to="/cart">
            <button className="absolute right-6 lg:right-11 top-1/2 -translate-y-1/2 text-lg lg:text-3xl cursor-pointer"> <FaOpencart /> </button>
          </Link>
        </div>
      </header>
      <nav className=" h-10 lg:h-12 3xl:h-14 bg-black text-white text-xs lg:text-sm 3xl:text-base flex gap-4 2xl:gap-6 justify-center items-center  ">
        <Link className="transition-colors duration-200 ease-in-out hover:text-amber-500" to="/home">HOME</Link>
        <Link className="transition-colors duration-200 ease-in-out hover:text-amber-500" to="/collection">COLLECTION</Link>
        <Link className="transition-colors duration-200 ease-in-out hover:text-amber-500" to="/cart">CART</Link>
      </nav>
    </>
  )
}

export default Nav
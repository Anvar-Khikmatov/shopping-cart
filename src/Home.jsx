import { Link, useNavigate } from 'react-router'
import img from './assets/img.jpg'

function Home() {

  const navigate = useNavigate()

  function handleShop() {
    navigate('/shop');
  }

  return (
    <div className=" min-h-screen mx-40 my-16  flex flex-row">

      <div className="flex flex-1  flex-col justify-center gap-8">
        <p className='bg-amber-200 min-w-fit w-50 h-10 flex items-center justify-center rounded-3xl'>New Collection · 2026</p>
        <h1 className="text-5xl">Discover Your Style</h1>
        <p>Curated essentials and statement pieces for the modern wardrobe. Quality craftsmanship, timeless design. find pieces that feel unmistakably yours.</p>
        <button className="border w-fit p-4 rounded-full bg-blue-950 text-white cursor-pointer" onClick={handleShop}>Shop Now</button>
        <p>Free shipping on orders over $50</p>
      </div>

      <div className="flex flex-1">
        <img className="w-full h-full rounded-2xl" src={img} alt="" />
      </div>
    </div>
  )
}

export default Home
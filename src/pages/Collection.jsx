import { useState, useEffect } from 'react'
import { Link } from 'react-router'


function Collection() {

const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)


useEffect(()=> {
  async function fetchData() {
    try {
      const response = await fetch("https://dummyjson.com/products/category/sunglasses")
      if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const data = await response.json()
      setData(data)
      setLoading(false)
    } catch(error) {
      console.error("Fetch failed: ", error.message)
      setError(error.message)
      setLoading(false)
    }
  }
  fetchData()
},[])




  return (
    <>
      <section className="flex flex-col justify-center items-center py-12 xl:py-16 px-(--section-content-px)">
        <div className='flex flex-col  gap-2 xl:gap-4 justify-center items-center xl:pt-6 pb-6 xl:pb-14'>
          <p className='discover text-[0.6rem] xl:text-xs tracking-[0.3rem] xl:tracking-[0.5rem]'> COLLECTION</p>
          <h2 className='font-(family-name:--font-heading) text-2xl md:text-3xl xl:text-5xl'>Premium Eyewear</h2>
        </div>

        <div className='max-w-400 grid grid-col md:grid-cols-2 xl:grid-cols-5 gap-8'>
          {!loading ? null  : Array.from({length: 5}).map((_, i) => (
            <div key={i} className='flex justify-center items-center xl:w-65 xl:h-65 xl:px-4 xl:rounded-2xl bg-black/5 animate-pulse'></div>
          ))}
          {(!data) ? null : data.products.map((item, i) => (
            <div key={item.id} className='flex flex-col rounded xl:rounded-t-2xl'>
              <div className='overflow-hidden rounded-2xl group relative'>
                <Link to={`/collection/${item.id}`}>
                  <img 
                    src={item.images[0]} 
                    alt={item.title}
                    className="bg-black/6 w-full cursor-pointer opacity-0 transition-[opacity, transform] duration-400 ease group-hover:scale-107"
                    onLoad={(e) => e.target.classList.replace('opacity-0', 'opacity-100')}
                  />
                  <div className='absolute cursor-pointer rounded bottom-7 xl:bottom-3 left-1/2 -translate-1/2 bg-black text-white text-[0.50rem] md:text-xs p-2 tracking-wide transition-all duration-300 ease opacity-100 lg:opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'>
                    VIEW DETAILS
                  </div>
                </Link>

              </div>
              <div className='flex flex-1 flex-col items-center justify-center'>
                <div className='xl:text-lg font-semibold font-(family-name:--font-heading)'>{item.title}</div>
                <div className='font-light text-sm xl:text-base'>{item.price}$</div>
              </div>
            </div>
          )) }
        </div>
      </section>

    </>
  )
}

export default Collection
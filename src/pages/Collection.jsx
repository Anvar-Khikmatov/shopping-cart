import { useState, useEffect } from 'react'



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
      console.log("dat",data)
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



  // if (loading) return (
  //   <div className="flex flex-wrap gap-4 px-10">
  //     {Array.from({ length: 5}).map((_, i) => (
  //       <div key={i} className="flex justify-center items-center xl:w-65 xl:h-65 xl:px-4 xl:rounded-2xl bg-black/5 animate-pulse" />
  //     ))}
  //   </div>
  // )

  // if (error) return <div>Something went wrong. Try again.</div>



  return (
    <>
      <section className="flex flex-col py-12 xl:py-16 px-(--section-content-px)">
        <div className='flex flex-col  gap-2 xl:gap-4 justify-center items-center xl:pt-6 pb-6 xl:pb-14'>
          <p className='discover text-[0.6rem] xl:text-xs tracking-[0.3rem] xl:tracking-[0.5rem]'> COLLECTION</p>
          <h2 className='font-(family-name:--font-heading) text-2xl md:text-3xl xl:text-5xl'>Premium Eyewear</h2>
        </div>

        <div className='flex flex-wrap  justify-around xl:gap-y-6'>
          {!loading ? null  : Array.from({length: 5}).map((_, i) => (
            <div key={i} className='flex justify-center items-center xl:w-65 xl:h-65 xl:px-4 xl:rounded-2xl bg-black/5 animate-pulse'></div>
          ))}
          {(!data) ? null : data.products.map((item, i) => (
            <div key={item.id} className='flex flex-col items-center xl:w-65 xl:h-85 xl:rounded-t-2xl '>
              <img 
                src={item.images[0]} 
                alt={item.title}
                className="xl:h-65 bg-black/6 xl:rounded-2xl opacity-0 transition-opacity duration-400 onload"
                onLoad={(e) => e.target.classList.replace('opacity-0', 'opacity-100')}
                />
                <div className='flex flex-1 flex-col items-center justify-center'>
                  <div className='xl:text-lg font-semibold font-(family-name:--font-heading)'> {item.title} </div>
                  <div className='font-light'> {item.price}$ </div>
                </div>
            </div>
          )) }
        </div>
      </section>

    </>
  )
}

export default Collection
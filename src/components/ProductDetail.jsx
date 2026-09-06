import { useState, useEffect } from 'react'
import { useParams } from 'react-router'


function ProductDetail() {

  const [product, setProduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        if(!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`)
        }
        const data = await response.json()
        setProduct(data)

      } catch(error) {
        console.error("Fetch process: ", error.message)
      }
    }
    fetchProduct()
  }, [])
  
  
  return (
    <section className='flex justify-center items-center py-12 xl:py-16 px-(--section-mobile-px) xl:px-(--section-content-px)'>
      {!product ? null : 
        <div className='container max-w-400 grid grid-cols md:grid-cols-2 justify-center items-center  gap-6'>
          <div className='relative bg-black/5 w-full h-70 lg:h-110 xl:h-150 overflow-hidden'>
            <img 
              src={product.images[0]} 
              alt={product.title} 
              className='w-full h-full object-cover xl:object-[center_180%] scale-90' />
            <div className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-amber-400 w-fit flex gap-4'>
              {product.images.map((item, i) => (
                <button 
                  key={`img-indicator-${i}`}
                  className='border h-27 w-27 cursor-pointer z-10'    
                >
                  <img src={item} />
                </button>
              ))}

              {/* <div className='border h-27 w-27'></div>
              <div className='border h-27 w-27'></div>
              <div className='border h-27 w-27'></div> */}
            </div>
          </div>

          <div className='flex flex-col justify-center'>
            <div>subheading</div>
            <div>title</div>
            <div>description</div>
            <div>price</div>
            <div>buttons</div>
            <div>add cart</div>
          </div>
        </div>
        
      } 
          
    </section>
  )
}

export default ProductDetail
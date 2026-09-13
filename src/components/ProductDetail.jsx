import { useState, useEffect } from 'react'
import { data, useParams } from 'react-router'


function ProductDetail() {

  const [product, setProduct] = useState(null)
  const [currentImg, setCurrentImg] = useState(null)
  const { id } = useParams()
  const imgCarouselClass = " h-27 w-27 cursor-pointer bg-black/8 rounded transition-all duration-300  border hover:border-amber-500"

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        if(!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`)
        }
        const data = await response.json()
        setProduct(data)
        setCurrentImg(data.images[0])

      } catch(error) {
        console.error("Fetch process: ", error.message)
      }
    }
    fetchProduct()
  }, [])

  
  const handleImgClick = (i) => {
    setCurrentImg(product.images[i])
  }
  
  
  return (
    <section className='flex justify-center items-center py-12 xl:py-16 px-(--section-mobile-px) xl:px-(--section-content-px)'>
      {!product ? null : 
        <div className='container max-w-400 grid grid-cols-1 md:grid-cols-2 justify-center items-center  gap-6'>

          <div className='flex flex-col items-center gap-4'>
            <div className='relative bg-black/5 w-full h-70 lg:h-110 xl:h-150 rounded xl:rounded-2xl overflow-hidden'>
              <img 
                src={currentImg} 
                alt={product.title} 
                className='w-full h-full object-cover xl:object-[center_180%] scale-80' />

              <div className='hidden md:flex absolute md:bottom-6 md:left-1/2 -translate-x-1/2  w-fit gap-4'>
                {product.images.map((item, i) => (
                  <button 
                    key={`img-indicator-${i}`}
                    className={`${imgCarouselClass} ${product.images[i] === currentImg ? 'border'  : 'border-transparent' }`}
                    onClick={() => handleImgClick(i)}>
                    <img src={item} />
                  </button>
                ))}
              </div>
            </div>

            <div className=' flex justify-center items-center w-fit gap-4 md:hidden'>
                {product.images.map((item, i) => (
                  <button 
                    key={`img-indicator-${i}`}
                    className={`${imgCarouselClass} ${product.images[i] === currentImg ? 'border'  : 'border-transparent' }`}
                    onClick={() => handleImgClick(i)}>
                    <img src={item} />
                  </button>
                ))}
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
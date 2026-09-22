import { useState, useEffect, useRef } from 'react'
import { data, useParams } from 'react-router'


function ProductDetail() {

  const [product, setProduct] = useState(null)
  const [currentImg, setCurrentImg] = useState(null)
  const { id } = useParams()
  const infoRef = useRef(null)
  const imgCarouselClass = "h-23 w-23 lg:h-27 lg:w-27 cursor-pointer bg-black/8  rounded transition-all duration-300  border hover:border-amber-500"

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


  useEffect(() => {
    if(infoRef.current) {
      infoRef.current.classList.add('slide-right')
    }
  }, [product])
  
  const handleImgClick = (i) => {
    setCurrentImg(product.images[i])
  }
  
  
  return (
    <section className='flex justify-center items-center py-12 xl:py-16 px-(--section-mobile-px) xl:px-(--section-content-px)'>
      {!product ? null : 
        <div className='container max-w-400 grid grid-cols-1 md:grid-cols-2 justify-center items-center  gap-16'>

          <div className='flex flex-col w-full md:flex-row  items-center gap-4'>
            <div className='relative bg-black/5 border border-black/10 w-full h-60  lg:h-110 xl:h-150 rounded xl:rounded-2xl overflow-hidden'>
              <img 
                src={currentImg} 
                alt={product.title} 
                className='w-full h-full object-cover  lg:object-[center_180%] scale-80' />

              <div className='hidden lg:flex absolute md:bottom-6 md:left-1/2 -translate-x-1/2  w-fit gap-4'>
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

            <div className='lg:hidden flex md:flex-col  w-full md:w-fit justify-center items-center  gap-4 '>
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

          <div ref={infoRef} className='w-100 flex flex-col justify-center gap-3 lg:gap-6'>
            <p className='text-[0.6rem] xl:text-xs tracking-[0.2rem] xl:tracking-[0.3rem]'> PREMIUM COLLECTION</p>
            <h2 className='font-(family-name:--font-heading) text-3xl md:text-4xl xl:text-5xl font-semibold'> {product.title} </h2>
            <p className='text-gray-500'> {product.description} </p>
            <p className='text-2xl font-semibold'> {product.price}$ </p>
            <div className='flex h-8 gap-4'>
                <button className='h-full w-8 text-white bg-black'>-</button>
                <div className='h-full flex justify-center items-center font-semibold text-2xl'>2</div>
                <button className='h-full w-8 text-white bg-black'>+</button>
            </div>
            <button className='w-27.5 h-8 bg-black text-white'>Add</button>
          </div>
        </div>
        
      } 
          
    </section>
  )
}

export default ProductDetail
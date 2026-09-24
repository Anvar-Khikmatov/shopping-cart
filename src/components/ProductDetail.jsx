import { useState, useEffect, useRef } from 'react'
import { data, useParams } from 'react-router'


function ProductDetail() {

  const [product, setProduct] = useState(null)
  const [currentImg, setCurrentImg] = useState(null)
  const [orderCount, setOrderCount] = useState(0)
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
  
  const decreaseOrder = () => {
    orderCount <= 0 ? setOrderCount(0) : setOrderCount(prev => prev - 1)
  }

  const increaseOrder = () => {
    setOrderCount(prev => prev + 1)
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

          <div ref={infoRef} className='w-full lg:w-100 flex flex-col justify-center gap-3 lg:gap-6'>
            <p className='text-[0.6rem] xl:text-xs tracking-[0.2rem] xl:tracking-[0.3rem]'> PREMIUM COLLECTION</p>
            <h2 className='font-(family-name:--font-heading) text-3xl md:text-4xl xl:text-5xl font-semibold'> {product.title} </h2>
            <p className='text-gray-500 text-sm lg:text-base'> {product.description} </p>
            <p className='text-lg lg:text-2xl font-semibold'> {product.price}$ </p>
            <div className='flex h-8 gap-4'>
                <button onClick={decreaseOrder} className='h-full w-8 cursor-pointer text-white bg-black transition-[background-color,color,translate] duration-300 ease-in-out hover:bg-amber-500 hover:text-black hover:-translate-y-0.5'>-</button>
                <div className='h-full flex justify-center items-center font-semibold text-lg lg:text-2xl'> {orderCount} </div>
                <button onClick={increaseOrder} className='h-full w-8 cursor-pointer text-white bg-black transition-[background-color,color,translate] duration-300 ease-in-out hover:bg-amber-500 hover:text-black hover:-translate-y-0.5'>+</button>
            </div>
            <button className='w-27.5 h-8 cursor-pointer bg-black text-white transition-[background-color,color,translate] duration-300 ease-in-out hover:bg-amber-500 hover:text-black hover:-translate-y-0.5'>Add</button>
          </div>
        </div>
        
      } 
          
    </section>
  )
}

export default ProductDetail
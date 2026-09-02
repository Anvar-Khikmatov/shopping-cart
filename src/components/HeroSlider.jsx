import { useEffect, useState } from 'react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

function HeroSlider({homepageContent}) {

  const [current, setCurrent] = useState(0)  
  const [userInteracted, setUserInteracted] = useState(false) 
  const activeSlide = homepageContent.heroSlides[current]


  const handlePrevBtn = () => {
    setCurrent(prev => prev == 0 ? homepageContent.heroSlides.length-1 : prev - 1) 
    setUserInteracted(prev => !prev)
  }

  const handleNextBtn = () => {
    setCurrent(prev => prev >= homepageContent.heroSlides.length-1 ? 0 : prev + 1)  
    setUserInteracted(prev => !prev)
  }

  const handleIndicatorClick = (id) => {
    setCurrent(id)
    setUserInteracted(prev => !prev)
  }

  
  useEffect(()=> {
    let intervalId = setInterval(() => {
      setCurrent(prev => prev >= homepageContent.heroSlides.length-1 ? 0 : prev + 1)  
    }, 6000);

    return () => clearInterval(intervalId);
  },[userInteracted])


  return (
    <section id="hero" className='heroSlides relative h-75 md:h-[58dvh] xl:h-[70vh] flex items-center overflow-hidden bg-[#949087]'>
      <img key={current} className="fade-in absolute inset-0 w-full h-full object-cover" src={activeSlide.image} alt={activeSlide.alt} />
      <div className='text-white h-8 xl:h-16 w-full  z-1 flex justify-between items-center px-4 md:px-6 xl:px-8 3xl:px-10'>
        <button className='flex justify-center items-center h-8 w-8 xl:h-16 xl:w-16 border rounded-full cursor-pointer backdrop-blur-xm bg-white/10 group hover:bg-amber-50 transition ease-in-out duration-300' onClick={handlePrevBtn}>  <GrPrevious className='h-4 2xl:h-6 w-4 2xl:w-6  group-hover:text-black' />  </button>
        <button className='flex justify-center items-center h-8 w-8 xl:h-16 xl:w-16 border rounded-full cursor-pointer backdrop-blur-xm bg-white/10 group hover:bg-amber-50 transition ease-in-out duration-300' onClick={handleNextBtn}>  <GrNext className='h-4 2xl:h-6 w-4 2xl:w-6 group-hover:text-black' />  </button>
      </div>
      <div key={`imgDescription_${current}`} className='slide-up  absolute  flex flex-col gap-1 md:gap-2 2xl:gap-4 text-white drop-shadow-lg left-4 md:left-6 xl:left-30 3xl:left-35 top-1/2 translate-y-8 xl:-translate-y-3  z-2'>
        <p className='text-[0.50rem]  xl:text-xs border w-fit p-[0.10rem] xl:p-1 px-2 xl:px-4 tracking-[0.1rem] xl:tracking-[0.5rem] rounded-full'>NEW COLLECTION</p>
        <h1 className='font-(family-name:--font-heading) text-[1.35rem] md:text-3xl xl:text-6xl '>{activeSlide.title}</h1>
        <p className=' w-60 xl:w-100 text-xs xl:text-lg'> {activeSlide.description} </p>
      </div>
      <div className='absolute h-2 xl:h-4 w-fit bottom-2 xl:bottom-4 left-1/2 -translate-x-1/2 flex justify-center items-center gap-2 xl:gap-3'>
        {homepageContent.heroSlides.map((_, i) => ( 
          <button          
            key={`indicator-${i}`}
            className={`carousel-indicators ${current === i ? "active carousel-grow" : ""}`}
            onClick={() => handleIndicatorClick(i)}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider
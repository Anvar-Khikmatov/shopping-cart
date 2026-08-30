import { useEffect, useState } from 'react';
import { homepageContent } from '../contentData.js'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

function HeroSlider() {

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
    }, 7000);

    return () => clearInterval(intervalId);
  },[userInteracted])

console.log(homepageContent);

  return (
    <section id="hero" className='flex items-center overflow-hidden bg-[#949087] relative h-[40vh] md:h-[55vh] lg:h-[68vh] '>
      <img key={current} className="fade-in absolute inset-0 w-full h-full object-cover" src={activeSlide.image} alt={activeSlide.alt} />
      <div className='text-white h-16 w-full  z-1 flex justify-between items-center px-8 '>
        <button className='flex justify-center items-center h-12 w-12 border rounded-full cursor-pointer backdrop-blur-xm bg-white/10 group hover:bg-amber-50 transition ease-in-out duration-300' onClick={handlePrevBtn}>  <GrPrevious className='h-6 w-6  group-hover:text-black' />  </button>
        <button className='flex justify-center items-center h-12 w-12 border rounded-full cursor-pointer backdrop-blur-xm bg-white/10 group hover:bg-amber-50 transition ease-in-out duration-300' onClick={handleNextBtn}>  <GrNext className='h-6 w-6 group-hover:text-black' />  </button>
      </div>
      <div key={`imgDescription_${current}`} className='slide-up  absolute  flex flex-col gap-4 text-white drop-shadow-lg left-30  top-1/2 -translate-y-3 z-2'>
        <p className='text-xs border w-fit p-1 px-4 rounded-full tracking-[0.5rem]'>NEW COLLECTION</p>
        <h1 className='font-(family-name:--font-heading) text-6xl '>{activeSlide.title}</h1>
        <p className='w-100 text-lg'> {activeSlide.description} </p>
      </div>
      <div className='absolute h-4 w-fit bottom-4 left-1/2 -translate-x-1/2 flex justify-center items-center gap-3'>
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
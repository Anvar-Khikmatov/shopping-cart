import { Link, useNavigate } from 'react-router'
import { useEffect, useState } from 'react';
import heroImg1 from './assets/1.webp'
import heroImg2 from './assets/2.webp'
import heroImg3 from './assets/3.webp'
import heroImg4 from './assets/4.webp'
import heroImg5 from './assets/5.webp'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


function Home() {

const [current, setCurrent] = useState(0)  
const [userInteracted, setUserInteracted] = useState(false) 
const heroImgCollection = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5]
const heroImgHeader = ["Timeless Elegance", "See Beyond Trends", "Made to Stand Out", "Modern Classics", "Refined Vision"]
const heroImgText = [
  "Crafted for those who appreciate refined design and everyday sophistication.",
  "Discover handcrafted frames that combine comfort, quality, and lasting style.",
  "Premium eyewear designed to express confidence with every glance.",
  "Contemporary frames inspired by timeless silhouettes and effortless style.",
  "Experience eyewear where minimalist design meets exceptional craftsmanship and everyday comfort."  
]

const handlePrevBtn = () => {
  setCurrent(prev => prev == 0 ? heroImgCollection.length-1 : prev - 1) 
  setUserInteracted(prev => !prev)
}

const handleNextBtn = () => {
  setCurrent(prev => prev >= heroImgCollection.length-1 ? 0 : prev + 1)  
  setUserInteracted(prev => !prev)
}


useEffect(()=> {
  let intervalId = setInterval(() => {
    setCurrent(prev => prev >= heroImgCollection.length-1 ? 0 : prev + 1)  
  }, 5000);

  return () => clearInterval(intervalId);
},[userInteracted]) 


  return (
    <section id="hero" className='flex items-center relative h-[40vh] md:h-[55vh] lg:h-[68vh]  bg-amber-950'>
      <img className="absolute inset-0 w-full h-full object-cover" src={heroImgCollection[current]} alt="" />
      <div className='h-16 w-full bg-amber-200 z-10 flex justify-between items-center px-8'>
        <button className='flex justify-center items-center h-16 w-16 border rounded-full cursor-pointer' onClick={handlePrevBtn}>  <GrPrevious className='h-7 w-7 ' />  </button>
        <button className='flex justify-center items-center h-16 w-16 border rounded-full cursor-pointer' onClick={handleNextBtn}>  <GrNext className='h-7 w-7' />  </button>
      </div>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
        <h1 className='text-white text-5xl z-5 bottom-1'>{heroImgHeader[current]}</h1>
        <p className=''></p>
      </div>
    </section>
  )
}

export default Home
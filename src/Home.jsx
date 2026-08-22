import { Link, useNavigate } from 'react-router'
import { useEffect, useState } from 'react';
import heroImg1 from './assets/1.webp'
import heroImg2 from './assets/2.webp'
import heroImg3 from './assets/3.webp'
import heroImg4 from './assets/4.webp'
import heroImg5 from './assets/5.webp'


function Home() {

const [current, setCurrent] = useState(0)  
const heroImgCollection = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5]


useEffect(()=> {
  let intervalId = setInterval(() => {
    
      setCurrent(prev => prev >= heroImgCollection.length-1 ? 0 : prev + 1)  
    
      
  }, 2000);

  return () => clearInterval(intervalId);
},[])



  return (
    <section id="hero" className='relative h-[40vh] md:h-[55vh] lg:h-[68vh]   bg-amber-950'>
      <div className=''>
        <img className="absolute inset-0 w-full h-full object-cover" src={heroImgCollection[current]} alt="" />
      </div>
    </section>
  )
}

export default Home
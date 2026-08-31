import { Link } from 'react-router'
import HeroSlider from '../components/HeroSlider.jsx'
import WhySection from '../components/WhySection.jsx'
import Footer from '../components/Footer.jsx'
import { homepageContent, whySectionContent } from '../contentData.jsx'
import man from '../assets/maleSection.jpg'
import woman from '../assets/womanSection.jpg'
import sunglasses from '../assets/glass_banner.jpg'
import { FaArrowRight } from "react-icons/fa6";




function Home() {

  return (
    <>
      <HeroSlider homepageContent={homepageContent} />

      {/* Category section */}
      <section className='flex flex-col py-16'>
        <div className='flex flex-col gap-4 justify-center items-center pt-6 pb-14'>
          <p className='discover text-xs tracking-[0.5rem]'> DISCOVER</p>
          <h2 className='font-(family-name:--font-heading) text-5xl'>Shop by Category</h2>
        </div> 

        <div className="grid grid-cols-2 grid-rows-[24rem_18rem]  gap-6 px-(--section-content-px)">
          {/* Men Card */}
          <Link to="/shop" className="group relative rounded-3xl overflow-hidden border border-[#a8a7a2]  transition-[transform, shadow] ease-in-out duration-300 hover:-translate-y-2  hover:shadow-xl ">
            <img src={man} alt="Men's collection" className="w-full h-full object-cover transition-transform ease-in-out duration-300 group-hover:scale-105" />
            <div className="absolute bottom-5 left-5 flex flex-col text-black">
              <span className="text-3xl font-(family-name:--font-heading)">Men</span>
              <span className="flex items-center gap-2 text-sm">
                Explore <FaArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Women Card */}
          <Link to="/shop" className="group relative rounded-3xl overflow-hidden border border-[#a8a7a2]  transition-[transform, shadow] ease-in-out duration-300 hover:-translate-y-2  hover:shadow-xl ">
            <img src={woman} alt="Men's collection" className="w-full h-full object-cover transition-transform ease-in-out duration-300 group-hover:scale-105" />
            <div className="absolute bottom-5 left-5 flex flex-col text-black">
              <span className="text-3xl font-(family-name:--font-heading)">Women</span>
              <span className="flex items-center gap-2 text-sm">
                Explore <FaArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Sunglasses Card */}
          <Link to="/shop" className="col-span-2 group relative rounded-3xl overflow-hidden border border-[#a8a7a2]  transition-[transform, shadow] ease-in-out duration-300 hover:-translate-y-2  hover:shadow-xl ">
            <img src={sunglasses} alt="Men's collection" className="w-full h-full object-cover transition-transform ease-in-out duration-300 group-hover:scale-105" />
            <div className="absolute bottom-5 left-5 flex flex-col text-black">
              <span className="text-3xl font-(family-name:--font-heading)">Sunglasses</span>
              <span className="flex items-center gap-2 text-sm">
                Explore <FaArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <WhySection whySectionContent={whySectionContent} />
      <Footer />
    </>
  )
}

export default Home
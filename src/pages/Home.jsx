import { Link, useNavigate } from 'react-router'
import HeroSlider from '../components/HeroSlider'



function Home() {

  return (
    <>
      <HeroSlider/>
      <section className='flex flex-col'>
        <div className='flex flex-col gap-4 justify-center items-center pt-16 pb-12'>
          <p className='discover text-xs tracking-[0.5rem]'> DISCOVER</p>
          <h2 className='font-(family-name:--font-heading) text-6xl'>Shop by Category</h2>
        </div> 

        <div class="h-120 bg-amber-100 grid gap-4  grid-cols-2 px-14">
          <div className='bg-pink-200'>col 1</div>
          <div className='bg-pink-200'>col 2</div>
          <div class="col-span-2 bg-pink-200">full width</div>
        </div>

      
      </section>
    </>
  )
}

export default Home
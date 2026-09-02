function WhySection({whySectionContent}) {

  return (    
    <>
      <section  className=' flex flex-col py-8 xl:py-16 bg-amber-50' >
        <div className='flex flex-col gap-4 justify-center items-center pt-4 xl:pt-6 pb-10 xl:pb-14'>
          <p className='discover text-[0.6rem] xl:text-xs tracking-[0.3rem] xl:tracking-[0.5rem]'> {whySectionContent.subheading}</p>
          <h2 className='w-[20ch] text-center font-(family-name:--font-heading) text-2xl md:text-3xl xl:text-5xl'> {whySectionContent.heading} </h2>
        </div>

        <div className="w-full flex flex-wrap justify-center items-center gap-6 px-(--section-mobile-px)">
          {whySectionContent.descriptionBox.map((box, i) => (
            <div key={`box-${i}`} className="bg-white h-45 xl:h-55 w-70 xl:w-80 rounded-xl xl:rounded-3xl p-6 flex flex-col justify-center items-center gap-4 shadow-[0_0_25px_1px_rgba(22,21,21,0.1)] transition-shadow duration-300 ease-in-out hover:shadow-[0_0_35px_1px_rgba(22,21,21,0.2)]">
              <div className="self-start text-xl xl:text-2xl text-amber-500"> {box.icon} </div>
              <h3 className="font-(family-name:--font-heading) text-lg xl:text-xl"> {box.title} </h3>
              <div className="text-center text-sm xl:text-base text-[grey]"> {box.description} </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default WhySection
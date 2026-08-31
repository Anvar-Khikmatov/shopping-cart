function WhySection({whySectionContent}) {

  return (
    <>
      <section  className='h-fit flex flex-col py-16 bg-amber-50' >
        <div className='flex flex-col gap-4 justify-center items-center pt-6 pb-14'>
          <p className='discover text-xs tracking-[0.5rem]'> {whySectionContent.subheading}</p>
          <h2 className='w-[20ch] text-center leading-18 font-(family-name:--font-heading) text-5xl'> {whySectionContent.heading} </h2>
        </div>

        <div className=" h-60 w-full flex flex-wrap justify-between items-center gap-6 px-(--section-content-px)">
          {whySectionContent.descriptionBox.map((box, i) => (
            <div key={`box-${i}`} className="bg-white h-55 w-80 rounded-3xl p-6 flex flex-col justify-center items-center gap-4 shadow-[0_0_25px_1px_rgba(22,21,21,0.1)] transition-shadow duration-300 ease-in-out hover:shadow-[0_0_35px_1px_rgba(22,21,21,0.2)]">
              <div className="self-start text-3xl text-amber-500"> {box.icon} </div>
              <h3 className="font-(family-name:--font-heading) text-xl"> {box.title} </h3>
              <div className="text-center text-base text-[grey]"> {box.description} </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default WhySection
function Footer() {

  return (
    <>
      <footer className="h-[85vh] bg-black flex flex-col">
        <div className="flex-1 flex justify-between py-16 px-(--section-content-px) bg-linear-to-t from-amber-200/10 via-black/90  to-transparent" >
          <div className="flex flex-col w-fit h-full gap-1 border border-white">
            <p className="font-(family-name:--font-heading) text-amber-500 mb-4 tracking-widest text-lg">BRAND</p>
            <a href="#" className="footer-links"> About Velora</a>
            <a href="#" className="footer-links"> Our story</a>
            <a href="#" className="footer-links"> Sustainability</a>
          </div>
          <div className="flex flex-col w-fit h-full gap-1 border border-white">
            <p className="font-(family-name:--font-heading) text-amber-500 mb-4 tracking-widest text-lg">Company</p>
            <a href="#" className="footer-links"> Careers</a>
            <a href="#" className="footer-links"> Press</a>
            <a href="#" className="footer-links"> Stores</a>
          </div>
          <div className="flex flex-col w-fit h-full gap-1 border border-white">
            <p className="font-(family-name:--font-heading) text-amber-500 mb-4 tracking-widest text-lg">Help</p>
            <a href="#" className="footer-links"> FAQ</a>
            <a href="#" className="footer-links"> Shipping</a>
            <a href="#" className="footer-links"> Returns</a>
            <a href="#" className="footer-links"> Warranty</a>
          </div>

          <div className="vertical-line"></div>

        </div>
        <div className="h-[20%] border-t border-white/10 "></div>
      </footer>
    </>
  )

}

export default Footer
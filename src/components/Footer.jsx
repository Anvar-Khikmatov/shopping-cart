import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




function Footer() {

  return (
    <>
      <footer className="h-[85vh] bg-black flex flex-col">
        <div className="flex-1 flex justify-between py-16 px-(--section-content-px) bg-linear-to-t from-amber-200/10 via-black/90  to-transparent" >
          {/* Link side */}
          <div className="w-[60%] flex justify-between">
            <div className="flex flex-col w-fit h-full gap-1 ">
              <p className="font-(family-name:--font-heading) text-amber-500 mb-4 tracking-widest text-xl">BRAND</p>
              <a href="#" className="footer-links"> About Velora</a>
              <a href="#" className="footer-links"> Our story</a>
              <a href="#" className="footer-links"> Sustainability</a>
            </div>
            <div className="flex flex-col w-fit h-full gap-1 ">
              <p className="font-(family-name:--font-heading) text-amber-500 mb-4 tracking-widest text-xl">Company</p>
              <a href="#" className="footer-links"> Careers</a>
              <a href="#" className="footer-links"> Press</a>
              <a href="#" className="footer-links"> Stores</a>
            </div>
            <div className="flex flex-col w-fit h-full gap-1 ">
              <p className="font-(family-name:--font-heading) text-amber-500 mb-4 tracking-widest text-xl">Help</p>
              <a href="#" className="footer-links"> FAQ</a>
              <a href="#" className="footer-links"> Shipping</a>
              <a href="#" className="footer-links"> Returns</a>
              <a href="#" className="footer-links"> Warranty</a>
            </div>
            <div></div>
          </div>

          {/* Contact side */}
          <div className="flex-1 pl-14 border border-l-amber-500 ">
            <div className="w-full h-full flex flex-col justify-between gap-2 p-6 border bg-white/8 border-white/30 rounded-2xl">
              <div className="font-(family-name:--font-heading) text-white text-2xl">Ask a Velora Specialist</div>
              <div className="text-white/60">Need help choosing the perfect frame? Our eyewear specialists are here to guide you.</div>
              <div className="flex flex-col w-fit text-white leading-8">
                <div className="footer-contact-links flex items-center gap-3"> <MdEmail className="fill-amber-500" /> <a href="mailto:support@velora.com">Send Email</a> </div>
                <div className="footer-contact-links flex items-center gap-3"> <FaPhoneAlt className="fill-amber-500" /> <a href="tel:support@velora.com">+61 412 345 678</a> </div>
                <div className="footer-contact-links flex items-center gap-3"> <FaLocationDot className="fill-amber-500" /> <a href="#">Melbourne, Australia</a> </div>
              </div>
              <div className="w-full border border-white/30"></div>
              <div className="flex items-center gap-3 text-white/60"> <FaClock className="fill-amber-500" /> Monday - Friday, 9:00 - 17:00 </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="h-[20%] flex flex-col justify-between py-4 items-center border-t border-white/10 ">
          <div className="font-(family-name:--font-heading) text-white text-3xl">Velora</div>
          <div className="w-fit  text-white/60"> <a href="https://github.com/Anvar-Khikmatov" className="flex items-center gap-3 transition-color duration-300 ease-in-out hover:text-amber-500"> <FaGithub /> Developed by Anvar Khikmatov</a> </div>
          <div className="flex  text-white/50 text-xs">
            <div>© 2026 Velora. All rights reserved.</div>
            <div className="dot-seperator"> See the world differently</div>
            <div> Velora™ - Premium Eyewear Concept.</div>
          </div>
        </div>
      </footer>
    </>
  )

}

export default Footer
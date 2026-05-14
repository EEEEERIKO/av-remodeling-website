import { MdMail, MdPhone } from "react-icons/md";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export function SiteFooter() {
const whatsappLink = "https://wa.me/16788864393?text=Hello%20AV%20Remodeling,%20I’m%20interested%20in%20your%20remodeling%20services.%20I’d%20love%20to%20discuss%20my%20project%20and%20get%20more%20information.";
  return (
    <footer className="w-full bg-slate-900 py-16 dark:bg-black">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-12 text-center md:grid-cols-4 md:text-left">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-6 text-lg font-headline font-bold text-slate-50">Av Remodeling</div>
          <p className="mx-auto max-w-[200px] text-xs leading-relaxed tracking-wider text-slate-400 md:mx-0 font-body">
            Defining the intersection of architecture, luxury, and home life for over two decades.
          </p>
        </div>
        <div>
          <h5 className="mb-6 text-xs uppercase tracking-widest text-white font-label">Navigation</h5>
          <ul className="space-y-4 text-xs uppercase tracking-widest font-label">
            <li><a className="text-slate-400 transition-colors duration-300 hover:text-yellow-600" href="/">Home</a></li>
            <li><a className="text-slate-400 transition-colors duration-300 hover:text-yellow-600" href="/gallery">Gallery</a></li>
            <li><a className="text-slate-400 transition-colors duration-300 hover:text-yellow-600" href="/about">About</a></li>
            <li><a className="text-slate-400 transition-colors duration-300 hover:text-yellow-600" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 text-xs uppercase tracking-widest text-white font-label">Legal</h5>
          <ul className="space-y-4 text-xs uppercase tracking-widest font-label">
            <li><a className="text-slate-400 transition-colors duration-300 hover:text-yellow-600" href="#">Privacy Policy</a></li>
            <li><a className="text-slate-400 transition-colors duration-300 hover:text-yellow-600" href="#">Terms of Service</a></li>
            <li><a className="text-slate-400 transition-colors duration-300 hover:text-yellow-600" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 text-xs uppercase tracking-widest text-white font-label">Connect</h5>
          <div className="flex justify-center gap-4 md:justify-start">
            <a className="text-slate-400 transition-colors hover:text-pink-500" href="https://www.instagram.com/avremodelingatl/" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram className="text-2xl" /></a>
            <a className="text-slate-400 transition-colors hover:text-red-600" href="https://www.youtube.com/@avremodelingatl8105/featured" target="_blank" rel="noopener noreferrer" title="YouTube"><FaYoutube className="text-2xl" /></a>
            <a className="text-slate-400 transition-colors hover:text-green-500" href={whatsappLink} target="_blank" rel="noopener noreferrer" title="WhatsApp"><FaWhatsapp className="text-2xl" /></a>
            <a className="text-slate-400 transition-colors hover:text-blue-400" href="mailto:avremodeling37@gmail.com" title="Email"><MdMail className="text-2xl" /></a>
            <a className="text-slate-400 transition-colors hover:text-blue-500" href="tel:+16788864393" title="Phone"><MdPhone className="text-2xl" /></a>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-slate-800 px-12 pt-8 text-center">
        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-label">© 2026 AV REMODELING. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
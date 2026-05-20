import { MdMail, MdPhone } from "react-icons/md";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import TrackableLink from './TrackableLink';

export function SiteFooter() {
const whatsappLink = "https://wa.me/16788864393?text=Hello%20AV%20Remodeling,%20I’m%20interested%20in%20your%20remodeling%20services.%20I’d%20love%20to%20discuss%20my%20project%20and%20get%20more%20information.";
  return (
    <footer className="w-full border-t border-outline-variant/10 bg-surface py-16">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-12 text-center md:grid-cols-4 md:text-left">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-6 text-lg font-headline font-bold text-on-surface">Av Remodeling</div>
          <p className="mx-auto max-w-[200px] text-xs leading-relaxed tracking-wider text-on-surface-variant md:mx-0 font-body">
            Trusted Atlanta remodeling contractors for kitchens, bathrooms, flooring, painting, drywall, concrete, drainage, and exterior home improvements.
          </p>
        </div>
        <div>
          <h5 className="mb-6 text-xs uppercase tracking-widest text-on-surface font-label">Navigation</h5>
          <ul className="space-y-4 text-xs uppercase tracking-widest font-label">
            <li><a className="text-on-surface-variant transition-colors duration-300 hover:text-primary" href="/">Home</a></li>
            <li><a className="text-on-surface-variant transition-colors duration-300 hover:text-primary" href="/gallery">Gallery</a></li>
            <li><a className="text-on-surface-variant transition-colors duration-300 hover:text-primary" href="/about-us">About</a></li>
            <li><a className="text-on-surface-variant transition-colors duration-300 hover:text-primary" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 text-xs uppercase tracking-widest text-on-surface font-label">Legal</h5>
          <ul className="space-y-4 text-xs uppercase tracking-widest font-label">
            <li><a className="text-on-surface-variant transition-colors duration-300 hover:text-primary" href="#">Privacy Policy</a></li>
            <li><a className="text-on-surface-variant transition-colors duration-300 hover:text-primary" href="#">Terms of Service</a></li>
            <li><a className="text-on-surface-variant transition-colors duration-300 hover:text-primary" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 text-xs uppercase tracking-widest text-on-surface font-label">Connect</h5>
          <div className="flex justify-center gap-4 md:justify-start">
            <a className="text-on-surface-variant transition-colors hover:text-primary" href="https://www.instagram.com/avremodelingatl/" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram className="text-2xl" /></a>
            <a className="text-on-surface-variant transition-colors hover:text-primary" href="https://www.youtube.com/@avremodelingatl8105/featured" target="_blank" rel="noopener noreferrer" title="YouTube"><FaYoutube className="text-2xl" /></a>
            <TrackableLink
              className="text-on-surface-variant transition-colors hover:text-primary"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              action="whatsapp"
            >
              <FaWhatsapp className="text-2xl" />
            </TrackableLink>
            <a className="text-on-surface-variant transition-colors hover:text-primary" href="mailto:avremodeling37@gmail.com" title="Email"><MdMail className="text-2xl" /></a>
            <TrackableLink
              className="text-on-surface-variant transition-colors hover:text-primary"
              href="tel:+16788864393"
              title="Phone"
              action="phone"
            >
              <MdPhone className="text-2xl" />
            </TrackableLink>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-outline-variant/10 px-12 pt-8 text-center">
        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label">© 2026 AV REMODELING. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
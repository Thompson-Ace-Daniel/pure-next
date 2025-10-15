import { Facebook, Linkedin, Instagram, Phone, Mail } from "lucide-react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6"

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(210,20%,15%)] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-poppins font-bold text-xl">
                  P
                </span>
              </div>
              <span className="font-poppins font-semibold text-xl">
                Purity Solar Inverter
              </span>
            </div>
            <p className="font-inter text-sm text-white/70 leading-relaxed">
              Leading the renewable energy revolution with innovative solar
              inverter technology for a sustainable future.
            </p>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 font-inter text-sm">
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-products"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-technology"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-testimonials"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">
              Connect With Us
            </h3>
            <div className="flex gap-3 mb-6">
              <a
                href="https://facebook.com/puritysolarinverter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="link-social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:puritysolar.inverter@gmail.com?subject=Inquiry%20about%20Purity%20Solar%20Inverter%20Products&body=Hello%2C%20I%20would%20like%20more%20information%20about%20your%20solar%20inverter%20packages.%20Please%20let%20me%20know%20the%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="link-social-twitter"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/2348034360049?text=Hello%20Purity%20Solar%20Inverter%2C%20I%20am%20interested%20in%20your%20solar%20inverter%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="link-social-whatsapp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/puritysolarinverter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="tel:+2348034360049"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="link-social-instagram"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
            <p className="font-inter text-sm text-white/70">
              Stay updated with our latest innovations and sustainability news.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-sm text-white/70">
              © {currentYear} Purity Solar Inverter Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 font-inter text-sm">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

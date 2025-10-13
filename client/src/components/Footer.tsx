import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

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
                Purity Solar
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
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="link-social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="link-social-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-5 h-5" />
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
              © {currentYear} Purity Solar Inverter. All rights reserved.
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

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-poppins font-bold text-lg md:text-xl">P</span>
            </div>
            <span className="font-poppins font-semibold text-lg md:text-xl text-foreground">
              Purity Solar Inverter
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-inter text-foreground/80 hover:text-foreground transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-sm font-inter text-foreground/80 hover:text-foreground transition-colors"
              data-testid="link-products"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("technology")}
              className="text-sm font-inter text-foreground/80 hover:text-foreground transition-colors"
              data-testid="link-technology"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-inter text-foreground/80 hover:text-foreground transition-colors"
              data-testid="link-testimonials"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-inter text-foreground/80 hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              size="default"
              data-testid="button-get-quote-nav"
            >
              Get a Quote
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground font-inter"
              data-testid="link-about-mobile"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground font-inter"
              data-testid="link-products-mobile"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("technology")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground font-inter"
              data-testid="link-technology-mobile"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground font-inter"
              data-testid="link-testimonials-mobile"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground font-inter"
              data-testid="link-contact-mobile"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full"
              data-testid="button-get-quote-mobile"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

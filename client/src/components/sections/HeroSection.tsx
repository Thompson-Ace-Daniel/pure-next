import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/stock_images/solar_panel_field_at_c6eeba37.jpg";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-24 md:py-32 text-center">
        <h1
          className="font-poppins font-semibold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-800"
          data-testid="text-hero-title"
        >
          Powering a Cleaner Future with Purity
        </h1>

        <p
          className="font-inter text-lg md:text-xl font-700 text-muted-foreground max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-800 delay-150"
          data-testid="text-hero-subtitle"
        >
          High-efficiency solar inverters engineered for maximum energy output
          and sustainability.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-800 delay-300">
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="gap-2 min-w-[180px]"
            data-testid="button-get-quote-hero"
          >
            Get a Quote
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("products")}
            className="min-w-[180px] bg-background/50 backdrop-blur-sm border-border hover:bg-background/70"
            data-testid="button-learn-more-hero"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

import rdImage from "@assets/stock_images/research_and_develop_dc6c256f.jpg";
import manufacturingImage from "@assets/stock_images/modern_manufacturing_072aa943.jpg";
import teamImage from "@assets/stock_images/diverse_professional_0aaebdc2.jpg";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-poppins font-semibold text-3xl md:text-4xl text-foreground mb-4"
            data-testid="text-about-title"
          >
            About Purity Solar Inverter
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Leading the renewable energy revolution with innovative solar
            inverter technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="font-poppins font-semibold text-2xl text-foreground">
              Our Story
            </h3>
            <p className="font-inter text-muted-foreground leading-relaxed">
              Founded in 2010, Purity Solar Inverter emerged from a simple yet
              powerful vision: to make clean energy accessible, reliable, and
              efficient for everyone. What started as a small research team has
              grown into a global leader in solar inverter technology.
            </p>
            <p className="font-inter text-muted-foreground leading-relaxed">
              Our commitment to innovation and sustainability has driven us to
              develop some of the most efficient solar inverters in the
              industry, helping thousands of homes and businesses transition to
              renewable energy.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-poppins font-semibold text-2xl text-foreground">
              Mission & Vision
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-poppins font-medium text-lg text-foreground mb-2">
                  Our Mission
                </h4>
                <p className="font-inter text-muted-foreground">
                  To deliver cutting-edge solar inverter solutions that maximize
                  energy efficiency while minimizing environmental impact,
                  making renewable energy the standard for all.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-poppins font-medium text-lg text-foreground mb-2">
                  Our Vision
                </h4>
                <p className="font-inter text-muted-foreground">
                  A world powered entirely by clean, sustainable energy where
                  every home and business has access to reliable, efficient
                  solar technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group overflow-hidden rounded-lg">
            <img
              src={rdImage}
              alt="Research and Development Laboratory"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              data-testid="img-about-rd"
            />
            <div className="p-4 bg-card">
              <h4 className="font-poppins font-medium text-lg text-card-foreground">
                Research & Development
              </h4>
              <p className="font-inter text-sm text-muted-foreground mt-2">
                State-of-the-art facilities driving innovation
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <img
              src={manufacturingImage}
              alt="Manufacturing Facility"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              data-testid="img-about-manufacturing"
            />
            <div className="p-4 bg-card">
              <h4 className="font-poppins font-medium text-lg text-card-foreground">
                Manufacturing Excellence
              </h4>
              <p className="font-inter text-sm text-muted-foreground mt-2">
                Advanced production ensuring quality
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <img
              src={teamImage}
              alt="Our Team"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              data-testid="img-about-team"
            />
            <div className="p-4 bg-card">
              <h4 className="font-poppins font-medium text-lg text-card-foreground">
                Expert Team
              </h4>
              <p className="font-inter text-sm text-muted-foreground mt-2">
                Dedicated professionals passionate about solar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

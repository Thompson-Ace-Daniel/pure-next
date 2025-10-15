import { CheckCircle, Headphones, Leaf, Shield, Gauge, Banknote } from "lucide-react";

const features = [
  {
    id: 1,
    icon: CheckCircle,
    title: "Certified Quality",
    description: "All our products meet international standards and certifications.",
  },
  {
    id: 2,
    icon: Headphones,
    title: "Expert Support",
    description: "Professional installation and maintenance services for reliability.",
  },
  {
    id: 3,
    icon: Leaf,
    title: "Energy Efficient",
    description: "Maximum energy conversion with minimal waste for sustainable usage.",
  },
  {
    id: 4,
    icon: Shield,
    title: "Warranty",
    description: "Comprehensive warranty coverage ensures peace of mind.",
  },
  {
    id: 5,
    icon: Gauge,
    title: "Fast Installation",
    description: "Quick, precise, and professional installation every time.",
  },
  {
    id: 6,
    icon: Banknote,
    title: "Affordable",
    description: "Competitive pricing without compromising on quality.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-poppins font-semibold text-3xl md:text-4xl text-foreground mb-4"
            data-testid="text-features-title"
          >
            Product Features & Advantages
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Quality-driven innovation ensuring value, reliability, and sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="text-center group p-6 rounded-xl bg-card hover:shadow-lg transition-all duration-300"
                data-testid={`feature-${feature.id}`}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
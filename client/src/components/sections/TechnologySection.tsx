import { techFeatures } from "@/data/techFeatures";
import { Zap, Activity, Shield, Leaf } from "lucide-react";

const iconMap = {
  Zap,
  Activity,
  Shield,
  Leaf,
};

export function TechnologySection() {
  return (
    <section id="technology" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-poppins font-semibold text-3xl md:text-4xl text-foreground mb-4"
            data-testid="text-technology-title"
          >
            Advanced Technology & Features
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge innovation powering sustainable energy solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techFeatures.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={feature.id}
                className="text-center group"
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

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-card">
            <p className="font-poppins font-bold text-4xl text-primary mb-2">
              99.2%
            </p>
            <p className="font-inter text-sm text-muted-foreground">
              Maximum Efficiency Rating
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card">
            <p className="font-poppins font-bold text-4xl text-primary mb-2">
              5 Years
            </p>
            <p className="font-inter text-sm text-muted-foreground">
              Industry-Leading Warranty
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card">
            <p className="font-poppins font-bold text-4xl text-primary mb-2">
              2,000+
            </p>
            <p className="font-inter text-sm text-muted-foreground">
              Installations Worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { products } from "@/data/products";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function ProductsSection() {
  const categoryColors = {
    residential: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    commercial: "bg-green-500/10 text-green-700 dark:text-green-400",
    industrial: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-poppins font-semibold text-3xl md:text-4xl text-foreground mb-4"
            data-testid="text-products-title"
          >
            Our Product Line
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Innovative solar inverters designed for every application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover-elevate transition-all duration-300 hover:shadow-lg"
              data-testid={`card-product-${product.id}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  data-testid={`img-product-${product.id}`}
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    {product.name}
                  </h3>
                  <Badge
                    className={`capitalize ${categoryColors[product.category]}`}
                    data-testid={`badge-category-${product.id}`}
                  >
                    {product.category}
                  </Badge>
                </div>

                <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                <div className="grid grid-cols-3 gap-3 py-4 border-y border-border">
                  <div>
                    <p className="font-roboto text-xs text-muted-foreground mb-1">
                      Power
                    </p>
                    <p className="font-roboto font-medium text-foreground">
                      {product.specs.power}
                    </p>
                  </div>
                  <div>
                    <p className="font-roboto text-xs text-muted-foreground mb-1">
                      Efficiency
                    </p>
                    <p className="font-roboto font-medium text-foreground">
                      {product.specs.efficiency}
                    </p>
                  </div>
                  <div>
                    <p className="font-roboto text-xs text-muted-foreground mb-1">
                      Warranty
                    </p>
                    <p className="font-roboto font-medium text-foreground">
                      {product.specs.warranty}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-inter text-xs font-medium text-foreground uppercase tracking-wide">
                    Key Features
                  </p>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="font-inter text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="outline"
                  className="w-full gap-2"
                  data-testid={`button-learn-more-${product.id}`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

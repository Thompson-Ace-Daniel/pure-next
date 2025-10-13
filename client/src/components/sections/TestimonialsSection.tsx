import { testimonials } from "@/data/testimonials";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-poppins font-semibold text-3xl md:text-4xl text-foreground mb-4"
            data-testid="text-testimonials-title"
          >
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Real experiences from satisfied customers around the world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 md:p-8 relative hover-elevate transition-all duration-300"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    data-testid={`star-${testimonial.id}-${i}`}
                  />
                ))}
              </div>

              <p className="font-inter text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.comment}"
              </p>

              <div className="flex items-center gap-4">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                    data-testid={`img-testimonial-${testimonial.id}`}
                  />
                )}
                <div>
                  <p className="font-poppins font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-inter text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Testimonial } from "@shared/schema.ts";
import installationImg1 from "@assets/stock_images/solar_panel_installa_ad58d8f2.jpg";
import installationImg2 from "@assets/stock_images/solar_panel_installa_e3a4ecce.jpg";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Johnson",
    company: "Green Valley Homes",
    rating: 5,
    comment: "Purity Solar Inverters have transformed our energy efficiency. The smart monitoring gives us complete control, and the 15-year warranty provides peace of mind. Highly recommend!",
    image: installationImg1,
  },
  {
    id: "t2",
    name: "Michael Chen",
    company: "TechCorp Industries",
    rating: 5,
    comment: "We've installed Purity inverters across three facilities. The reliability is outstanding, and the real-time analytics help us optimize our energy usage. Best investment we've made.",
    image: installationImg2,
  },
  {
    id: "t3",
    name: "Emily Rodriguez",
    company: "Sunrise Community Solar",
    rating: 5,
    comment: "The PureBusiness 25 has exceeded our expectations. Installation was seamless, efficiency is exceptional, and the support team is always responsive. A truly premium product.",
  },
  {
    id: "t4",
    name: "David Thompson",
    company: "EcoEnergy Solutions",
    rating: 5,
    comment: "After comparing multiple brands, Purity stood out for efficiency and durability. Two years in, our systems are performing flawlessly with zero maintenance issues.",
  },
];

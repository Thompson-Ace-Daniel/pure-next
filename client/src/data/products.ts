import { Product } from "@shared/schema.ts";
import residentialInverter from "@assets/stock_images/modern_solar_inverte_5af6ad02.jpg";
import commercialInverter from "@assets/stock_images/modern_solar_inverte_15e3f512.jpg";
import industrialInverter from "@assets/stock_images/modern_solar_inverte_f52ae432.jpg";

export const products: Product[] = [
  {
    id: "res-1",
    name: "PureHome 5000",
    category: "residential",
    description: "Perfect for residential installations, delivering reliable clean energy to your home with smart monitoring capabilities.",
    specs: {
      power: "5 kW",
      efficiency: "98.5%",
      warranty: "15 Years",
    },
    features: ["Smart WiFi monitoring", "Compact design", "Weather resistant", "Easy installation"],
    image: residentialInverter,
  },
  {
    id: "com-1",
    name: "PureBusiness 25",
    category: "commercial",
    description: "Designed for small to medium businesses, maximizing energy output with advanced grid management.",
    specs: {
      power: "25 kW",
      efficiency: "98.8%",
      warranty: "20 Years",
    },
    features: ["Advanced monitoring", "Load balancing", "Peak shaving", "Remote diagnostics"],
    image: commercialInverter,
  },
  {
    id: "ind-1",
    name: "PureIndustry 100",
    category: "industrial",
    description: "Enterprise-grade solution for large-scale solar installations with maximum reliability and efficiency.",
    specs: {
      power: "100 kW",
      efficiency: "99.2%",
      warranty: "25 Years",
    },
    features: ["Redundant systems", "Real-time analytics", "Grid stabilization", "24/7 support"],
    image: industrialInverter, // Using imported image instead of URL string
  },
];

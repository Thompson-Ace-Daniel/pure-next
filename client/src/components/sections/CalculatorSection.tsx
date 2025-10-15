import { useState } from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";

const packages = [
  {
    id: 1,
    name: "1.5kVA Package",
    spec: "1.5kW 12V LA",
    wattage: 1500,
    price: 1200000,
    image: "https://image.made-in-china.com/251f0j00QRYfIUTKBtVy/made-in-china.jpg",
  },
  {
    id: 2,
    name: "2.5kVA Package",
    spec: "2.5kW 2.64kWh LA",
    wattage: 2500,
    price: 1892880,
    image: "https://image.made-in-china.com/251f0j00QRYfIUTKBtVy/made-in-china.jpg",
  },
  {
    id: 3,
    name: "5kVA Package",
    spec: "5kW 5.28kWh LA",
    wattage: 5000,
    price: 3500000,
    image: "https://image.made-in-china.com/251f0j00QRYfIUTKBtVy/made-in-china.jpg",
  },
];

const appliances = [
  { id: 1, name: "Mobile Phone", watts: 40 },
  { id: 2, name: "Energy Saving Bulb", watts: 10 },
  { id: 3, name: "Home Theatre", watts: 50 },
  { id: 4, name: "Laptop", watts: 65 },
  { id: 5, name: "Standing Fan", watts: 70 },
  { id: 6, name: "Refrigerator", watts: 200 },
];

export function CalculatorSection() {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  const [selectedAppliances, setSelectedAppliances] = useState<
    Record<number, number>
  >({});

  const totalWattage = Object.entries(selectedAppliances).reduce(
    (acc, [id, qty]) => {
      const appliance = appliances.find((a) => a.id === Number(id));
      return acc + (appliance ? appliance.watts * qty : 0);
    },
    0
  );

  const handleApplianceChange = (id: number, delta: number) => {
    setSelectedAppliances((prev) => {
      const newQty = Math.max((prev[id] || 0) + delta, 0);
      return { ...prev, [id]: newQty };
    });
  };

  const recommendHigher =
    totalWattage > selectedPackage.wattage
      ? packages.find((p) => p.wattage > totalWattage)
      : null;

  return (
    <section id="calculator" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="calculator-title"
            className="font-poppins font-semibold text-3xl md:text-4xl text-foreground mb-4"
          >
            Solar Package Calculator
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Select your appliances to find the perfect solar package for your
            needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Package Selection */}
          <div>
            <h3 className="font-poppins font-semibold text-2xl text-foreground mb-6">
              Choose Your Package
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`cursor-pointer rounded-xl bg-card p-4 border transition-all duration-300 hover:shadow-md ${
                    selectedPackage.id === pkg.id
                      ? "border-primary shadow-lg"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-32 object-contain mb-4"
                  />
                  <h4 className="font-poppins font-semibold text-lg text-foreground">
                    {pkg.name}
                  </h4>
                  <p className="font-inter text-sm text-muted-foreground mb-2">
                    {pkg.spec}
                  </p>
                  <p className="font-inter text-base text-primary font-semibold">
                    ₦{pkg.price.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Appliance Selection */}
          <div>
            <h3 className="font-poppins font-semibold text-2xl text-foreground mb-6">
              Appliances it can Power
            </h3>
            <div className="space-y-4">
              {appliances.map((a) => (
                <div
                  key={a.id}
                  className="flex justify-between items-center rounded-lg bg-card p-3"
                >
                  <div>
                    <p className="font-poppins font-medium text-foreground">
                      {a.name}
                    </p>
                    <p className="font-inter text-sm text-muted-foreground">
                      {a.watts} watts
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleApplianceChange(a.id, -1)}
                      className="w-8 h-8 bg-muted rounded-full text-lg leading-none hover:bg-muted/70"
                    >
                      –
                    </button>
                    <span className="font-semibold w-6 text-center">
                      {selectedAppliances[a.id] || 0}
                    </span>
                    <button
                      onClick={() => handleApplianceChange(a.id, 1)}
                      className="w-8 h-8 bg-primary text-white rounded-full text-lg leading-none hover:bg-primary/90"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-8 p-4 rounded-xl bg-muted/10">
              <p className="font-inter text-sm text-muted-foreground">
                Total Load:{" "}
                <span className="text-foreground font-semibold">
                  {totalWattage}W
                </span>{" "}
                of {selectedPackage.wattage}W ({selectedPackage.name})
              </p>

              {recommendHigher ? (
                <div className="flex items-start gap-3 mt-3 text-amber-600">
                  <AlertTriangle className="w-5 h-5 mt-0.5" />
                  <p className="font-inter text-sm">
                    Your load exceeds this package. We recommend upgrading to{" "}
                    <span className="font-semibold">
                      {recommendHigher.name}
                    </span>{" "}
                    ({recommendHigher.wattage}W).
                  </p>
                </div>
              ) : (
                totalWattage > 0 && (
                  <div className="flex items-start gap-3 mt-3 text-green-600">
                    <CheckCircle className="w-5 h-5 mt-0.5" />
                    <p className="font-inter text-sm">
                      Your selected load fits perfectly within this package.
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { type SkipOption } from "../api/skipService";
import {
  Truck,
  Package,
  Calendar,
  ShieldCheck,
  CreditCard,
  MapPin,
} from "lucide-react";
export const steps = [
  { id: "postcode", label: "Location", icon: MapPin, completed: true },
  { id: "waste-type", label: "Waste Type", icon: Package, completed: true },
  { id: "select-skip", label: "Skip Size", icon: Truck, active: true },
  { id: "permit-check", label: "Permits", icon: ShieldCheck },
  { id: "choose-date", label: "Schedule", icon: Calendar },
  { id: "payment", label: "Payment", icon: CreditCard },
];

export const getSkipDescription = (size: number) => {
  const descriptions: Record<number, string> = {
    4: "Perfect for small household clearouts and garden waste",
    6: "Ideal for kitchen renovations and small office clearouts",
    8: "Our most popular size for home renovations and landscaping",
    10: "Great for larger projects and commercial clearance",
    12: "Suitable for construction sites and major renovations",
    14: "Large capacity for substantial construction waste",
    16: "Extra large skip for major commercial projects",
    20: "Industrial size for large-scale construction",
    40: "Maximum capacity for major industrial projects",
  };
  return descriptions[size] || "Professional waste management solution";
};

export const getSuitableFor = (skip: SkipOption) => {
  const suitableMap: Record<number, string[]> = {
    4: ["Small garden clearance", "Home decluttering", "Minor renovations"],
    6: ["Kitchen renovations", "Office clearouts", "Garage cleanups"],
    8: ["Full home renovations", "Garden landscaping", "Construction waste"],
    10: ["Commercial clearance", "Major renovations", "Large-scale waste"],
    12: [
      "Construction sites",
      "Factory clearance",
      "Large property renovations",
    ],
    14: ["Industrial projects", "Major construction", "Commercial demolition"],
    16: [
      "Large commercial projects",
      "Industrial clearance",
      "Major demolition",
    ],
    20: [
      "Industrial construction",
      "Large-scale demolition",
      "Commercial waste",
    ],
    40: [
      "Major industrial projects",
      "Large construction sites",
      "Bulk commercial waste",
    ],
  };

  const suitable = suitableMap[skip.size] || ["General waste disposal"];

  if (skip.allows_heavy_waste) {
    suitable.push("Heavy materials allowed");
  }

  if (skip.allowed_on_road) {
    suitable.push("Road placement permitted");
  }

  return suitable;
};

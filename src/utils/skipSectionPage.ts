import type { SkipOption } from "@/api/skipService";

export const getSkipColor = (size: number) => {
  const colors: Record<number, string> = {
    4: "#FEB2B2",
    6: "#FBD38D",
    8: "#F6AD55",
    10: "#68D391",
    12: "#4FD1C5",
    14: "#63B3ED",
    16: "#9F7AEA",
    20: "#F687B3",
    40: "#FC8181",
  };
  return colors[size] || "#A0AEC0";
};

export const calculateFinalPrice = (skip: SkipOption) => {
  const vatAmount = skip.price_before_vat * (skip.vat / 100);
  return Math.ceil(skip.price_before_vat + vatAmount);
};

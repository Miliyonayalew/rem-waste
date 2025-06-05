import axios from "axios";

export type SkipOption = {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
};

export const fetchSkipOptions = async (
  postcode: string,
  area: string
): Promise<SkipOption[]> => {
  const response = await axios.get<SkipOption[]>(
    `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
  );
  return response.data;
};

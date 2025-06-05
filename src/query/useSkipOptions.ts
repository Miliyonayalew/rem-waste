import { useQuery } from "@tanstack/react-query";
import { fetchSkipOptions, type SkipOption } from "../api/skipService";

export const useSkipOptions = (postcode: string, area: string) => {
  return useQuery<SkipOption[], Error>({
    queryKey: ["skipOptions", postcode, area],
    queryFn: () => fetchSkipOptions(postcode, area),
    staleTime: 1000 * 60 * 5,
    enabled: !!postcode,
  });
};

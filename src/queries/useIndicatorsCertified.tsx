import { useQuery } from "@tanstack/react-query";
import { getIndicatorsCertified } from "../services/getIndicatorsCertified";

export const useIndicatorCertified = () => {
  return useQuery({
    queryKey: ["indicator"],
    queryFn: getIndicatorsCertified,
    staleTime: 1000 * 60 * 60 * 24,
  });
};

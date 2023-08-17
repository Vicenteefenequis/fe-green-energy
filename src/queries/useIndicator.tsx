import { useQuery } from "@tanstack/react-query";
import { getIndicator } from "../services/getIndicator";

export const useIndicatorById = (id: string) => {
  return useQuery({
    queryKey: ["indicator", id],
    queryFn: () => getIndicator(id),
    staleTime: 1000 * 60 * 60 * 24,
  });
};

import { useQuery } from "@tanstack/react-query";
import { getIndicator } from "../services/getIndicator";
import { TIndicatorRequest } from "../interfaces/api";

export const useIndicatorById = (params: TIndicatorRequest) => {
  return useQuery({
    queryKey: ["indicator", params],
    queryFn: () => getIndicator(params),
    staleTime: 1000 * 60 * 60 * 24,
  });
};

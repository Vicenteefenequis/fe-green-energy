import { useQuery } from "@tanstack/react-query";
import { getLocations } from "../services/getLocations";
import { TYPE_LOCATION } from "../interfaces/api";

export const useLocationListQuery = (type: TYPE_LOCATION) => {
  return useQuery({
    queryKey: ["cities"],
    queryFn: async () => await getLocations(type),
    staleTime: 1000 * 60 * 60 * 24,
  });
};

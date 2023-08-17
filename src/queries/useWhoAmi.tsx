import { useQuery } from "@tanstack/react-query";
import { whoAmi } from "../services/whoAmi";

export const useWhoAmi = () => {
  return useQuery({
    queryKey: ["whoami"],
    queryFn: whoAmi,
  });
};

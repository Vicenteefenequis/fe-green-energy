import { useQuery } from "@tanstack/react-query";
import { getStateBatch } from "../services/postStateBatch";

export const useStateBatchQuery = (acronyms: string[]) => {
  return useQuery({
    queryKey: ["state-comparation", acronyms],
    queryFn: () => getStateBatch(acronyms),
    enabled: !!acronyms.length,
  });
};

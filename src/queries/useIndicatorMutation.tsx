import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postIndicator } from "../services/postIndicator";
import { toast } from "react-toastify";

export const useIndicatorMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["create-indicator"],
    mutationFn: postIndicator,
    onSuccess: () => {
      queryClient.invalidateQueries(["indicators"]);
      toast("Indicador criado com sucesso!");
    },
  });
};

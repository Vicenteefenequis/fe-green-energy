import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { postProject } from "../services/postProject";

export const useProjectCreateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["create-project"],
    mutationFn: postProject,
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
      toast("Indicador criado com sucesso!");
    },
  });
};

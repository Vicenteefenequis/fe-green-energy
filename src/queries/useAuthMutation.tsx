import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { postUser } from "../services/authUser";
import { useNavigate } from "react-router-dom";

export const useAuthMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["auth"],
    mutationFn: postUser,
    onSuccess: () => {
      toast.success("Login feito com sucesso!");
      navigate("/");
    },
    onError: () => {
      toast.error("Erro ao fazer login!");
    },
  });
};

import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../services/signupUser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { User } from "../models/user";
import { AxiosError } from "axios";

export const useSignupMutation = () => {
  const navigate = useNavigate();
  return useMutation<User.Register, AxiosError<User.Register>, User.Register>({
    mutationKey: ["signup"],
    mutationFn: signupUser,
    onSuccess: () => {
      toast("Registro feito com sucesso!");
      navigate("/");
    },
    onError: (error) => {
      if (error?.response?.status === 400) {
        toast.error(
          "O registro não foi concluído. Por favor, verifique as informações inseridas e tente novamente. "
        );
      } else {
        toast.error("Erro ao registrar!");
      }
    },
  });
};

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/logout";
import { toast } from "react-toastify";

export const useLogoutMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: () => {
      toast.success("Logout feito com sucesso!");
      navigate("/entrar");
    },
  });
};

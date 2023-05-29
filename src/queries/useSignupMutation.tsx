import { useMutation } from '@tanstack/react-query';
import { signupUser } from '../services/signupUser';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const useSignupMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['signup'],
    mutationFn: signupUser,
    onSuccess: () => {
      toast('Registro feito com sucesso!');
      navigate('/');
    },
  });
};

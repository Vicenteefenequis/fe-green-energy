import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { postUser } from '../services/authUser';

export const useAuthMutation = () => {
  return useMutation({
    mutationKey: ['auth'],
    mutationFn: postUser,
    onSuccess: () => {
      toast('Login feito com sucesso!');
    },
  });
};

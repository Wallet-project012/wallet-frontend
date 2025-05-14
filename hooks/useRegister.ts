import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { FormData } from '@/components/form/type';

export const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      confirmPassword: string;
      number: string;
    }) => api.post('/register', data),
    onSuccess: () => router.push('/login'),
    onError: () => alert('Register failed'),
  });
};

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const res = await signIn('credentials', {
        ...data,
        redirect: false,
      });
      if (!res?.ok) throw new Error('Login failed');
      return res;
    },
    onSuccess: () => router.push('/dashboard'),
    onError: () => alert('Invalid credentials'),
  });
};

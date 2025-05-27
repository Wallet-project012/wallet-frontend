// hooks/useOtpLogin.ts
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

interface OtpLoginInput {
  number: string;
  otp: string;
}

export const useOtpLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async ({ number, otp }: OtpLoginInput) => {
      const res = await signIn('otp', {
        number,
        otp,
        redirect: false,
      });

      if (!res?.ok) {
        throw new Error('OTP login failed');
      }

      return res;
    },
    onSuccess: () => {
      router.push('/dashboard');
    },
    onError: () => {
      alert('Invalid code or phone number');
    },
  });
};

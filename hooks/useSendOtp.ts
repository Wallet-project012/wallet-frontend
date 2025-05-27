import { useMutation } from '@tanstack/react-query';

export const useSendOtp = () => {
  return useMutation({
    mutationFn: async (number: string) => {
      const res = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ number }),
      });

      if (!res.ok) throw new Error('Failed to send OTP');
    },
    onError: () => {
      alert('Could not send OTP. Please check the number.');
    },
  });
};

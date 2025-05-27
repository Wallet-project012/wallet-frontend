'use client';

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';
import { useOtpLogin } from '@/hooks/useOtpLogin';
import { useSendOtp } from '@/hooks/useSendOtp';

export function InputOTPControlled() {
  const [step, setStep] = useState<'enterNumber' | 'enterOtp'>('enterNumber');
  const [number, setNumber] = useState('');
  const [otp, setOtp] = useState('');

  // Step 1: Send phone number to backend
  const sendOtp = useSendOtp();

  const handleSendNumber = () => {
    sendOtp.mutate(number, {
      onSuccess: () => setStep('enterOtp'),
    });
  };

  // Step 2: Login with OTP
  const otpLogin = useOtpLogin();

  // Auto-submit OTP when it's fully entered

  const handleOtpChange = (value: string) => {
    setOtp(value);
    if (value.length === 6) {
      otpLogin.mutate({ number, otp: value });
    }
  };

  return (
    <div>
      {step === 'enterNumber' && (
        <div className="flex flex-col items-center space-y-4 mb-6">
          <h1>Enter your number.</h1>
          <Input
            type="tel"
            placeholder="Enter your phone number"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
          <Button
            className="w-60 self-center"
            onClick={handleSendNumber}
            disabled={sendOtp.isPending}
          >
            Submit Number
          </Button>
        </div>
      )}
      {step === 'enterOtp' && (
        <div className="space-y-2">
          <InputOTP maxLength={6} value={otp} onChange={handleOtpChange}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <div className="text-center text-sm">
            {/* to be changed latter */}
            <p className="text-center text-sm">Enter the code sent to {number}</p>
          </div>
        </div>
      )}
    </div>
  );
}

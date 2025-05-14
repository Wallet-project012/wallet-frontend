'use client';

import RegisterForm from '@/components/form/RegisterForm';
import ThemeToggle from '@/theme/theme-toggle';

type RegisterData = {
  email: string;
  password: string;
};

export default function RegisterPage() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center min-h-screen bg-light-main dark:bg-dark-main p-8">
      <h1 className="text-3xl font-extrabold ">Wallet</h1>
      <RegisterForm />
      <ThemeToggle />
    </div>
  );
}

'use client';

import LoginForm from '@/components/form/LoginForm';
import RegisterForm from '@/components/form/RegisterForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ThemeToggle from '@/theme/theme-toggle';

export default function RegisterPage() {
  return (
    <div className="bg-light-main dark:bg-dark-main w-full h-screen">
      <div className="flex flex-col gap-6 justify-center items-center p-8">
        <h1 className="text-3xl font-extrabold ">Wallet</h1>
        <Tabs
          defaultValue="register"
          className="w-xl flex justify-center items-center border-2 border-light-main dark:border-dark-main rounded-md shadow-2xl"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="register">Register</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
        </Tabs>
        <ThemeToggle />
      </div>
    </div>
  );
}

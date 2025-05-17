'use client';
import { useForm, Controller } from 'react-hook-form';
import { useLogin } from '@/hooks/useLogin';
import { LoginData } from './type';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema, registerFormSchema } from '@/schemas/formSchema';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';
import { Switch } from '../ui/switch';
import { useState } from 'react';

const LoginForm = () => {
  const [phoneLogin, setPhoneLogin] = useState(false);
  const form = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const mutation = useLogin();

  const onSubmit = (data: LoginData) => mutation.mutate(data);
  function toggleLogin() {
    setPhoneLogin(prev => !prev);
  }

  if (phoneLogin) {
    return (
      <div className="flex justify-start items-center gap-3">
        <Switch
          title="login with phone number"
          checked={phoneLogin}
          onCheckedChange={toggleLogin}
        />
        <p>login with phone number</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 border p-6 rounded-md w-xl shadow-2xl  "
      >
        <div className="flex justify-start items-center gap-3">
          <Switch
            title="login with phone number"
            checked={phoneLogin}
            onCheckedChange={toggleLogin}
          />
          <p>login with phone number</p>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email&quot;</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>enter your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password&quot;</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormDescription>enter your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-60 self-center" type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Submitting...' : 'Register'}
        </Button>

        {/* API Error */}
        {mutation.error instanceof Error && (
          <p className="text-error-600 mt-2">Error: {mutation.error.message}</p>
        )}
      </form>
    </Form>
  );
};

export default LoginForm;

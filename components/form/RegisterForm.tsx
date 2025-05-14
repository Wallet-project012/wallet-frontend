'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormSchema } from '@/schemas/formSchema';
import { FormData } from './type';
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
import { useRegister } from '@/hooks/useRegister';

const RegisterForm = () => {
  const form = useForm({
    resolver: yupResolver(registerFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      number: '',
    },
  });
  const mutation = useRegister();

  const onSubmit = (data: FormData) => mutation.mutate(data);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 border p-6 rounded-md w-xl shadow-2xl  "
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>firstName&quot;</FormLabel>
              <FormControl>
                <Input placeholder="First name" {...field} />
              </FormControl>
              <FormDescription>enter your first name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>last name&quot;</FormLabel>
              <FormControl>
                <Input placeholder="Last name" {...field} />
              </FormControl>
              <FormDescription>enter your last name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email&quot;</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
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
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormDescription>enter your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>confirmPassword&quot;</FormLabel>
              <FormControl>
                <Input placeholder="confirmPassword" type="password" {...field} />
              </FormControl>
              <FormDescription>confirm your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>number&quot;</FormLabel>
              <FormControl>
                <Input placeholder="Number" type="number" {...field} />
              </FormControl>
              <FormDescription>enter your phone number.</FormDescription>
              <FormMessage title="errorrrrr" />
            </FormItem>
          )}
        />
        <Button className="w-60 self-center" type="submit">
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

export default RegisterForm;

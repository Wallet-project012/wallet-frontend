"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "@/schemas/formSchema";
import { FormData } from "./type";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";

const RegisterForm = () => {
  const form = useForm({
    resolver: yupResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      number: 0,
    },
  });

  const onSubmit = (data: FormData): void => {
    console.log(data);
  };

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <div>
    //     <label>First Name</label>
    //     <Controller
    //       name="firstName"
    //       control={control}
    //       render={({ field }) => <input type="text" {...field} placeholder="First Name" />}
    //     />
    //     {errors.firstName && <p>{errors.firstName.message}</p>}
    //   </div>
    //   <div>
    //     <label>Last Name</label>
    //     <Controller
    //       name="lastName"
    //       control={control}
    //       render={({ field }) => <input type="text" {...field} placeholder="Last Name" />}
    //     />
    //     {errors.lastName && <p>{errors.lastName.message}</p>}
    //   </div>
    //   <div>
    //     <label>Email</label>
    //     <Controller
    //       name="email"
    //       control={control}
    //       render={({ field }) => <input type="email" {...field} placeholder="email" />}
    //     />
    //     {errors.email && <p>{errors.email.message}</p>}
    //   </div>
    //   <div>
    //     <label>Password</label>
    //     <Controller
    //       name="password"
    //       control={control}
    //       render={({ field }) => <input type="password" {...field} placeholder="password" />}
    //     />
    //     {errors.password && <p>{errors.password.message}</p>}
    //   </div>
    //   <div>
    //     <label>Confirm password</label>
    //     <Controller
    //       name="confirmPassword"
    //       control={control}
    //       render={({ field }) => (
    //         <input {...field} type="password" placeholder="confirm password " />
    //       )}
    //     />
    //     {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
    //   </div>
    //   <div>
    //     <label>Number</label>
    //     <Controller
    //       name="number"
    //       control={control}
    //       render={({ field }) => <input type="number" {...field} placeholder="number " />}
    //     />
    //     {errors.number && <p>{errors.number.message}</p>}
    //   </div>

    //   <button type="submit">Submit</button>
    // </form>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>firstName&quot;</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default RegisterForm;

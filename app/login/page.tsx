import { useForm, Controller } from 'react-hook-form';
import { useLogin } from '@/hooks/useLogin';

type LoginData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { control, handleSubmit } = useForm<LoginData>();
  const mutation = useLogin();

  const onSubmit = (data: LoginData) => mutation.mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 max-w-sm mx-auto">
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} placeholder="Email" />}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} type="password" placeholder="Password" />}
      />
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}

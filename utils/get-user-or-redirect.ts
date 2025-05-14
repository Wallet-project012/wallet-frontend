import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';
import axios from 'axios';
import { redirect } from 'next/navigation';

export async function getUserOrRedirect() {
  const session = await getServerSession(authOptions);

  // after backend set up

  // if (!session?.user?.token) {
  //   redirect('/login');
  // }

  // try {
  //   const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/me`, {
  //     headers: {
  //       Authorization: `Bearer ${session.user.token}`,
  //     },
  //   });
  //   return res.data;
  // } catch (err) {
  //   redirect('/login');
  // }
}

import { getSession } from 'next-auth/react';
import api from './api';

export const authAxios = async () => {
  const session = await getSession();

  if (session?.user?.token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${session.user.token}`;
  }

  return api;
};

import axios from '@/lib/axios';
import { ICreateUser } from './type';

export const createUser = async (data: ICreateUser): Promise<void> => {
  await axios.post('/users', data);
};

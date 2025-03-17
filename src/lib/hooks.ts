import useSWR from 'swr';
import { fetchUser, fetchUsers } from './api';
import { User } from '../types';

export function useUsers(initialData?: User[]) {
  const { data, error, isLoading } = useSWR<User[]>('users', fetchUsers, {
    fallbackData: initialData
  });
  
  return {
    users: data,
    isLoading,
    isError: error
  };
}

export function useUser(id: string, initialData?: User) {
  const { data, error, isLoading } = useSWR<User>(`user/${id}`, () => fetchUser(id), {
    fallbackData: initialData
  });
  
  return {
    user: data,
    isLoading,
    isError: error
  };
} 
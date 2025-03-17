import { User } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch(`${API_URL}/users`);
  
  if (!response.ok) {
    throw new Error('Не вдалося завантажити список користувачів');
  }
  
  return response.json();
}

export async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`${API_URL}/users/${id}`);
  
  if (!response.ok) {
    throw new Error(`Не вдалося завантажити користувача з ID: ${id}`);
  }
  
  return response.json();
} 
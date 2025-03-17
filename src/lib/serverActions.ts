'use server';

import { User } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com';

export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${API_URL}/users`, { cache: 'no-store' });
  
  if (!response.ok) {
    throw new Error('Не вдалося завантажити список користувачів');
  }
  
  return response.json();
}

export async function getUser(id: string): Promise<User> {
  const response = await fetch(`${API_URL}/users/${id}`, { cache: 'no-store' });
  
  if (!response.ok) {
    throw new Error(`Не вдалося завантажити користувача з ID: ${id}`);
  }
  
  return response.json();
} 
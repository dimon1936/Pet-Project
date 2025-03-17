import React from 'react';
import { getUsers } from '../lib/serverActions';
import UserList from '../components/UserList';
import styles from '../styles/Home.module.scss';

export default async function Home() {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Каталог користувачів</h1>
        <p>Тестове завдання на Next.js з SSR</p>
      </header>

      <main className={styles.main}>
        <UserList initialUsers={users} />
      </main>
    </div>
  );
} 
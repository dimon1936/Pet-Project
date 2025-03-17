import React from 'react';
import Link from 'next/link';
import { getUser } from '../../../lib/serverActions';
import UserDetails from '../../../components/UserDetails';
import styles from '../../../styles/UserDetail.module.scss';

interface UserPageProps {
  params: {
    id: string;
  };
}

export default async function UserPage({ params }: UserPageProps) {
  const user = await getUser(params.id);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Назад до списку
      </Link>

      <UserDetails initialUser={user} userId={params.id} />
    </div>
  );
} 
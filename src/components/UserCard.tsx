import React from 'react';
import Link from 'next/link';
import { User } from '../types';
import styles from '../styles/UserCard.module.scss';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <Link href={`/user/${user.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.avatar}>
          {getInitials(user.name)}
        </div>
        <div className={styles.info}>
          <h2>{user.name}</h2>
          <p className={styles.username}>@{user.username}</p>
          <p className={styles.email}>{user.email}</p>
          <p className={styles.company}>{user.company.name}</p>
          
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {user.address.city}
            </span>
            <span className={styles.metaItem}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              ID: {user.id}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserCard; 
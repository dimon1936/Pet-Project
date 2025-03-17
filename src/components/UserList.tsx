'use client';

import React from 'react';
import { useUsers } from '../lib/hooks';
import UserCard from './UserCard';
import Loader from './Loader';
import styles from '../styles/Home.module.scss';
import { User } from '../types';

interface UserListProps {
  initialUsers: User[];
}

const UserList: React.FC<UserListProps> = ({ initialUsers }) => {
  const { users, isLoading, isError } = useUsers(initialUsers);

  if (isError) {
    return (
      <div className={styles.error}>
        <p>Помилка при завантаженні користувачів. Спробуйте пізніше.</p>
      </div>
    );
  }

  return (
    <>
      {isLoading && <Loader />}
      
      {users && users.length > 0 && (
        <div className={styles.grid}>
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
};

export default UserList; 
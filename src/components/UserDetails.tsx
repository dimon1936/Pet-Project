'use client';

import React from 'react';
import { useUser } from '../lib/hooks';
import Loader from './Loader';
import styles from '../styles/UserDetail.module.scss';
import { User } from '../types';

interface UserDetailsProps {
  initialUser: User;
  userId: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({ initialUser, userId }) => {
  const { user, isLoading, isError } = useUser(userId, initialUser);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  if (isError) {
    return (
      <div className={styles.error}>
        <p>Помилка при завантаженні інформації про користувача. Спробуйте пізніше.</p>
      </div>
    );
  }

  if (!user) {
    return <Loader />;
  }

  return (
    <div className={styles.userCard}>
      <div className={styles.header}>
        <div className={styles.avatar}>{getInitials(user.name)}</div>
        <div>
          <h1 className={styles.headerTitle}>{user.name}</h1>
          <p className={styles.username}>@{user.username}</p>
          
          <div className={styles.badges}>
            <span className={styles.badge}>ID: {user.id}</span>
            <span className={styles.badge}>{user.address.city}</span>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Контактна інформація</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <span className={styles.label}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Email
            </span>
            <span className={styles.value}>{user.email}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Телефон
            </span>
            <span className={styles.value}>{user.phone}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              Веб-сайт
            </span>
            <a href={`https://${user.website}`} className={styles.value} target="_blank" rel="noopener noreferrer">
              {user.website}
            </a>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Адреса</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <span className={styles.label}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Вулиця
            </span>
            <span className={styles.value}>{user.address.street}, {user.address.suite}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Місто
            </span>
            <span className={styles.value}>{user.address.city}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              Поштовий індекс
            </span>
            <span className={styles.value}>{user.address.zipcode}</span>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Компанія</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <span className={styles.label}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 7V3H2v18h20V7H12z"></path>
              </svg>
              Назва
            </span>
            <span className={styles.value}>{user.company.name}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 15H5l7-7 7 7z"></path>
              </svg>
              Слоган
            </span>
            <span className={styles.value}>"{user.company.catchPhrase}"</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="6"></line>
                <line x1="12" y1="18" x2="12" y2="22"></line>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                <line x1="2" y1="12" x2="6" y2="12"></line>
                <line x1="18" y1="12" x2="22" y2="12"></line>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
              </svg>
              Галузь
            </span>
            <span className={styles.value}>{user.company.bs}</span>
          </div>
        </div>
      </div>
      
      <div className={styles.mapSection}>
        <h2 className={styles.sectionTitle}>Карта</h2>
        <div className={styles.mapPlaceholder}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.mapIcon}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <p>Координати: {user.address.geo.lat}, {user.address.geo.lng}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails; 
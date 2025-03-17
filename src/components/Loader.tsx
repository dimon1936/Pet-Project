import React from 'react';
import styles from '../styles/Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <p>Завантаження...</p>
    </div>
  );
};

export default Loader; 
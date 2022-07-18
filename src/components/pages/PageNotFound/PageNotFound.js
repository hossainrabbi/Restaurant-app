import React from 'react';
import styles from './PageNotFound.module.css';

export default function PageNotFound() {
  return (
    <div className={`${styles.page__not__found} stock__red`}>
      <h2>404 Page Not Found</h2>
    </div>
  );
}

import React from 'react';
import styles from './filter-header.module.scss';
import { Logo } from '../../../../shared/logo/logo.component';

export const FilterHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.filter_logo__container}>
        <Logo />
        <span>МійПес</span>
      </div>
      <h1 className={styles.filter__header}>Фільтр</h1>
    </div>
  );
};

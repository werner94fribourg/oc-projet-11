import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Content.module.scss';

const Content = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles['content__title']}>404</h1>
      <p className={styles['content__paragraph']}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className={styles['content__link']} to={'/'}>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Content;

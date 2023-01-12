import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <h1 className={styles['banner__title']}>
        <span>Chez vous, </span>
        <span>partout et ailleurs</span>
      </h1>
    </section>
  );
};

export default Banner;

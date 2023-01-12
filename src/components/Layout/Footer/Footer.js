import logo from './kasa-black.png';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles['footer__logo']} src={logo} alt="Kasa" />
      <p className={styles['footer__text']}>
        &copy; 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;

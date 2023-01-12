import { NavLink } from 'react-router-dom';
import logo from './kasa.png';
import styles from './Header.module.scss';

const Header = () => {
  const normalLinkClass = styles['header__nav-list-item'];
  const activeLinkClasses = [
    normalLinkClass,
    styles['header__nav-list-item--active'],
  ].join(' ');

  return (
    <header className={styles.header}>
      <img className={[styles['header__logo']]} src={logo} alt="Kasa" />
      <nav className={styles['header__nav']}>
        <ul className={styles['header__nav-list']}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLinkClasses : normalLinkClass
              }
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLinkClasses : normalLinkClass
              }
              to="/about"
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

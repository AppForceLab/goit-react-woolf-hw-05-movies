import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to="/home" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/movies" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

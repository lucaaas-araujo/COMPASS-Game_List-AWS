import React from 'react';
import { Link } from 'react-router-dom';

import { useSidebar } from '../../hooks/useSidebar';
import { useUser } from '../../hooks/useUser';
import {
  category,
  categoryHover,
  compactLogo,
  fullLogo,
  game,
  gameHover,
  home,
  homeHover,
  logoutHover,
  logout as logoutIcon,
  platform,
  platformHover,
} from '../../utils/icons';
import { Button } from '../ui/button/Button';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const { logout } = useUser();

  return (
    <>
      <button className={styles.menuButton} onClick={toggleSidebar}>
        ☰
      </button>

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <div className={styles.header}>
          {isOpen ? (
            <div className={styles.logo}>
              <img src={fullLogo} alt='Logo' />
            </div>
          ) : (
            <img
              src={compactLogo}
              alt='Logo Compact'
              className={styles.logoCompact}
            />
          )}
        </div>

        <nav className={styles.nav}>
          <Link
            to='/'
            className={`${styles.navItem} ${!isOpen ? styles.navItemClosed : ''}`}>
            <div className={styles.iconWrapper}>
              <img src={home} alt='Home' className={styles.iconDefault} />
              <img
                src={homeHover}
                alt='Home Hover'
                className={styles.iconHover}
              />
            </div>
            {isOpen && <span>Home</span>}
          </Link>

          <Link
            to='/games'
            className={`${styles.navItem} ${!isOpen ? styles.navItemClosed : ''}`}>
            <div className={styles.iconWrapper}>
              <img src={game} alt='Games' className={styles.iconDefault} />
              <img
                src={gameHover}
                alt='Games Hover'
                className={styles.iconHover}
              />
            </div>
            {isOpen && <span>Games</span>}
          </Link>

          <Link
            to='/categories'
            className={`${styles.navItem} ${!isOpen ? styles.navItemClosed : ''}`}>
            <div className={styles.iconWrapper}>
              <img
                src={category}
                alt='Categories'
                className={styles.iconDefault}
              />
              <img
                src={categoryHover}
                alt='Categories Hover'
                className={styles.iconHover}
              />
            </div>
            {isOpen && <span>Categories</span>}
          </Link>

          <Link
            to='/platforms'
            className={`${styles.navItem} ${!isOpen ? styles.navItemClosed : ''}`}>
            <div className={styles.iconWrapper}>
              <img
                src={platform}
                alt='Platforms'
                className={styles.iconDefault}
              />
              <img
                src={platformHover}
                alt='Platforms Hover'
                className={styles.iconHover}
              />
            </div>
            {isOpen && <span>Platforms</span>}
          </Link>
        </nav>

        <div className={styles.logout}>
          <Button
            onClick={logout}
            className={`${styles.navItem} ${!isOpen ? styles.logoutClosed : ''}`}>
            {isOpen && <span>Logout</span>}
            <div className={styles.iconWrapper}>
              <img
                src={logoutIcon}
                alt='Logout'
                className={styles.logoutIconDefault}
              />
              <img
                src={logoutHover}
                alt='Logout Hover'
                className={styles.logoutIconHover}
              />
            </div>
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

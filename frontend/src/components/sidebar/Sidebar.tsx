import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  arrow,
  categoryHover,
  category,
  compactLogo,
  fullLogo,
  gameHover,
  game,
  homeHover,
  home,
  logoutHover,
  logout,
  platformHover,
  platform,
} from '../../utils/icons';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  // Fecha o menu automaticamente em telas pequenas
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize(); // chama uma vez ao montar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <button
        className={styles.toggleBtn}
        onClick={toggleSidebar}
        style={{ left: isOpen ? '300px' : '80px' }}
        aria-label='Toggle sidebar'>
        <img
          src={arrow}
          alt='Toggle'
          className={`${styles.arrowIcon} ${!isOpen ? styles.rotated : ''}`}
        />
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
          <Link
            to='/logout'
            className={`${styles.navItem} ${!isOpen ? styles.logoutClosed : ''}`}>
            <div className={styles.iconWrapper}>
              <img
                src={logout}
                alt='Logout'
                className={styles.logoutIconDefault}
              />
              <img
                src={logoutHover}
                alt='Logout Hover'
                className={styles.logoutIconHover}
              />
            </div>
            {isOpen && <span>Logout</span>}
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

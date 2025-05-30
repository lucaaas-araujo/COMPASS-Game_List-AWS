import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

import fullLogo from '../../assets/logo.svg';
import compactLogo from '../../assets/logo-compact.svg';
import arrowIcon from '../../assets/arrow.svg';

import homeIcon from '../../assets/home.svg';
import homeHoverIcon from '../../assets/home-hover.svg';

import gameIcon from '../../assets/controller.svg';
import gameHoverIcon from '../../assets/controller-hover.svg';

import categoryIcon from '../../assets/pricetag.svg';
import categoryHoverIcon from '../../assets/pricetag-hover.svg';

import platformIcon from '../../assets/chip.svg';
import platformHoverIcon from '../../assets/chip-hover.svg';

import logoutIcon from '../../assets/logout.svg';
import logoutHoverIcon from '../../assets/logout-hover.svg';

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
          src={arrowIcon}
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
              <img src={homeIcon} alt='Home' className={styles.iconDefault} />
              <img
                src={homeHoverIcon}
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
              <img src={gameIcon} alt='Games' className={styles.iconDefault} />
              <img
                src={gameHoverIcon}
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
                src={categoryIcon}
                alt='Categories'
                className={styles.iconDefault}
              />
              <img
                src={categoryHoverIcon}
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
                src={platformIcon}
                alt='Platforms'
                className={styles.iconDefault}
              />
              <img
                src={platformHoverIcon}
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
                src={logoutIcon}
                alt='Logout'
                className={styles.logoutIconDefault}
              />
              <img
                src={logoutHoverIcon}
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

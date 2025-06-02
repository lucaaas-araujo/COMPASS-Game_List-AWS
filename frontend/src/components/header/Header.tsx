import type { HTMLAttributes } from 'react';
import { Button } from '../ui/button/Button';
import style from './Header.module.css';
import { arrow } from '../../utils/icons';
import { useSidebar } from '../../hooks/useSidebar';

type HeaderProps = HTMLAttributes<HTMLElement> & {
  title?: string;
  buttonText?: string;
  hiddenButton?: boolean;
  hiddenLine?: boolean;
};

export function Header({ title, buttonText, children, hiddenButton, hiddenLine, ...props }: HeaderProps) {
  
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <header className={style.header} {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          className={style.toggleBtn}
          onClick={toggleSidebar}
          style={{ left: isOpen ? '285px' : '75px' }}
          aria-label='Toggle sidebar'>
          <img
            src={arrow}
            alt='Toggle'
            className={`${style.arrowIcon} ${!isOpen ? style.rotated : ''}`}
          />
        </button>
        <h1 className={style.title}>{title}</h1>
      </div>

      { !hiddenButton && <Button>{buttonText}</Button>}
      {children}
      { !hiddenLine && <div className={style.line}></div>}
    </header>
  );
}

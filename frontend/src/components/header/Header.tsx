import type { HTMLAttributes } from 'react';
import { Button } from '../ui/button/button';
import style from './header.module.css';

type HeaderProps = HTMLAttributes<HTMLElement> & {
  title: string;
  buttonText: string;
};

export function Header({ title, buttonText, children, ...props }: HeaderProps) {
  return (
    <header className={style.header} {...props}>
      <h1 className={style.title}>{title}</h1>
        <Button>{buttonText}</Button>
        {children}
      <div className={style.line}></div>
    </header>
  );
}

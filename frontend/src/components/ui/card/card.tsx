import type { HTMLAttributes } from 'react';
import style from './card.module.css';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: 'modal' | 'auth';
};

export function Card({ variant = 'modal', ...props }: CardProps) {
  return <div className={style[variant]} {...props} />;
}

type CardHeader = HTMLAttributes<HTMLDivElement>;

export function CardHeader({ ...props }: CardHeader) {
  return <div className={style.cardHeader} {...props} />;
}

type CardTitle = HTMLAttributes<HTMLHeadingElement> & {
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
};

export function CardTitle({ tag = 'h3', ...props }: CardTitle) {
  const Tag = tag;

  return <Tag className={style.cardTitle} {...props} />;
}

type CardDescription = HTMLAttributes<HTMLParagraphElement>;

export function CardDescription({ ...props }: CardDescription) {
  return <p className={style.cardDescription} {...props} />;
}

type CardContent = HTMLAttributes<HTMLDivElement>;

export function CardContent({ ...props }: CardContent) {
  return <div className={style.cardContent} {...props} />;
}

type CardFooter = HTMLAttributes<HTMLDivElement>;

export function CardFooter({ ...props }: CardFooter) {
  return <div className={style.cardFooter} {...props} />;
}

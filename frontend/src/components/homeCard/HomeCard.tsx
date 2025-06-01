import styles from './homeCard.module.css';
import { Button } from '../ui/button/button';

type HomeCardProps = {
  icon?: string;
  title?: string;
  count?: number;
  haveButton?: boolean;
};

export function HomeCard({
  icon,
  title,
  count,
  haveButton,
  ...props
}: HomeCardProps) {
  return (
    <div className={styles.card} {...props}>
      <div className={styles.top}>
        <div className={styles.icon}>
          <img src={icon} />
          <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.count}>{count}</div>
      </div>

      <div className={styles.bottom}>
        {haveButton && <Button variant='white'>+ Add new</Button>}
      </div>
    </div>
  );
}

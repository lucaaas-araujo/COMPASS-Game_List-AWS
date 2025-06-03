import { Header } from '../../components/header/Header';
import { HomeCard } from '../../components/homeCard/HomeCard';
import { useCategory } from '../../hooks/useCategory';
import { useGame } from '../../hooks/useGame';
import { usePlatform } from '../../hooks/usePlatform';
import { useUser } from '../../hooks/useUser';
import { category, game, platform, starHome } from '../../utils/icons';
import styles from './Home.module.css';

export function Home() {
  const { gameCount } = useGame();
  const { categoryCount } = useCategory();
  const { platformCount } = usePlatform();
  const { user } = useUser();

  return (
    <main className={styles.container}>
      <Header hiddenButton hiddenLine >
        <h1>Hello{user?.full_name && `, ${user?.full_name}`}!</h1>
        <p>Choose one of options below.</p>
      </Header>
      <div className={styles.cardGrid}>
        <HomeCard haveButton icon={game} title='Games' count={gameCount} />
        <HomeCard
          haveButton
          icon={category}
          title='Categories'
          count={categoryCount}
        />
        <HomeCard
          haveButton
          icon={platform}
          title='Platforms'
          count={platformCount}
        />
        <HomeCard icon={starHome} title='Favorites Games' count={3} />
      </div>
    </main>
  );
}

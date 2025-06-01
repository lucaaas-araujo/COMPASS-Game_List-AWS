import { Header } from '../../components/header/Header';
import { HomeCard } from '../../components/homeCard/HomeCard';
import { useCategory } from '../../hooks/useCategory';
import { useGame } from '../../hooks/useGame';
import { usePlatform } from '../../hooks/usePlatform';
import { category, game, platform, starHome } from '../../utils/icons';
import styles from './Home.module.css';

export function Home() {
  const { gameCount } = useGame();
  const { categoryCount } = useCategory();
  const { platformCount } = usePlatform();

  return (
    <main className={styles.container}>
      <Header>
        <h1>Hello, Juan!</h1>
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

import { Header } from '../../components/header/Header';
import { HomeCard } from '../../components/homeCard/HomeCard';
import { useCategory } from '../../hooks/useCategory';
import { useGame } from '../../hooks/useGame';
import { category, game, platform, starHome } from '../../utils/icons';
import styles from './Home.module.css';

export function Home() {
  const { gameCount } = useGame();
  const { categoryCount } = useCategory();

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
        <HomeCard haveButton icon={platform} title='Platforms' count={4} />
        <HomeCard icon={starHome} title='Favorites Games' count={3} />
      </div>
    </main>
  );
}

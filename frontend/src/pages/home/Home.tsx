import { Header } from '../../components/header/Header';
import { HomeCard } from '../../components/homeCard/HomeCard';
import { useUser } from '../../hooks/useUser';
import { category, game, platform, starHome } from '../../utils/icons';
import { NewCategory } from '../category/forms/create/CreateCategories';
import { CreateGame } from '../games/forms/create/Create';
import { NewPlatform } from '../platform/forms/create/CreatePlatform';
import styles from './Home.module.css';

export function Home() {
  const { user, counts } = useUser();

  return (
    <main className={styles.container}>
      <Header hiddenButton hiddenLine>
        <h1>Hello{user?.full_name && `, ${user?.full_name}`}!</h1>
        <p>Choose one of options below.</p>
      </Header>

      <div className={styles.cardGrid}>
        <HomeCard
          haveButton
          icon={game}
          title='Games'
          count={counts?.games}
          createForm={<CreateGame />}
        />
        <HomeCard
          haveButton
          icon={category}
          title='Categories'
          count={counts?.categories}
          createForm={<NewCategory />}
        />
        <HomeCard
          haveButton
          icon={platform}
          title='Platforms'
          count={counts?.platforms}
          createForm={<NewPlatform />}
        />
        <HomeCard icon={starHome} title='Favorites Games' count={3} />
      </div>
    </main>
  );
}

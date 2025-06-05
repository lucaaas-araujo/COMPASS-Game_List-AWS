import { useEffect, useState } from 'react';

import { Header } from '../../components/header/Header';
import { HomeCard } from '../../components/homeCard/HomeCard';
import { useUser } from '../../hooks/useUser';
import { api } from '../../services/api';
import { category, game, platform, starHome } from '../../utils/icons';
import { NewCategory } from '../category/forms/create/CreateCategories';
import { CreateGame } from '../games/forms/create/Create';
import { NewPlatform } from '../platform/forms/create/CreatePlatform';

import styles from './Home.module.css';

export function Home() {
  const [metadata, setMetata] = useState({
    gamesCount: 0,
    favoriteGamesCount: 0,
    categoriesCount: 0,
    platformCount: 0,
  });

  const { user } = useUser();

  useEffect(() => {
    const getMetadata = async () => {
      const res = await api.get('/metadata');
      setMetata(res.data);
    };

    getMetadata();
  }, []);
  console.log(metadata);
  

  return (
    <main className={styles.container}>
      <Header hiddenButton hiddenLine>
        <h1>Hello, {user?.full_name}!</h1>
        <p>Choose one of options below.</p>
      </Header>

      <div className={styles.cardGrid}>
        <HomeCard
          haveButton
          icon={game}
          title='Games'
          count={metadata.gamesCount}
          createForm={<CreateGame />}
        />
        <HomeCard
          haveButton
          icon={category}
          title='Categories'
          count={metadata.categoriesCount}
          createForm={<NewCategory />}
        />
        <HomeCard
          haveButton
          icon={platform}
          title='Platforms'
          count={metadata.platformCount}
          createForm={<NewPlatform />}
        />
        <HomeCard
          icon={starHome}
          title='Favorites Games'
          count={metadata.favoriteGamesCount}
        />
      </div>
    </main>
  );
}

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
import { Link } from 'react-router-dom';

export function Home() {
  const [summary, setSummary] = useState({
    gamesCount: 0,
    favoriteGamesCount: 0,
    categoriesCount: 0,
    platformCount: 0,
  });

  const { user } = useUser();

  useEffect(() => {
    const getSummary = async () => {
      const res = await api.get('/summary');

      console.log(res.data);
      
      setSummary(res.data);
    };

    getSummary();
  }, []);

  return (
    <main className={styles.container}>
      <Header hiddenButton hiddenLine>
        <div className={styles.textHome}>
          <h1>Hello, {user?.full_name}!</h1>
          <p>Choose one of options below.</p>
        </div>
      </Header>

      <div className={styles.cardGrid}>
        <Link to='/games' className={styles.cardLink}>
          <HomeCard
            haveButton
            icon={game}
            title='Games'
            count={summary.gamesCount}
            createForm={<CreateGame />}
          />
        </Link>

        <Link to='/categories' className={styles.cardLink}>
          <HomeCard
            haveButton
            icon={category}
            title='Categories'
            count={summary.categoriesCount}
            createForm={<NewCategory />}
          />
        </Link>

        <Link to='/platforms' className={styles.cardLink}>
          <HomeCard
            haveButton
            icon={platform}
            title='Platforms'
            count={summary.platformCount}
            createForm={<NewPlatform />}
          />
        </Link>

        <Link to='/games' className={styles.cardLink}>
          <HomeCard
            icon={starHome}
            title='Favorite Games'
            count={summary.favoriteGamesCount}
          />
        </Link>
      </div>
    </main>
  );
}

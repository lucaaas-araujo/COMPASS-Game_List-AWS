import { Header } from '../../components/header/Header';
import { useGame } from '../../hooks/useGame';
import HeaderList from '../../components/ui/headerList/HeaderList';
import ListItems from '../../components/ui/listItems/ListItems';
/* import DeleteModal from '../components/DeleteModal'; */
import { DetailsGame } from './forms/details/Details';
import { GameFilters } from '../../components/filterbar/Filterbar';
import { UpdateGame } from './forms/update/Update';
import style from './Games.module.css';
import { CreateGame } from './forms/create/Create';
import DeleteModal from '../components/DeleteModal';
import { useEffect, useState } from 'react';
import type { GameProps } from '../../types/Game';

export function Games() {
  const { getAll } = useGame();
  const headerFields = [
    { key: 'title', label: 'Title' },
    { key: 'category', label: 'Category' },
    { key: 'createdAt', label: 'Created At' },
    { key: 'updatedAt', label: 'Updated At' },
    { key: 'favorite', label: 'Favorite' },
  ];

  const handleSortClick = (key: string) => {
    console.log('Sort by:', key);
  };

  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const data = await getAll();
      setGames(data);
    };
    fetchGames();
  }, [getAll]);
  console.log(games);

  const gameList = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/40',
      title: 'Steam',
      category: 'Games',
      createdAt: '2022-01-01',
      status: 'Done',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/40',
      title: 'Epic Games',
      category: 'Games',
      createdAt: '2023-05-10',
      status: 'Playing',
    },
  ];

  return (
    <div>
      <div className={style.gamepage}>
        <Header title='Games' buttonText='New Game' createForm={<CreateGame />}>
          <GameFilters onSearch={() => {}} onClear={() => {}} />
        </Header>
        <HeaderList fields={headerFields} onSortClick={handleSortClick} />

        {gameList.map((game) => (
          <ListItems
            key={game.id}
            imageUrl={game.imageUrl}
            camp1={game.title}
            camp2={game.category}
            camp3={game.createdAt}
            iconDetails
            iconEdit
            iconDelete
            iconStar
            detailsForm={
              <DetailsGame
                deleteForm={
                  <DeleteModal
                    type='game'
                    onCancel={() => {}}
                    onDelete={() => {}}
                  />
                }
                updateForm={<UpdateGame />}
              />
            }
            editForm={<UpdateGame />}
            /* deleteForm={
              <DeleteModal
                type='game'
                onCancel={() => {}}
                onDelete={() => {}}
              />
            } */
            onStarClick={() => console.log('Star', game.id)}
          />
        ))}
      </div>
    </div>
  );
}

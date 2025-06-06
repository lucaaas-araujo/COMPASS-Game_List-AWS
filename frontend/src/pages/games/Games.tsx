import {
  GameFilters,
  type FiltersState,
} from '../../components/filterbar/Filterbar';
import { Header } from '../../components/header/Header';
import HeaderList from '../../components/ui/headerList/HeaderList';
import ListItems from '../../components/ui/listItems/ListItems';
import { useGame } from '../../hooks/useGame';
import { CreateGame } from './forms/create/Create';
import { DetailsGame } from './forms/details/Details';
import { UpdateGame } from './forms/update/Update';
import style from './Games.module.css';
/* import DeleteModal from '../components/DeleteModal'; */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import type { GameProps } from '../../types/Game';
import { formatDate } from '../../utils/formatDate';

export type SortHeaders = {
  sort: string;
  label: string;
};

const headers: SortHeaders[] = [
  { sort: 'title', label: 'Title' },
  { sort: 'category', label: 'Category' },
  { sort: 'createdAt', label: 'Created At' },
  { sort: 'updatedAt', label: 'Updated At' },
  { sort: 'favorite', label: 'Favorite' },
];

export function Games() {
  const [games, setGames] = useState<GameProps[]>([]);
  const [dir, setDir] = useState<'asc' | 'desc'>('asc');
  const { getAll, toggleIsFavorite } = useGame();

  const fetchGames = async () => {
    const data = await getAll({});

    setGames(data);
  };

  const handleFilters = async ({
    search,
    category,
    favorite,
  }: FiltersState) => {
    const _favorite = favorite === 'true' ? true : false;

    const games = await getAll({
      title: search,
      category,
      favorite: _favorite,
    });

    setGames(games);
  };

  const handleClearFilters = () => {
    fetchGames();
  };

  const handleSortClick = async (sort: string) => {
    setDir((prev) => (prev === 'asc' ? 'desc' : 'asc'));

    const games = await getAll({ sort, dir });

    setGames(games);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  /*  const handleDelete = async (id: string): Promise<boolean> =>{
    try{
      await remove(id);
      toast.success('Game excluded with success')
      fetchGames();
      return true;
    } catch (error){
      toast.error('Error excluding game')
      return false
    }
  } */

  const handleStarClick = async (game: GameProps) => {
    if (!game._id) {
      toast.error('Game ID not found!');
      return;
    }
    try {
      await toggleIsFavorite(game._id, !game.favorite);
      toast.success(
        `Game ${game.favorite ? 'removed from favorites' : 'added to favorites'}!`,
      );
      await fetchGames();
    } catch (error) {
      toast.error('Error updating favorite');
    }
  };

  return (
    <div>
      <div className={style.gamepage}>
        <Header
          title='Games'
          buttonText='NEW GAME'
          createForm={<CreateGame onCreated={fetchGames} />}>
          <GameFilters onSearch={handleFilters} onClear={handleClearFilters} />
        </Header>
        <HeaderList fields={headers} onSortClick={handleSortClick} />

        {games.map((game, index) => (
          <ListItems
            key={index}
            imageUrl={game.image_url}
            camp1={game.title}
            camp2={game.category}
            camp3={formatDate(String(game.createdAt))}
            iconDetails
            iconEdit
            iconDelete
            iconStar
            isStarred={game.favorite}
            detailsForm={
              <DetailsGame
                game={game}
                /* deleteForm={
                  <DeleteModal 
                    type='game'
                    onCancel={() => {}}
                    onDelete={() => false}
                  />
                }  */
                updateForm={<UpdateGame game={game} onCreated={fetchGames} />}
              />
            }
            editForm={<UpdateGame game={game} onCreated={fetchGames} />}
            /* deleteForm={
              <DeleteModal
                type='game'
                onCancel={() => {}}
                onDelete={() => {}}
              />
            } */
            onStarClick={() => handleStarClick(game)}
          />
        ))}
      </div>
    </div>
  );
}

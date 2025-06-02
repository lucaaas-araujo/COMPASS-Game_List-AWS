import { Header } from '../../components/header/Header';
import { GameFilters } from '../../components/filterbar/Filterbar';
import style from './Games.module.css';
import HeaderList from '../../components/ui/headerList/HeaderList';
import { useGame } from '../../hooks/useGame';
import { Dialog, DialogTrigger } from '../../components/ui/dialog/Dialog';
import { CreateGame } from './forms/create/Create';
import { UpdateGame } from './forms/update/Update';
import { DetailsGame } from './forms/details/Details';
export function Games() {
  const { getAll } = useGame();

  const headerFields = [
    { key: 'title', label: 'Title' },
    { key: 'category', label: 'Category' },
    { key: 'createdAt', label: 'Created At' },
    { key: 'updatedAt', label: 'Updated At' },
    { key: 'favorite', label: 'Favorite' },
  ];

  return (
    <div className={style.game}>
      <Header title='Games' buttonText='New Game'>
        <GameFilters onSearch={getAll} onClear={getAll} />
      </Header>
      <Dialog>
        <DialogTrigger>New Game</DialogTrigger>
        <CreateGame />
      </Dialog>
      <Dialog>
        <DialogTrigger>Update Game</DialogTrigger>
        <UpdateGame />
      </Dialog>
      <Dialog>
        <DialogTrigger>Details Game</DialogTrigger>
        <DetailsGame />
      </Dialog>
      <HeaderList fields={headerFields} />
      {/* Games Here */}
    </div>
  );
}

import { useEffect } from 'react';
import { gameServices } from '../../services';
import { Header } from '../../components/header/Header';
import {
  GameFilters,
  type FiltersState,
} from '../../components/filterbar/Filterbar';
import style from './Games.module.css';
import HeaderList from '../../components/ui/headerList/HeaderList';

export function Games() {
  const result = async () => {
    const getAll = await gameServices.getAll();
    console.log(getAll);
  };

  useEffect(() => {
    result();
  }, []);

  const handleSearch = (newFilters: FiltersState) => {
    return;
  };

  const handleClear = () => {
    return;
  };

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
        <GameFilters onSearch={handleSearch} onClear={handleClear} />
      </Header>
      <HeaderList fields={headerFields}></HeaderList>
    </div>
  );
}

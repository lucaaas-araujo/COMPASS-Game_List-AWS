import { useEffect, useState } from 'react';
import { Select, SelectItem, SelectGroup } from '../ui/select/Select';
import search from '../../assets/search.svg';
import { categoryServices } from '../../services'; // ajuste o caminho
import { Button } from '../ui/button/Button';
import { Input } from '../ui/input/Input';
import style from './Filterbar.module.css';

type Props = {
  onSearch: (filters: FiltersState) => void;
  onClear: () => void;
};

export type FiltersState = {
  search: string;
  category: string;
  favorite: string;
};

export const GameFilters = ({ onSearch, onClear }: Props) => {
  const [filters, setFilters] = useState<FiltersState>({
    search: '',
    category: '',
    favorite: '',
  });

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await categoryServices.getAll();
      const names = result.map((cat: { name: string }) => cat.name); // adaptável
      setCategories(names);
    };

    fetchCategories();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFilters((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  const handleClear = () => {
    setFilters({ search: '', category: '', favorite: '' });
    onClear();
  };

  return (
    <div className={style.filtercontainer}>
      <div className={style.querys}>
        <h3>Filters</h3>
        <Input
          type='text'
          name='search'
          variant='rounded'
          placeholder='Search Game'
          value={filters.search}
          onChange={handleChange}
        />

        <Select
          name='category'
          value={filters.category}
          variant='default'
          onChange={handleChange}>
          <SelectItem value=''>Select Category</SelectItem>
          {categories.map((cat) => (
            <SelectGroup>
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            </SelectGroup>
          ))}
        </Select>

        <Select
          name='favorite'
          variant='default'
          value={filters.favorite}
          onChange={handleChange}>
          <SelectItem value=''>Favorite status</SelectItem>
          <SelectItem value='true'>Yes</SelectItem>
          <SelectItem value='false'>No</SelectItem>
        </Select>
      </div>

      <div className={style.buttons}>
        <Button variant='gray' onClick={handleClear}>
          Clear
        </Button>
        <Button variant='turquoise' onClick={handleSearch}>
          <div className={style.searchbtn}>
            Search
            <img src={search} alt='Search' />
          </div>
        </Button>
      </div>
    </div>
  );
};

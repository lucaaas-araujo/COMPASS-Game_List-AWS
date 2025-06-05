import { useEffect, useState } from 'react';
import { Header } from '../../components/header/Header';
import ListItems from '../../components/ui/listItems/ListItems';
import styles from './Category.module.css';
import { NewCategory } from './forms/create/CreateCategories';
import { EditCategory } from './forms/update/UpdateCategories';
import { useCategory } from '../../hooks/useCategory';
import type { CategoryProps } from '../../types/Category';
import DeleteModal from '../components/DeleteModal';
import { toast } from 'react-toastify';
import HeaderList from '../../components/ui/headerList/HeaderList';
import { formatDate } from '../../utils/formatDate';

export type SortHeaders = {
  sort: string;
  label: string;
};

const headers: SortHeaders[] = [
  { sort: 'title', label: 'Title' },
  { sort: 'description', label: 'Description' },
  { sort: 'createdAt', label: 'Created At' },
  { sort: 'updatedAt', label: 'Updated At' },
];

export function Category() {
  const { getAll, remove } = useCategory();
  const [category, setCategory] = useState<CategoryProps[]>();
  const [dir, setDir] = useState<'asc' | 'desc'>('asc');

  const fetchCategories = async () => {
    const categories = await getAll({});
    setCategory(categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id: string): Promise<boolean> => {
    try {
      await remove(id);
      toast.success('Categoria excluída com sucesso!');
      fetchCategories();
      return true;
    } catch (error) {
      toast.error('Erro ao excluir categoria.');
      return false;
    }
  };

  const handleSort = async (sort: string) => {
    setDir((prev) => (prev === 'asc' ? 'desc' : 'asc'));

    const categories = await getAll({ sort, dir });
    setCategory(categories);
  };


  return (
    <div className={styles.container}>
      <Header
        title='Categories'
        buttonText='NEW CATEGORY'
        createForm={<NewCategory onCreated={fetchCategories} />}
      />

      <HeaderList fields={headers} onSortClick={handleSort} />

      {category?.map((cat) => (
        <ListItems
          key={cat._id}
          camp1={cat.title}
          camp2={cat.description}
          camp3={formatDate(String(cat.createdAt))}
          camp4={formatDate(String(cat.updatedAt))}
          iconEdit
          iconDelete
          editForm={<EditCategory category={cat} onCreated={fetchCategories} />}
          deleteForm={
            <DeleteModal
              type={'category'}
              onDelete={() => handleDelete(cat._id)}
            />
          }
        />
      ))}
    </div>
  );
}

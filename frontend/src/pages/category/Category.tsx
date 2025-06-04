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

export function Category() {
  const { getAll, remove } = useCategory();
  const [category, setCategory] = useState<CategoryProps[]>();
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const fetchCategories = async () => {
    const categories = await getAll();
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

  const handleSort = (key: string) => {
    let asc = sortAsc;
    if (sortKey === key) {
      asc = !asc;
      setSortAsc(asc);
    } else {
      asc = true;
      setSortAsc(true);
    }
    setSortKey(key);

    if (!category) return;

    const sorted = [...category].sort((a, b) => {
      const aValue = a[key as keyof CategoryProps] ?? '';
      const bValue = b[key as keyof CategoryProps] ?? '';
      if (aValue < bValue) return asc ? -1 : 1;
      if (aValue > bValue) return asc ? 1 : -1;
      return 0;
    });
    setCategory(sorted);
  };

  function formatDate(dateString?: string) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hour}:${min}`;
  }

  return (
    <div className={styles.container}>
      <Header
        title='Categories'
        buttonText='NEW CATEGORY'
        createForm={<NewCategory onCreated={fetchCategories} />}
      />

      <HeaderList
        fields={[
          { key: 'title', label: 'Name' },
          { key: 'description', label: 'Description' },
          { key: 'createdAt', label: 'Created At' },
          { key: 'updatedAt', label: 'Updated At' },
        ]}
        onSortClick={handleSort}
      />

      {category?.map((cat) => (
        <ListItems
          key={cat._id}
          camp1={cat.title}
          camp2={cat.description}
          camp3={formatDate(cat.createdAt)}
          camp4={formatDate(cat.updatedAt)}
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

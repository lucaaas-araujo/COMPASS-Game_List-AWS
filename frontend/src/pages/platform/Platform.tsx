import { useEffect, useState } from 'react';

import { Header } from '../../components/header/Header';
import HeaderList from '../../components/ui/headerList/HeaderList';
import ListItems from '../../components/ui/listItems/ListItems';
import { usePlatform } from '../../hooks/usePlatform';
import type { PlatformProps } from '../../types/Platform';
import { formatDate } from '../../utils/formatDate';
import { NewPlatform } from './forms/create/CreatePlatform';
import DeleteModal from '../components/DeleteModal';
import { EditPlatform } from './forms/update/UpdatePlatform';
import styles from './Platform.module.css';
import { toast } from 'react-toastify';

export type SortHeaders = {
  sort: string;
  label: string;
};

const headers: SortHeaders[] = [
  { sort: 'title', label: 'Title' },
  { sort: 'company', label: 'Company' },
  { sort: 'acquisition_year', label: 'Acquisition year' },
  { sort: 'createdAt', label: 'Created at' },
  { sort: 'updatedAt', label: 'Updated at' },
];

export const Platform = () => {
  const [platforms, setPlatforms] = useState<PlatformProps[]>();
  const [dir, setDir] = useState<'asc' | 'desc'>('asc');
  const { getAll } = usePlatform();

  const handleSortClick = async (sort: string) => {
    setDir((prev) => (prev === 'asc' ? 'desc' : 'asc'));

    const platforms = await getAll({ sort, dir });

    setPlatforms(platforms);
  };

  const fetchPlatforms = async () => {
    const platforms = await getAll({});
    setPlatforms(platforms);
  };

  useEffect(() => {
    fetchPlatforms();
  }, []);

  const { remove } = usePlatform();

  const handleDelete = async (id: string): Promise<boolean> => {
    console.log('Tentando deletar plataforma com ID:', id);
    try {
      await remove(id.toString());
      toast.success('Plataforma excluída com sucesso!');
      fetchPlatforms();
      return true;
    } catch (error) {
      console.error('Erro ao excluir plataforma:', error);
      toast.error('Erro ao excluir plataforma.');
      return false;
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <Header
        title='Platforms'
        buttonText='NEW PLATFORM'
        createForm={<NewPlatform oncreated={fetchPlatforms} />}
      />
      <div className={styles.platformContainer}>
        <HeaderList fields={headers} onSortClick={handleSortClick} />
        {platforms &&
          platforms.map((platform, index) => {
            console.log(platform);
            return (
              <ListItems
                key={index}
                imageUrl={
                  platform.image_url ? `/${platform.image_url}` : '/default.png'
                }
                camp1={platform.title}
                camp2={platform.company}
                camp3={formatDate(String(platform.acquisition_year))}
                camp4={formatDate(String(platform.createdAt))}
                camp5={formatDate(String(platform.updatedAt))}
                iconDetails
                iconEdit
                iconDelete
                editForm={<EditPlatform />}
                deleteForm={
                  <DeleteModal
                    type='platform'
                    onDelete={() => handleDelete(platform._id)}
                  />
                }
                onStarClick={() => console.log('Star', platform)}
              />
            );
          })}
      </div>{' '}
      {/* <<< Este <div> precisa fechar aqui */}
    </div>
  );
};

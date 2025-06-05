import { useEffect, useState } from 'react';

import { Header } from '../../components/header/Header';
import HeaderList from '../../components/ui/headerList/HeaderList';
import ListItems from '../../components/ui/listItems/ListItems';
import { usePlatform } from '../../hooks/usePlatform';
import type { PlatformProps } from '../../types/Platform';
import { formatDate } from '../../utils/formatDate';
import { NewPlatform } from './forms/create/CreatePlatform';
import { EditPlatform } from './forms/update/UpdatePlatform';

import styles from './Platform.module.css';
import { ToastContainer } from 'react-toastify';
import { formatDateYear } from '../../utils/formatDateYear';

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

  return (
    <div className={styles.pageWrapper}>
      <ToastContainer position='top-right' autoClose={2000} />
      <Header
        title='Platforms'
        buttonText='NEW PLATFORM'
        createForm={<NewPlatform />}
      />

      <div className={styles.platformContainer}>
        <HeaderList fields={headers} onSortClick={handleSortClick} />

        {platforms &&
          platforms.map((platform, index) => (
            <ListItems
              key={index}
              imageUrl={platform.image_url}
              camp1={platform.title}
              camp2={platform.company}
              camp3={formatDateYear(String(platform.acquisition_year))}
              camp4={formatDateYear(String(platform.createdAt))}
              camp5={formatDateYear(String(platform.updatedAt))}
              iconDetails
              iconEdit
              iconDelete
              editForm={
                <EditPlatform platform={platform} onCreated={fetchPlatforms} />
              }
              // deleteForm={
              //   <DeleteModal type='platform' onDelete={() => false} />
              // }
              
            />
          ))}
      </div>
    </div>
  );
};

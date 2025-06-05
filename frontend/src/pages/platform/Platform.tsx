import { useEffect, useState } from 'react';

import { CustomPagination } from '../../components/customPagination/CustomPagination';
import { Header } from '../../components/header/Header';
import HeaderList from '../../components/ui/headerList/HeaderList';
import ListItems from '../../components/ui/listItems/ListItems';
import { usePlatform } from '../../hooks/usePlatform';
import type { PlatformProps } from '../../types/Platform';
import { formatDate } from '../../utils/formatDate';
import { per_page } from '../../utils/getPaginationItems';
import { NewPlatform } from './forms/create/CreatePlatform';
import { EditPlatform } from './forms/update/UpdatePlatform';
import styles from './Platform.module.css';

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
  const [page, setPage] = useState(1);
  const [platforms, setPlatforms] = useState<PlatformProps[]>([]);
  const [dir, setDir] = useState<'asc' | 'desc'>('asc');
  const { getAll, count } = usePlatform();

  const totalPages = Math.ceil(count / per_page);

  const handleSortClick = async (sort: string) => {
    setDir((prev) => (prev === 'asc' ? 'desc' : 'asc'));

    const platforms = await getAll({ sort, dir, page, per_page });

    setPlatforms(platforms);
  };

  const fetchPlatforms = async () => {
    const platforms = await getAll({ page, per_page });
    setPlatforms(platforms);
  };

  useEffect(() => {
    fetchPlatforms();
  }, [page]);

  return (
    <div className={styles.pageWrapper}>
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
              camp3={formatDate(String(platform.acquisition_year))}
              camp4={formatDate(String(platform.createdAt))}
              camp5={formatDate(String(platform.updatedAt))}
              iconDetails
              iconEdit
              iconDelete
              editForm={<EditPlatform />}
              // deleteForm={
              //   <DeleteModal type='platform' onDelete={() => false} />
              // }
              onStarClick={() => console.log('Star', platform)}
            />
          ))}
      </div>

      <CustomPagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

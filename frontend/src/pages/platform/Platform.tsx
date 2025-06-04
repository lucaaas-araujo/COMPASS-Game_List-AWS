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

export const Platform = () => {
  const [platforms, setPlatforms] = useState<PlatformProps[]>();
  const { getAll } = usePlatform();

  const headers = [
    { key: 'title', label: 'Title' },
    { key: 'company', label: 'Company' },
    { key: 'acquisitionYear', label: 'Acquisition year' },
    { key: 'createdAt', label: 'Created at' },
    { key: 'updatedAt', label: 'Updated at' },
  ];

  useEffect(() => {
    const fetchPlatforms = async () => {
      const platforms = await getAll();
      setPlatforms(platforms);
    };
    fetchPlatforms();
  }, []);

  const handleSortClick = (key: string) => {
    console.log('Sort by:', key);
  };

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
    </div>
  );
};

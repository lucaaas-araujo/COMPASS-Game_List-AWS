import { Header } from '../../components/header/Header';
import HeaderList from '../../components/ui/headerList/HeaderList';
import styles from './Platform.module.css';

import { NewPlatform } from './forms/create/CreatePlatform';
import { useEffect, useState } from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import type { PlatformProps } from '../../types/Platform';
import { EditPlatform } from './forms/update/UpdatePlatform';
import ListItems from '../../components/ui/listItems/ListItems';
import DeleteModal from '../components/DeleteModal';
import { formatDate } from '../../utils/formatDate';

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
  console.log(platforms);
  platforms?.map((platform) => {
    console.log(platform.acquisition_year);
  });

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
              camp3={
                platform.acquisition_year &&
                formatDate(platform.acquisition_year)
              }
              /* camp4={platform.createdAt}
              camp5={platform.updatedAt} */
              iconDetails
              iconEdit
              iconDelete
              editForm={<EditPlatform />}
              deleteForm={
                <DeleteModal type='platform' onDelete={() => false} />
              }
              onStarClick={() => console.log('Star', platform)}
            />
          ))}
      </div>
    </div>
  );
};

import { useState } from 'react';
import { Header } from '../../components/header/Header';
import HeaderList from '../../components/ui/headerList/HeaderList';
import ListItems from '../../components/ui/listItems/ListItems';
import  DeleteModal  from '../components/DeleteModal'; 

import { EditPlatform } from './forms/update/UpdatePlatform';

import styles from './Platform.module.css';
import epic from '../../images/epic.svg';
import mario from '../../images/mario.svg';

export const Platform = () => {
  const [platformToDelete, setPlatformToDelete] = useState<number | null>(null);

  const headers = [
    { key: 'title', label: 'Title' },
    { key: 'company', label: 'Company' },
    { key: 'acquisitionYear', label: 'Acquisition year' },
    { key: 'createdAt', label: 'Created at' },
    { key: 'updatedAt', label: 'Updated at' },
  ];

  const handleSortClick = (key: string) => {
    console.log('Sort by:', key);
  };

  const platformList = [
    {
      id: 1,
      imageUrl: mario,
      title: 'Nintendo Switch',
      company: 'Nintendo',
      acquisitionYear: '08/12/2021',
      createdAt: '08/12/2021',
      updatedAt: '',
    },
    {
      id: 2,
      imageUrl: epic,
      title: 'Epic Games',
      company: 'Epic',
      acquisitionYear: '08/12/2021',
      createdAt: '08/12/2021',
      updatedAt: '',
    },
  ];

  const handleCancel = () => {
    setPlatformToDelete(null);
  };

  const handleDelete = () => {
    console.log('Deletando plataforma ID:', platformToDelete);
    setPlatformToDelete(null);
  };

  return (
    <div className={styles.pageWrapper}>
      <Header title="Platforms" buttonText="NEW PLATFORM" />

      <div className={styles.platformContainer}>
        <HeaderList fields={headers} onSortClick={handleSortClick} />

       {platformList.map((platform) => (
  <ListItems
    key={platform.id}
    imageUrl={platform.imageUrl}
    camp1={platform.title}
    camp2={platform.company}
    camp3={platform.acquisitionYear}
    camp4={platform.createdAt}
    camp5={platform.updatedAt}
    iconDetails
    iconEdit
    iconDelete
    editForm={<EditPlatform />}
    deleteForm={
      platformToDelete === platform.id ? (
        <DeleteModal
          type="platform"
          onCancel={handleCancel}
          onDelete={handleDelete}
        />
      ) : null
    }
    onStarClick={() => console.log('Star', platform.id)}
    onDeleteClick={() => setPlatformToDelete(platform.id)}
  />
))}

      </div>
    </div>
  );
};

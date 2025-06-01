// src/pages/categories/Categories.tsx

import React from 'react';
import { Header } from '../../components/header/Header';
import HeaderList from '../../components/ui/headerList/HeaderList';
import ListItems from '../../components/ui/listItems/ListItems';

import styles from './Categories.module.css';

export const Categories: React.FC = () => {
  const headerFields = [
    { key: 'name', label: 'Name' },
    { key: 'description', label: 'Description' },
    { key: 'createdAt', label: 'Created at' },
    { key: 'updatedAt', label: 'Updated at' },
  ];

  return (
    <div className={styles.container}>
      <Header title="Categories" buttonText="NEW CATEGORY" />

      <HeaderList fields={headerFields} onSortClick={(key) => console.log(`Ordenar por ${key}`)} />

      <ListItems
        camp1="Racing"
        camp2=""
        camp3="08/12/2021 10:20"
        camp4="08/12/2021 10:20"
        iconEdit
        iconDelete
      />
    </div>
  );
};

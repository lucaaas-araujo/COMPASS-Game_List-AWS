import React from 'react';
import { Header } from '../../components/header/Header';
import HeaderList from '../../components/ui/headerList/HeaderList';
import ListItems from '../../components/ui/listItems/ListItems';

import marioImg from '../../images/mario.svg';
import epicImg from '../../images/epic.svg';

import styles from './Platforms.module.css'; // Importa o CSS Module

export const Plataforms: React.FC = () => {
  const headerFields = [
    { key: 'title', label: 'Title' },
    { key: 'company', label: 'Company' },
    { key: 'acquisition', label: 'Acquisition year' },
    { key: 'createdAt', label: 'Created at' },
    { key: 'updatedAt', label: 'Updated at' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <Header title="Plataforms" buttonText="NEW PLATFORM" />
      </div>

      <HeaderList fields={headerFields} onSortClick={(key) => console.log(`Ordenar por ${key}`)} />

      <ListItems
        imageUrl={marioImg}
        camp1="Nintendo Switch"
        camp2="Nintendo"
        camp3="08/12/2021"
        camp4="08/12/2021"
        camp5=""
        iconView
        iconEdit
        iconDelete
      />

      <ListItems
        imageUrl={epicImg}
        camp1="Epic Games"
        camp2="Epic"
        camp3="08/12/2021"
        camp4="08/12/2021"
        camp5=""
        iconView
        iconEdit
        iconDelete
      />
    </div>
    
  );
};

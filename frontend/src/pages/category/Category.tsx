import { useEffect } from 'react';
import { Header } from '../../components/header/Header';
import ListItems from '../../components/ui/listItems/ListItems';
import DeleteModal from '../components/DeleteModal';

import styles from './Category.module.css';
import { NewCategory } from './forms/create/CreateCategories';
import { EditCategory } from './forms/update/UpdateCategories';
import { DeleteCategoryConfirm } from './forms/delete/DeleteCategory';
import { DialogContent } from '../../components/ui/dialog/Dialog';
import DeleteModal from '../components/DeleteModal';

export function Category() {
  const { getAll, allCategories, remove } = useCategory();

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className={styles.container}>
      <Header title='Categories' buttonText='NEW CATEGORY' createForm={<NewCategory />} />

      {/* <HeaderList
        fields={headerFields}
        onSortClick={(key) => console.log(`Ordenar por ${key}`)}
      />

      <ListItems
        camp1='Racing'
        camp2=''
        camp3='08/12/2021 10:20'
        camp4='08/12/2021 10:20'
        iconEdit
        iconDelete
        editForm={<EditCategory />}
        deleteForm={<DeleteModal type='category' onDelete={() => false } />}
      />
    </div>
  );
}

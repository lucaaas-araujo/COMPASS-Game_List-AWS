import HeaderList from '../../components/ui/headerList/HeaderList';
import ListItems from '../../components/ui/listItems/ListItems';
// import { Delete } from './form/Delete';
// import { Details } from './form/Details';
// import { Edit } from './form/Edit';
import styles from './Platform.module.css';

export const Platform = () => {
  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'category', label: 'Category' },
    { key: 'createdAt', label: 'Created At' },
  ];

  const handleSortClick = (key: string) => {
    console.log('Sort by:', key);
  };

  const platformList = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/40',
      name: 'Steam',
      category: 'Games',
      createdAt: '2022-01-01',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/40',
      name: 'Epic Games',
      category: 'Games',
      createdAt: '2023-05-10',
    },
  ];

  return (
    <div >
      <div className={styles.platform}>
        <HeaderList fields={headers} onSortClick={handleSortClick} />
        
        {platformList.map((platform) => (
          <ListItems
            key={platform.id}
            imageUrl={platform.imageUrl}
            camp1={platform.name}
            camp2={platform.category}
            camp3={platform.createdAt}
            iconDetails
            iconEdit
            iconDelete
            iconStar
            // detailsForm={<Details data={platform} />}
            // editForm={<Edit data={platform} />}
            // deleteForm={<Delete data={platform} />}
            onStarClick={() => console.log('Star', platform.id)}
          />
        ))}
      </div>
    </div>
  );
};

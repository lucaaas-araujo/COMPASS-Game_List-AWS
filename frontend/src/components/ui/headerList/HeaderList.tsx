import React from 'react';

import styles from './HeaderList.module.css';
import orderListIcon from '../../../assets/orderList.svg';

interface Header {
  key: string;
  label: string;
}

interface HeaderListProps {
  fields: Header[];
  onSortClick?: (key: string) => void;
}

const HeaderList: React.FC<HeaderListProps> = ({ fields, onSortClick }) => {
  return (
    <div className={styles.headerRow}>
    
      <div className={styles.imageSpace}></div>

      {fields.map(({ key, label }) => (
        <div
          key={key}
          className={styles.headerItem}
          onClick={() => onSortClick?.(key)}>
          {label}
            <img src={orderListIcon} alt="Order List" />
        </div>
      ))}

     
      <div className={styles.iconsSpace}></div>
    </div>
  );
};

export default HeaderList;

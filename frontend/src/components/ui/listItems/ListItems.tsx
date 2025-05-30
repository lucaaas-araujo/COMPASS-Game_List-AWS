import React, { useState } from 'react';
import styles from './ListItems.module.css';
import eye from '../../../assets/eye.svg';
import trash from '../../../assets/trash.svg';
import pen from '../../../assets/pen.svg';
import star from '../../../assets/star.svg';
import starFilled from '../../../assets/star_filled.svg';

interface ListItemsProps {
  imageUrl?: string;
  camp1?: string;
  camp2?: string;
  camp3?: string;
  camp4?: string;
  camp5?: string;
  iconView?: true;
  iconEdit?: true;
  iconDelete?: true;
  iconStar?: boolean;
  onViewClick?: () => void;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
  onStarClick?: () => void;
}

const ListItems: React.FC<ListItemsProps> = ({
  imageUrl,
  camp1,
  camp2,
  camp3,
  camp4,
  camp5,
  iconView,
  iconEdit,
  iconDelete,
  iconStar,
  onViewClick,
  onEditClick,
  onDeleteClick,
  onStarClick,
}) => {
  const [starred, setStarred] = useState(false);

  const handleStarClick = () => {
    setStarred((prev) => !prev);
    onStarClick?.();
  };

  return (
    <div className={styles.cardContainer}>
      {imageUrl && (
        <div className={styles.imageWrapper}>
          <img src={imageUrl} alt='Card Icon' className={styles.cardImage} />
        </div>
      )}
      <div className={styles.cardTexts}>
        <span>{camp1 ?? ''}</span>
        <span>{camp2 ?? ''}</span>
        <span>{camp3 ?? ''}</span>
        <span>{camp4 ?? ''}</span>
        <span>{camp5 ?? ''}</span>
      </div>
      <div className={styles.cardIcons}>
        {iconStar && (
          <img
            src={starred ? starFilled : star}
            alt={starred ? 'Star Filled' : 'Star'}
            className={styles.icon}
            onClick={handleStarClick}
          />
        )}
        {iconView && (
          <img
            src={eye}
            alt='View'
            className={styles.icon}
            onClick={() => onViewClick?.()}
          />
        )}
        {iconEdit && (
          <img
            src={pen}
            alt='Edit'
            className={styles.icon}
            onClick={() => onEditClick?.()}
          />
        )}
        {iconDelete && (
          <img
            src={trash}
            alt='Delete'
            className={styles.icon}
            onClick={() => onDeleteClick?.()}
          />
        )}
      </div>
    </div>
  );
};

export default ListItems;
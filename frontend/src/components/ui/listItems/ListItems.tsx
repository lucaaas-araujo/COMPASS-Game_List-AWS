import React, { useState, type ReactNode } from 'react';

import { eye, pen, star, starFilled, trash } from '../../../utils/icons';
import { Dialog, DialogTrigger } from '../dialog/Dialog';

import styles from './ListItems.module.css';

interface ListItemsProps {
  imageUrl?: string;
  camp1?: string;
  camp2?: string;
  camp3?: string;
  camp4?: string;
  camp5?: string;
  iconDetails?: true;
  iconEdit?: true;
  iconDelete?: true;
  iconStar?: boolean;
  detailsForm?: ReactNode;
  editForm?: ReactNode;
  deleteForm?: ReactNode;
  onStarClick?: () => void;
  onDeleteClick?: () => void;
}

const ListItems: React.FC<ListItemsProps> = ({
  imageUrl,
  camp1,
  camp2,
  camp3,
  camp4,
  camp5,
  iconDetails,
  iconEdit,
  iconDelete,
  iconStar,
  detailsForm,
  editForm,
  deleteForm,
  onStarClick,
}) => {
  const [starred, setStarred] = useState(false);

  const handleStarClick = () => {
    setStarred((prev) => !prev);
    onStarClick?.();
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        {imageUrl && (
          <img src={imageUrl} alt='Card Icon' className={styles.cardImage} />
        )}
      </div>

      <div className={styles.cardTexts}>
        <span>{camp1 || ''}</span>
        <span>{camp2 || ''}</span>
        <span>{camp3 || ''}</span>
        <span>{camp4 || ''}</span>
        {iconStar && (
          <img
            src={starred ? starFilled : star}
            alt={starred ? 'Star Filled' : 'Star'}
            className={styles.icon}
            onClick={handleStarClick}
          />
        )}
      </div>

      <div className={styles.cardIcons}>
        {iconDetails && (
          <Dialog>
            <DialogTrigger>
              <img src={eye} alt='View' className={styles.icon} />
            </DialogTrigger>
            {detailsForm}
          </Dialog>
        )}
        {iconEdit && (
          <Dialog>
            <DialogTrigger>
              <img src={pen} alt='Edit' className={styles.icon} />
            </DialogTrigger>
            {editForm}
          </Dialog>
        )}
        {iconDelete && (
          <Dialog>
            <DialogTrigger>
              <button className={styles.icon}>
                <img src={trash} alt='Delete' />
              </button>
            </DialogTrigger>
            {deleteForm}
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default ListItems;

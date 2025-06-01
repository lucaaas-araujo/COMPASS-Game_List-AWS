import React from 'react';
import styles from './DeleteModal.module.css';
import { warning } from '../../utils/icons';

type DeleteType = 'platform' | 'category' | 'game';

interface DeleteModalProps {
  type: DeleteType;
  onCancel: () => void;
  onDelete: () => void;
}

const getDeleteMessage = (type: DeleteType): string => {
  switch (type) {
    case 'platform':
      return 'Deleting this platform will remove it permanently from the system. This action is not reversible.';
    case 'category':
      return 'Deleting this category will remove all games associated. This action is not reversible.';
    case 'game':
      return 'Deleting this game will remove it permanently from the system. This action is not reversible.';
    default:
      return '';
  }
};

const DeleteModal: React.FC<DeleteModalProps> = ({ type, onCancel, onDelete }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onCancel}>
          ×
        </button>
        <div className={styles.iconWrapper}>
          <img src={warning} alt="Warning" />
        </div>
        <h2 className={styles.title}>Are you sure?</h2>
        <p className={styles.message}>{getDeleteMessage(type)}</p>
        <div className={styles.actions}>
          <button className={styles.cancelBtn} onClick={onCancel}>
            No, cancel action
          </button>
          <button className={styles.deleteBtn} onClick={onDelete}>
            Yes, delete this
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

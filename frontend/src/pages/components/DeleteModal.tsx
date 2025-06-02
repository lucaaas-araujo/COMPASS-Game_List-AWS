import React from 'react';
import styles from './DeleteModal.module.css';
import { warning } from '../../utils/icons';
import { Button } from '../../components/ui/button/Button';
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../../components/ui/dialog/Dialog';


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

const getDeleteButtonLabel = (type: DeleteType): string => {
  return `Yes, delete this ${type}`;
};

const DeleteModal: React.FC<DeleteModalProps> = ({ type, onCancel, onDelete }) => {
  return (
    <DialogContent className={styles.modal}>
       <div className={styles.iconWrapper}>
        <img src={warning} alt="Warning" />
      </div>
      <DialogHeader>
        <DialogTitle className={styles.title}>Are you sure?</DialogTitle>
        <DialogClose onClick={onCancel} className={styles.closeBtn}>
          ×
        </DialogClose>
      </DialogHeader>
      
     
      
      <p className={styles.message}>{getDeleteMessage(type)}</p>
      
      <DialogFooter className={styles.actions}>
        <Button className={styles.cancelBtn} onClick={onCancel}>
          No, cancel action
        </Button>
        <Button className={styles.deleteBtn} onClick={onDelete}>
          {getDeleteButtonLabel(type)}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default DeleteModal;
import { Button } from '../../../../components/ui/button/Button';
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../../../components/ui/dialog/Dialog';
import { Input } from '../../../../components/ui/input/Input';

import { useState } from 'react';
import { Label } from '../../../../components/ui/label/Label';
import style from './UpdateCategories.module.css';

export function EditCategory({category}: EditCategoryProps) {
  const [title, setTitle] = useState(category.name);
  const [description, setDescription] = useState(category.description || '');
  const { update } = useCategory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await update({
      _id: category._id,
      name: title,
      description: description,
      user_id: category.user_id,
    });
    // Aqui você pode fechar o modal ou dar feedback ao usuário
  };

  return (
    <div className={style.editCategory}>
      <DialogContent className={style.dialogContent}>
        <DialogHeader>
          <DialogTitle className={style.dialogTitle}>Edit category</DialogTitle>
          <DialogClose />
        </DialogHeader>

        <form className={style.form} >
          <div className={style.formGroup}>
            
            <Label asterisk>Title</Label>

            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className={style.formGroup}>
            <label>Description</label>
            <textarea
              placeholder='Enter category description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={style.textarea}
            />
          </div>
        </form>

        <DialogFooter>
          <Button onClick={handleSubmit}>
            <p>Edit category</p>
            <p>+</p>
          </Button>
        </DialogFooter>
      </DialogContent>
    </div>
  );
}

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
import { useCategory } from '../../../../hooks/useCategory';
import type { EditCategoryWithOnCreatedProps } from '../../../../types/Category';
import { toast, ToastContainer } from 'react-toastify';
import { useDialog } from '../../../../hooks/useDialog';




export function EditCategory({
  category,
  onCreated,
}: EditCategoryWithOnCreatedProps) {
  const [title, setTitle] = useState(category.title);
  const [description, setDescription] = useState(category.description || '');
  const { update } = useCategory();
  const { closeDialog } = useDialog();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação
    if (title.trim().length < 3) {
      toast.error('O título deve ter pelo menos 3 caracteres.');
      return;
    }

    try {
      await update({
        category: category,
        categoryData: {
          title: title,
          description: description,
        },
        itemId: category._id,
      });
      toast.success('Categoria atualizada com sucesso!');
      closeDialog();
      onCreated();
    } catch (error) {
      toast.error('Erro ao atualizar categoria.');
    }
  };


  return (
    <div className={style.editCategory}>
      {/* <ToastContainer position='top-right' autoClose={2000} /> */}
      <DialogContent className={style.dialogContent}>
        <DialogHeader>
          <DialogTitle className={style.dialogTitle}>Edit category</DialogTitle>
          <DialogClose />
        </DialogHeader>

        <form className={style.form}>
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

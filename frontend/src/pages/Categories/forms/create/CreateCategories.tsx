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
import style from './CreateCategories.module.css';
import { Textarea } from '../../../../components/ui/textarea/Textarea';

export function NewCategory() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className={style.newCategory}>
      <DialogContent className={style.dialogContent}>
        <DialogHeader>
          <DialogTitle className={style.dialogTitle}>New category</DialogTitle>
          <DialogClose />
        </DialogHeader>

        <form className={style.form}>
          <div className={style.formGroup}>
            <label>
              Title<span className={style.required}>*</span>
            </label>
            <Input
              placeholder='Mario Kart 8'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={style.formGroup}>
            <label>Description</label>
            <Textarea
              placeholder='Amazing game'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </form>

        <DialogFooter>
          <Button>
            <p>Save category</p>
            <p>+</p>
          </Button>
        </DialogFooter>
      </DialogContent>
    </div>
  );
}

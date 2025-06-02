import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from '../../../../components/ui/dialog/Dialog';
import { Input } from '../../../../components/ui/input/Input';
import { useState } from 'react';
import { Button } from '../../../../components/ui/button/Button';
import {
  Select,
  SelectGroup,
  SelectItem,
} from '../../../../components/ui/select/Select';
import style from './Update.module.css';

export const UpdateGame = () => {
  const [new_title, setNewTitle] = useState('');
  const [new_description, setNewDescription] = useState('');
  const [category, setCategory] = useState('');
  const [new_status, setNewStatus] = useState('');
  const [plataform, setPlatform] = useState('');
  const [url_image, setUrlImage] = useState('');

  return (
    <div className={style.newGame}>
      <DialogContent className={style.dialogContent}>
        <DialogHeader>
          <DialogTitle className={style.dialogTitle}>
            Editing: NAME GAME
          </DialogTitle>
          <DialogClose className={style.dialogClose} />
        </DialogHeader>

        <form className={style.form}>
          <div className={style.formGroup}>
            <label>
              Title<span className={style.required}>*</span>
            </label>
            <div>
              <Input
                placeholder={'title'}
                value={new_title}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
          </div>

          <div className={style.formGroup}>
            <label>Description</label>
            <div>
              <textarea
                placeholder={'description'}
                value={new_description}
                onChange={(e) => setNewDescription(e.target.value)}
                className={style.textarea}
              />
            </div>
          </div>

          <div className={style.containerData}>
            <div className={style.containerRow}>
              <div className={style.formGroup}>
                <label htmlFor='category'>
                  Category <span className={style.required}>*</span>
                </label>
                <Select
                  variant='modal'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}>
                  <SelectGroup>
                    <SelectItem>Select Category</SelectItem>
                  </SelectGroup>
                </Select>
              </div>
              <div className={style.formGroup}>
                <label htmlFor='plataform'>
                  Plataform <span className={style.required}>*</span>
                </label>
                <Select
                  variant='modal'
                  value={plataform}
                  onChange={(e) => setPlatform(e.target.value)}>
                  <SelectGroup>
                    <SelectItem>Select Plataform</SelectItem>
                  </SelectGroup>
                </Select>
              </div>
            </div>

            <div className={style.containerRow}>
              <div className={style.formGroup}>
                <label htmlFor='status'>
                  Status <span className={style.required}>*</span>
                </label>
                <Select
                  variant='modal'
                  value={new_status}
                  onChange={(e) => setNewStatus(e.target.value)}>
                  <SelectGroup>
                    <SelectItem value={''}>Select Status</SelectItem>
                  </SelectGroup>
                </Select>
              </div>
            </div>
          </div>

          <div className={style.formGroup}>
            <label htmlFor='image_url'>Imagem (URL)</label>
            <div>
              <Input
                type='text'
                placeholder='http://cdn...'
                value={url_image}
                onChange={(e) => setUrlImage(e.target.value)}
              />
            </div>
          </div>
        </form>

        <DialogFooter>
          <Button>
            <p className={style.button}>CONFIRM</p>
          </Button>
        </DialogFooter>
      </DialogContent>
    </div>
  );
};

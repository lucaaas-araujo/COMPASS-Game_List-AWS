import { Button } from '../../../../components/ui/button/Button';
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../../../components/ui/dialog/Dialog';
import { Input } from '../../../../components/ui/input/Input';

import { Label } from '../../../../components/ui/label/Label';

import { useState, type FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useDialog } from '../../../../hooks/useDialog';
import { usePlatform } from '../../../../hooks/usePlatform';
import style from './CreatePlatform.module.css';

export function NewPlatform() {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [acquisition_year, setAcquisition_year] = useState('');
  const [image_url, setImage_Url] = useState('');
  const { closeDialog } = useDialog();
  const { create } = usePlatform();

  const formatDateForInput = (dateString?: string) => {
    if (!dateString) return '';

    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const year = new Date(acquisition_year);
    const newPlatform = { acquisition_year: year, company, image_url, title };

    try {
      await create(newPlatform);
      toast.success('Platform criada com sucesso!');
      closeDialog();
    } catch (error) {
      console.log(error);
      toast.error('Erro ao criar plataforma.');
    }
  };

  return (
    <div className={style.newPlatform}>
      <DialogContent className={style.dialogContent}>
        <DialogHeader>
          <DialogTitle className={style.dialogTitle}>New platform</DialogTitle>
          <DialogClose />
        </DialogHeader>

        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <Label>
              Title<span className={style.required}>*</span>
            </Label>
            <Input
              placeholder='Epic Games'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={style.formGroup}>
            <Label>Company</Label>
            <Input
              placeholder='Epic'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className={style.formGroup}>
            <Label>Acquisition year</Label>
            <Input
              type='date'
              placeholder='17/05/2019'
              value={formatDateForInput(acquisition_year)}
              onChange={(e) => setAcquisition_year(e.target.value)}
            />
          </div>

          <div className={style.formGroup}>
            <Label>Plataform image (url)</Label>
            <Input
              placeholder='http://cdn....'
              value={image_url}
              onChange={(e) => setImage_Url(e.target.value)}
            />
          </div>

          <DialogFooter>
            <Button type='submit'>
              <p>Save plataform</p>
              <p>+</p>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </div>
  );
}

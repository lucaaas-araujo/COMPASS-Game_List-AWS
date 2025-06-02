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
import style from './Create.module.css';

export const CreateGame = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [acquisition_date, setAcquisitionDate] = useState('');
  const [status, setStatus] = useState('');
  const [plataform, setPlatform] = useState('');
  const [finish_date, setFinishDate] = useState('');
  const [url_image, setUrlImage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const gameData = {
      title,
      description,
      category,
      acquisition_date,
      status,
      plataform,
      finish_date,
      url_image,
    };

    try {
      const response = await fetch('#', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameData),
      });

      if (!response.ok) throw new Error('Error creating game');
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div className={style.newGame}>
      <DialogContent className={style.dialogContent}>
        <DialogHeader>
          <DialogTitle className={style.dialogTitle}>New Game</DialogTitle>
          <DialogClose className={style.dialogClose} />
        </DialogHeader>

        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <label>
              Title<span className={style.required}>*</span>
            </label>
            <div>
              <Input
                placeholder='Mario Kart 8'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div className={style.formGroup}>
            <label>Description</label>
            <div>
              <textarea
                placeholder='Amazing game'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                <label htmlFor='acquisition_date'>
                  Acquisition date <span className={style.required}>*</span>
                </label>
                <div>
                  <Input
                    type='date'
                    variant='squared'
                    value={acquisition_date}
                    onChange={(e) => setAcquisitionDate(e.target.value)}
                  />
                </div>
              </div>
              <div className={style.formGroup}>
                <label htmlFor='finish_date'>
                  Finish Date <span className={style.required}>*</span>
                </label>
                <div>
                  <Input
                    type='date'
                    variant='squared'
                    value={finish_date}
                    onChange={(e) => setFinishDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className={style.containerRow}>
              <div className={style.formGroup}>
                <label htmlFor='status'>
                  Status <span className={style.required}>*</span>
                </label>
                <Select
                  variant='modal'
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}>
                  <SelectGroup>
                    <SelectItem value={''}>Select Status</SelectItem>
                  </SelectGroup>
                </Select>
              </div>
              <div className={style.formGroup}>
                <div className={style.checkbox}>
                  <div>
                    <input
                      type='checkbox'
                      name='favorite'
                      id='favorite'
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                  </div>
                  <label htmlFor='favorite'>Favorite</label>
                </div>
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
          <Button type='submit'>
            <p className={style.button}>CREATE</p>
          </Button>
        </DialogFooter>
      </DialogContent>
    </div>
  );
};

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from '../../../../components/ui/dialog/Dialog';
import { Label } from '../../../../components/ui/label/Label';
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
            <Label asterisk htmlFor='title'>
              Title
            </Label>
            <div>
              <Input
                placeholder='Mario Kart 8'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div className={style.formGroup}>
            <Label asterisk htmlFor='description'>
              Description
            </Label>
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
                <Label asterisk htmlFor='category'>
                  Category
                </Label>
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
                <Label asterisk htmlFor='plataform'>
                  Plataform
                </Label>
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
                <Label asterisk htmlFor='acquisition_date'>
                  Acquisition date
                </Label>
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
                <Label asterisk htmlFor='finish_date'>
                  Finish Date
                </Label>
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
                <Label asterisk htmlFor='status'>
                  Status
                </Label>
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
                  <Label asterisk htmlFor='favorite'>
                    Favorite
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className={style.formGroup}>
            <Label htmlFor='image_url' asterisk>
              Imagem (URL)
            </Label>
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

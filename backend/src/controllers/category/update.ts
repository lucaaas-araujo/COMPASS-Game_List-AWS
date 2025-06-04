import { categoryService } from '@/services';
import { RequestHandler } from 'express';

type Body = {
  title: string;
  description: string;
};

type Params = {
  id: string;
};

type UpdateByIdProps = RequestHandler<Params, unknown, Body>;

export const updateById: UpdateByIdProps = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  if (!id) {
    res.status(400).json({ error: 'ID é obrigatório.' });
    return;
  }

  if (title && title.trim().length < 3) {
    res.status(400).json({ error: 'O título deve ter pelo menos 3 caracteres.' });
    return;
  }

  const category = await categoryService.updateById({ id, title, description });

  if (category instanceof Error) {
    res.status(500).json({ error: category.message });
    return;
  }

  res.status(200).json(category);
};

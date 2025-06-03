import { categoryService } from '@/services';
import { RequestHandler } from 'express';

type Body = {
  name: string;
  description: string;
};

type Params = {
  id: string;
};

type UpdateByIdProps = RequestHandler<Params, unknown, Body>;

export const updateById: UpdateByIdProps = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  if (!id) {
    res.status(400).json({ error: 'ID é obrigatório.' });
    return;
  }

  if (name && name.trim().length < 3) {
    res.status(400).json({ error: 'O nome deve ter pelo menos 3 caracteres.' });
    return;
  }

  const category = await categoryService.updateById({ id, name, description });

  if (category instanceof Error) {
    res.status(500).json({ error: category.message });
    return;
  }

  res.status(200).json(category);
};

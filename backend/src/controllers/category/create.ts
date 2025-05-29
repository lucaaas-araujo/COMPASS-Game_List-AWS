import { Request, Response } from 'express';
import { categoryService } from '@/services';

export const create = async (req: Request, res: Response) => {
  const { user_id, name, description } = req.body;

  if (!name || name.trim().length < 3) {
    res.status(400).json({ error: 'O nome deve ter pelo menos 3 caracteres.' });
    return;
  }

  const category = await categoryService.create({ user_id, name, description });

  if (category instanceof Error) {
    res.status(500).json({ error: category.message });
    return;
  }
  res.status(201).json({ id: category });
};

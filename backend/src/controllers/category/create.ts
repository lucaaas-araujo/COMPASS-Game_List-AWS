import { categoryService } from '@/services';
import { RequestHandler } from 'express';
import { LocalsUser } from '../types/locals';

type Locals = {
  user: LocalsUser;
};

type Body = {
  title: string;
  description: string;
};

type CreateProps = RequestHandler<unknown, unknown, Body, unknown, Locals>;

export const create: CreateProps = async (req, res) => {
  const { user_id } = res.locals.user;
  const { title, description } = req.body;

  if (!title || title.trim().length < 3) {
    res.status(400).json({ error: 'O nome deve ter pelo menos 3 caracteres.' });
    return;
  }

  const category = await categoryService.create({
    user_id,
    title,
    description,
  });

  if (category instanceof Error) {
    res.status(500).json({ error: category.message });
    return;
  }

  res.status(201).json({ id: category });
};

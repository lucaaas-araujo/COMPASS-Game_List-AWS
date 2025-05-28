import { userServices } from '@/services';
import { RequestHandler } from 'express';

export const register: RequestHandler = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await userServices.register({ name, email, password });

  if (user instanceof Error) {
    res.status(501).json({ Error: user.message });
  }

  res.status(201).json(user);
};

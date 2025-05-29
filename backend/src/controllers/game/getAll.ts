import { gameServices } from '@/services';
import { RequestHandler } from 'express';

export const getAll: RequestHandler = async (req, res) => {
  try {
    const result = await gameServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'Invalid user_id format.', error });
  }
};

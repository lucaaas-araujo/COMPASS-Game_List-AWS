//import { getAll as getAllGames } from '@/services/game/getAll';
import { RequestHandler } from 'express';

export const getAll: RequestHandler = async (req, res) => {
  try {
    const user_id = req.params;

    //const result = await getAllGames(user_id);
    res.status(200).json(user_id);
  } catch (error) {
    res.status(400).json({ message: 'Invalid user_id format.', error });
  }
};

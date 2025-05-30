import { Request, Response } from 'express';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userServices } from '@/services';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await userServices.login(email);

  if (user instanceof Error) {
    res.status(500).json({ Error: user.message });
    return;
  }

  if (!user) {
    res.status(400).json({ error: 'Invalid email' });
    return
  }

  if (!user.password) return;

  const passwordMatched = await compare(password, user.password);

  if (!passwordMatched) {
    res.status(400).json({ error: 'Invalid password' });
    return
    
  }

  const accessToken = jwt.sign(user.id, process.env.JWT_SECRET);

  res.status(200).json({ accessToken });
};

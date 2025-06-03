import { userServices } from '@/services';
import { compare } from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Basic ')) {
    res.status(401).json({ message: 'Token não fornecido.' });
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_type, base64Credentials] = authorization.split(' ');

  const credentials = Buffer.from(base64Credentials, 'base64').toString(
    'utf-8',
  );

  const [email, password] = credentials.split(':');

  const user = await userServices.login(email);

  if (user instanceof Error) {
    res.status(500).json({ Error: user.message });
    return;
  }

  if (!user) {
    res.status(400).json({ error: 'Invalid email' });
    return;
  }

  if (!user.password) return;

  const passwordMatched = await compare(password, user.password);

  if (!passwordMatched) {
    res.status(400).json({ error: 'Invalid password' });
    return;
  }

  const accessToken = jwt.sign(
    { id: user.id, full_name: user.full_name },
    process.env.JWT_SECRET,
  );

  res.status(200).json({ accessToken });
};

import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

export const isAuthenticated: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ message: 'Token not provided.' });
    return;
  }

  const [type, token] = authorization.split(' ');

  if (type === 'Bearer') {
    res.status(401).json({ message: 'Token is not a Bearer token.' });
    return;
  }

  const secret = process.env.JWT_SECRET;
  const decoded = jwt.verify(token, secret);

  if (typeof decoded === 'string') {
    res.status(401).json({ message: 'Token not provided.' });
    return;
  }

  next();

};

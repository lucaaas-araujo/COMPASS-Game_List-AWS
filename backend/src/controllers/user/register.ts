import { userServices } from '@/services';
import { RequestHandler } from 'express';

export const registerValidation: RequestHandler = (req, res, next) => {
  const { full_name, email, password } = req.body;

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

  const nameIsValid = full_name.length >= 3;
  const emailIsValid = emailPattern.test(email);
  const passwordIsValid = passwordPattern.test(password);

  if (nameIsValid && emailIsValid && passwordIsValid) return next();

  if (!nameIsValid) {
    res.json({ Error: 'invalid name' });
    return;
  }

  if (!emailIsValid) {
    res.json({ Error: 'invalid email' });
    return;
  }

  if (!passwordIsValid) {
    res.json({ Error: 'invalid password' });
    return;
  }
};

type RegisterBody = {
  full_name: string;
  email: string;
  password: string;
};

export const register: RequestHandler<unknown, unknown, RegisterBody> = async (
  req,
  res,
) => {
  const { full_name, email, password } = req.body;

  const user = await userServices.register({ full_name, email, password });

  if (user instanceof Error) {
    res.status(501).json({ Error: user.message });
  }

  res.status(201).json(user);
};

import { api } from '../api';
import { AxiosError } from 'axios';

type LoginProps = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

export const login = async (data: LoginProps): Promise<LoginResponse> => {
  try {
    const response = await api.post('/login', data);
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ error: string }>;
    const message = err.response?.data?.error || 'Login failed.';
    throw new Error(message);
  }
};

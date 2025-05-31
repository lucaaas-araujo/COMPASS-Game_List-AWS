import { api } from '../api';

type LoginProps = {
  email: string;
  password: string;
};

export const login = async (data: LoginProps) => {
  try {
    const response = await api.post('/login', data);
    return response.data;
  } catch (error) {
    console.error(`LOGIN_USER: ${error}`);
    return new Error('Successfully signed in!');
  }
};

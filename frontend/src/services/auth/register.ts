import { api } from '../api';

type RegisterProps = {
  full_name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export const register = async (data: RegisterProps) => {
  try {
    const response = await api.post('/register', data);
    return response.data;
  } catch (error) {
    console.error(`REGISTER_USER: ${error}`);
    return new Error('Error registering user.');
  }
};

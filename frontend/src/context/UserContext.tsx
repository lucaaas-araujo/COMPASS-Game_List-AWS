import { useState, type ReactNode } from 'react';
import { UserContext } from '../hooks/useUser';
import { api } from '../services/api';
import type { UserProps } from '../types/User';

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserProps>({
    full_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = async (data: UserProps) => {
    try {
      setLoading(true);
      const response = await api.post('/login', data);

      if (response.data) {
        setLoading(false);
        setUser(response.data);
        location.href = '/';
        localStorage.setItem('loggedin', JSON.stringify(response.data));
      }
    } catch (error) {
      console.error(`LOGIN_USER: ${error}`);
      setError(true);
      setLoading(false);
    }
  };

  const register = async (data: UserProps) => {
    try {
      setLoading(true);
      const response = await api.post('/register', data);

      if (response.data) {
        location.href = '/login';
        setLoading(false);
      }
    } catch (error) {
      console.error(`REGISTER_USER: ${error}`);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, register, error, loading }}>
      {children}
    </UserContext.Provider>
  );
};

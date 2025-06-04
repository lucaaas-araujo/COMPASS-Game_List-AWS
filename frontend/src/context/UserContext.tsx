import { useEffect, useState, type ReactNode } from 'react';

import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../hooks/useUser';
import { api } from '../services/api';
import type { UserProps } from '../types/User';

type UserProviderProps = {
  children: ReactNode;
};

export type UserCountsProps = {
  games: number;
  categories: number;
  platforms: number;
};

export type JwtPayload = {
  id: string;
  full_name?: string;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<JwtPayload>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [counts, setCounts] = useState<UserCountsProps | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('loggedin');
    const counts = localStorage.getItem('counts');

    if (token) {
      const { id, full_name } = jwtDecode<JwtPayload>(token);
      setUser({ id, full_name });
    }

    if (counts) setCounts(JSON.parse(counts));
  }, []);

  const login = async (data: Pick<UserProps, 'email' | 'password'>) => {
    try {
      setLoading(true);

      const credentials = `${data.email}:${data.password}`;
      const base64Credentials = btoa(credentials);
      const authorizationHeader = `Basic ${base64Credentials}`;

      const response = await api.post(
        '/login',
        {},
        {
          headers: {
            Authorization: authorizationHeader,
          },
        },
      );

      const { accessToken, counts } = response.data;

      localStorage.setItem('loggedin', JSON.stringify(accessToken));
      localStorage.setItem('counts', JSON.stringify(counts));

      setCounts(counts);
      location.href = '/';
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
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
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setError(false);
    setLoading(false);
    localStorage.removeItem('loggedin');
    location.href = '/login';
  };

  return (
    <UserContext.Provider
      value={{ user, counts, login, register, logout, error, loading }}>
      {children}
    </UserContext.Provider>
  );
};

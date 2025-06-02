import { useState, type ReactNode } from 'react';

import { PlatformContext } from '../hooks/usePlatform';
import { api } from '../services/api';
import type { PlatformProps } from '../types/Platform';

type PlatformProviderProps = {
  children: ReactNode;
};

export function PlatformProvider({ children }: PlatformProviderProps) {
  const [allCategories, setAllCategories] = useState([]);
  const [duplicateCategories, setDuplicateCategories] = useState([]);
  const [error, setError] = useState(false);
  const [platformCount, setPlatformCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const userId = '683851eeebf3ec3283664b14';

  const getAll = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/platform/${userId}`);
      setPlatformCount(response.data.length);
      setLoading(false);
      setAllCategories(response.data);
      setDuplicateCategories(response.data);
    } catch (error) {
      console.error('Error fetching platform:', error);
      setError(true);
      setLoading(false);
    }
  };

  const create = async (platformData: PlatformProps) => {
    try {
      setLoading(true);
      await api.post('/platform', platformData);
      setLoading(false);
    } catch (error) {
      console.error('Error creating platform:', error);
      setError(true);
      setLoading(false);
    }
  };

  const remove = async (): Promise<void> => {
    try {
      setLoading(true);
      await api.delete(`/platform/${userId}`);
      setLoading(false);
    } catch (error) {
      console.error('Error deleting platform:', error);
      setError(true);
      setLoading(false);
    }
  };

  const update = async (platformData: PlatformProps): Promise<void> => {
    try {
      setLoading(true);
      await api.put(`/platform/${userId}`, { platformData });
      setLoading(false);
    } catch (error) {
      console.error('Error updating platform:', error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <PlatformContext.Provider
      value={{
        allCategories,
        duplicateCategories,
        getAll,
        create,
        remove,
        update,
        platformCount,
        error,
        loading,
      }}>
      {children}
    </PlatformContext.Provider>
  );
}

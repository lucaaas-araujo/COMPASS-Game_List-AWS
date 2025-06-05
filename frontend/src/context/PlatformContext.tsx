import { useState, type ReactNode } from 'react';

import { PlatformContext } from '../hooks/usePlatform';
import { api } from '../services/api';
import type { EditPlatformProps, PlatformProps } from '../types/Platform';

type PlatformProviderProps = {
  children: ReactNode;
};

export type GetAllProps = {
  sort?: string;
  dir?: 'asc' | 'desc';
};

export function PlatformProvider({ children }: PlatformProviderProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getAll = async ({ sort = 'title', dir }: GetAllProps) => {
    try {
      setLoading(true);
      const response = await api.get(`/platform`, {
        params: { sort, dir },
      });
      const platforms = response.data;

      setLoading(false);

      return platforms;
    } catch (error) {
      console.error('Error fetching platform:', error);
      setError(true);
      setLoading(false);
    }
  };

  const create = async (
    platformData: Omit<PlatformProps, 'is_deleted' | 'createdAt' | 'updatedAt'>,
  ) => {
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

  const remove = async (itemId: string): Promise<void> => {
    try {
      setLoading(true);
      await api.delete(`/platform/${itemId}`);
      setLoading(false);
    } catch (error) {
      console.error('Error deleting platform:', error);
      setError(true);
      setLoading(false);
    }
  };

  const update = async ({
    platformData,
    itemId,
  }: EditPlatformProps): Promise<void> => {
    try {
      setLoading(true);
      await api.put(`/platform/${itemId}`, { platformData });
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
        getAll,
        create,
        remove,
        update,
        error,
        loading,
      }}>
      {children}
    </PlatformContext.Provider>
  );
}

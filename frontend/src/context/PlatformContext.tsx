import { useState, type ReactNode } from 'react';

import { PlatformContext } from '../hooks/usePlatform';
import { api } from '../services/api';
import type { EditPlatformProps, PlatformProps } from '../types/Platform';

type PlatformProviderProps = {
  children: ReactNode;
};

export function PlatformProvider({ children }: PlatformProviderProps) {
  const [allPlatforms, setAllPlatforms] = useState<PlatformProps[]>([]);
  const [duplicatePlatforms, setDuplicatePlatforms] = useState([]);
  const [error, setError] = useState(false);
  const [platformCount, setPlatformCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const getAll = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/platform`);
      const platforms = response.data;

      setPlatformCount(platforms.length);
      setLoading(false);
      setAllPlatforms(platforms);
      setDuplicatePlatforms(platforms);
    } catch (error) {
      console.error('Error fetching platform:', error);
      setError(true);
      setLoading(false);
    }
  };

  const create = async (platformData: Omit<PlatformProps, 'is_deleted'>) => {
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
        allPlatforms,
        duplicatePlatforms,
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

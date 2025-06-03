import { createContext, useContext } from 'react';

import type { PlatformProps } from '../types/Platform';

type PlatformContextProps = {
  allPlatforms: PlatformProps[];
  duplicatePlatforms: PlatformProps[];
  getAll: () => Promise<void>;
  remove: () => Promise<void>;
  create: (platformData: PlatformProps) => Promise<void>;
  update: (platformData: PlatformProps) => Promise<void>;
  platformCount: number;
  error: boolean;
  loading: boolean;
};

export const PlatformContext = createContext<PlatformContextProps | undefined>(
  undefined,
);

export const usePlatform = () => {
  const context = useContext(PlatformContext);
  if (context === undefined) {
    throw new Error('usePlatform must be used within a PlatformProvider');
  }
  return context;
};

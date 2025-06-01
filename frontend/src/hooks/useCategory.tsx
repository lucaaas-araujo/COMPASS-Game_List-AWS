import { createContext, useContext } from 'react';

import type { CategoryProps } from '../types/Category';

type CategoryContextProps = {
  allCategories: CategoryProps[];
  duplicateCategories: CategoryProps[];
  getAll: () => Promise<void>;
  remove: () => Promise<void>;
  create: (categoryData: CategoryProps) => Promise<void>;
  update: (categoryData: CategoryProps) => Promise<void>;
  categoryCount: number;
  error: boolean;
  loading: boolean;
};

export const CategoryContext = createContext<CategoryContextProps | undefined>(
  undefined,
);

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return context;
};

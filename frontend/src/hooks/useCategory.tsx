import { createContext, useContext } from 'react';

import type { CategoryProps, EditCategoryProps } from '../types/Category';

type CategoryContextProps = {
  allCategories: CategoryProps[];
  duplicateCategories: CategoryProps[];
  getAll: () => Promise<void>;
  remove: (itemId: string) => Promise<void>;
  create: (categoryData: CategoryProps) => Promise<void>;
  update: (categoryData: EditCategoryProps) => Promise<void>;
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

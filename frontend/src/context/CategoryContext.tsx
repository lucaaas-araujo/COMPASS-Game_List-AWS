import { useState, type ReactNode } from 'react';
import { CategoryContext } from '../hooks/useCategory';
import { api } from '../services/api';
import type { CategoryProps } from '../types/Category';

type CategoryProviderProps = {
  children: ReactNode;
};

export function CategoryProvider({ children }: CategoryProviderProps) {
  const [allCategories, setAllCategories] = useState<CategoryProps[]>([]);
  const [duplicateCategories, setDuplicateCategories] = useState([]);
  const [error, setError] = useState(false);
  const [categoryCount, setCategoryCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const userId = '';

  const getAll = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/categories`);
      const categories = response.data;

      setCategoryCount(categories.length);
      setLoading(false);
      setAllCategories(categories);
      setDuplicateCategories(categories);
    } catch (error) {
      console.error('Error fetching category:', error);
      setError(true);
      setLoading(false);
    }
  };

  const create = async (
    categoryData: Pick<CategoryProps, 'title' | 'description'>,
  ) => {
    try {
      setLoading(true);
      await api.post('/categories', categoryData);
      setLoading(false);
    } catch (error) {
      console.error('Error creating category:', error);
      setError(true);
      setLoading(false);
    }
  };

  const remove = async (): Promise<void> => {
    try {
      setLoading(true);
      await api.delete(`/categories/${userId}`);
      setLoading(false);
    } catch (error) {
      console.error('Error deleting category:', error);
      setError(true);
      setLoading(false);
    }
  };

  const update = async (
    categoryData: Pick<CategoryProps, 'title' | 'description'>,
  ): Promise<void> => {
    try {
      setLoading(true);
      await api.put(`/categories/${userId}`, categoryData);
      setLoading(false);
    } catch (error) {
      console.error('Error updating category:', error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        allCategories,
        duplicateCategories,
        getAll,
        create,
        remove,
        update,
        categoryCount,
        error,
        loading,
      }}>
      {children}
    </CategoryContext.Provider>
  );
}

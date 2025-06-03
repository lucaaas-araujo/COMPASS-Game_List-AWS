export type CategoryProps = {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  is_deleted: boolean;
};

export type EditCategoryProps = {
  itemId: string;
  categoryData: Pick<CategoryProps, 'title' | 'description'>;
};

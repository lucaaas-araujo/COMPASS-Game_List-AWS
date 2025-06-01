export type CategoryProps = {
  user_id: string;
  name: string;
  description?: string;
};

export type EditCategoryProps = {
  id: string;
  data: Partial<CategoryProps>;
};

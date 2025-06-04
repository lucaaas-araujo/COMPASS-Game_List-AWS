import categoryModel from "@/models/category";

export const countByUser = async (user_id: string) => {
  try {
    const count = await categoryModel.countDocuments({
      user_id,
      is_deleted: false,
    });
    return count;
  } catch (error) {
    console.log(`COUNT_CATEGORIES_BY_USER: ${error}`);
    return 0;
  }
};

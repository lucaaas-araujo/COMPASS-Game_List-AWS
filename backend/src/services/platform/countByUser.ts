import Platform from '@/models/platform';

export const countByUser = async (user_id: string) => {
  try {
    const count = await Platform.countDocuments({
      user_id,
      is_deleted: false,
    });
    return count;
  } catch (error) {
    console.log(`COUNT_PLATFORMS_BY_USER: ${error}`);
    return 0;
  }
};

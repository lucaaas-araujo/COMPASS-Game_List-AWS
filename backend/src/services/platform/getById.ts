import Platform from '@/models/platform';

export const getPlatformById = async (id: string) => {
  try {
    const platform = await Platform.findOne({ _id: id, is_deleted: false });
    return platform || new Error('Platform not found.');
  } catch (error) {
    console.log(`GET_PLATFORM_BY_ID: ${error}`);
    return new Error('Error fetching platform.');
  }
};

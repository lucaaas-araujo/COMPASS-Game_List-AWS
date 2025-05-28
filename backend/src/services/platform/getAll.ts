import Platform from '@/models/platform';

export const getAllPlatforms = async () => {
  try {
    const platforms = await Platform.find({ is_deleted: false });
    return platforms;
  } catch (error) {
    console.log(`GET_ALL_PLATFORMS: ${error}`);
    return new Error('Error fetching platforms.');
  }
};

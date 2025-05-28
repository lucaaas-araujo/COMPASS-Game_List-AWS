import User from '@/models/user';

type RegisterProps = {
  name: string;
  email: string;
  password: string;
};

export const register = async ({ name, email, password }: RegisterProps) => {
  try {
    const user = new User({ name, email, password });

    const { _id } = await user.save();
    return _id;
  } catch (error) {
    console.log(`REGISTER_USER: ${error}`);
    return new Error('Error registering user.');
  }
};

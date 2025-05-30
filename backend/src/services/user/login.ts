import User from '../../models/user';

export const login = async (email: string) => {
  
  try{
    const user = await User.findOne({ email });
    return user
  }catch(error){
    console.log(error)
    return new Error("User not found")
  }
};


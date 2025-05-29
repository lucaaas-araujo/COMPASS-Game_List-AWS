import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.model('users', userSchema);

export default userModel;

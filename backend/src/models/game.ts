import mongoose from 'mongoose';

const gamesSchema = new mongoose.Schema(
  {
    image_url: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    platform: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      enum: ['Playing', 'Done', 'Abandoned'],
      require: true,
    },
    favorite: {
      type: Boolean,
      require: true,
      default: false,
    },
    acquisition_date: {
      type: Date,
      require: true,
    },
    finish_date: {
      type: Date,
      require: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      require: true,
    },
    is_deleted: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

const gamesModel = mongoose.model('games', gamesSchema);

export default gamesModel;

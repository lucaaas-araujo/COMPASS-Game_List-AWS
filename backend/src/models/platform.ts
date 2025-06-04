import mongoose from 'mongoose';

const platformSchema = new mongoose.Schema(
  {
    image_url: { 
      type: String, 
    },
    title: { 
      type: String, 
      required: true 
    },
    company: 
    { type: String, 
    },
    acquisition_year: { 
      type: Date, 
    },
    user_id: { 
      type: String, 
      required: true 
    },
    is_deleted: { 
      type: Boolean, 
      default: false 
    },
  },
  {
    timestamps: true,
  },
);

const Platform = mongoose.model('platforms', platformSchema);

export default Platform;

import mongoose, { Schema } from 'mongoose';

const DriversSchema = new Schema({
  email: {
    type: String,
    required: 'Please provide a valid email address',
  },
  driving: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('driver', DriversSchema);

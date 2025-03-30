import mongoose, { Schema, Document } from "mongoose";

export interface IApprovedUser extends Document {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  contact: string;
  engagement: number;
  city: string; 
}

const ApprovedUserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    contact: {
      type: String,
      required: true,
    },
    engagement: {
      type: Number,
      default: 0,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
  },
  { timestamps: true } 
);

// ✅ Export the Model
export const ApprovedUserModel = mongoose.model<IApprovedUser>("ApprovedUser", ApprovedUserSchema);

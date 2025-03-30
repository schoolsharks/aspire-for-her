import mongoose, { Schema, Document } from "mongoose";

export interface IWorkshop extends Document {
  title: string;
  designation: string;
  linkedinUrl: string;
  name: string; 
}

const WorkshopSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    linkedinUrl: {
        type: String,
        required: true,
    }
  },
  { timestamps: true } 
);

// ✅ Export the Model
export const WorkshopModel = mongoose.model<IWorkshop>("Workshop", WorkshopSchema);

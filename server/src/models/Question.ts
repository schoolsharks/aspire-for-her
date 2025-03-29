import mongoose, { Schema, Document } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  description: string;
  createdAt: Date;
}

const QuestionSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const QuestionModel = mongoose.model<IQuestion>("Question", QuestionSchema);

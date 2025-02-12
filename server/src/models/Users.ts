import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  contact: string;
  session: Schema.Types.ObjectId;
  responses: { questionId: number; answer: string[] }[];
  selectedBenefits: { benefitId: string }[];
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: "_",
      trim: true,
    },
    contact: {
      type: String,
      required: true,
    },
    session: {
      type: Schema.Types.ObjectId,
      ref: "Session",
    },
    responses: [
      {
        questionId: {
          type: Number,
          required: true,
        },
        answer: {
          type: [String],
          required: true,
        },
      },
    ],
    selectedBenefits: [
      {
        benefitId: String,
      },
    ],
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<IUser>("User", UserSchema);

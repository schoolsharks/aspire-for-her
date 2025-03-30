import mongoose, { Schema, Document, Types } from "mongoose";

export interface IQuickPulse extends Document {
  referenceType: Types.ObjectId[]; // Array of references to QuestionModel
  createdAt: Date;
}

const QuickPulseSchema: Schema = new Schema(
  {
    referenceType: [
      {
        type: Schema.Types.ObjectId,
        ref: "Question", 
        required: true,
      },
    ],
   
  },
  { timestamps: true }
);

export const QuickPulseModel = mongoose.model<IQuickPulse>(
  "QuickPulse",
  QuickPulseSchema
);

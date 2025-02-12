import mongoose, { Schema, Document } from "mongoose";

export interface ISession extends Document {
  _id: mongoose.Schema.Types.ObjectId;
  responses: number;
}

const SessionSchema: Schema = new Schema(
  {
    responses: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const SessionModel = mongoose.model<ISession>("Session", SessionSchema);

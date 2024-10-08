import { Schema, model, models, Document } from "mongoose";

export interface ITag extends Document {
  name: string;
  description: string;
  question: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

const TagSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  question: [{ type: Schema.Types.ObjectId, ref: "Question" }], // Array of ObjectId references to the Question model
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }], // Array of ObjectId references to the User model
  createdOn: { type: Date, default: Date.now }, // Default to current date
});

// Creating or retrieving the Tag model
const Tag = models.Tag || model("Tag", TagSchema);

export default Tag;

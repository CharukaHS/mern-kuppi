import { model, Schema } from "mongoose";

const todo = new Schema({
  title: String,
  description: String,
  created_on: { type: Date, default: Date.now },
});

export default model("todo", todo);

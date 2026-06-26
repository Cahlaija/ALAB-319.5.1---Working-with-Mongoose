import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema(
  {
    type: String,
    score: Number,
  },
  { _id: false }
);

const gradeSchema = new mongoose.Schema({
  learner_id: Number,
  class_id: Number,
  scores: [scoreSchema],
});

export default mongoose.model("Grade", gradeSchema, "grades");
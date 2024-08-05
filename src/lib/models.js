import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    activity: {
      type: Number,
      default: 0,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const interestSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    users: {
      type: Array,
    },
  },
  { timestamps: true }
);

const storySchema = new mongoose.Schema(
  {
    interestId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

const commentSchema = new mongoose.Schema(
  {
    storyId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Interest =
  mongoose.models?.Interest || mongoose.model("Interest", interestSchema);
export const Story =
  mongoose.models?.Story || mongoose.model("Story", storySchema);
export const Comment =
  mongoose.models?.Comment || mongoose.model("Comment", commentSchema);

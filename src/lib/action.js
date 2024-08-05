"use server";
import { Comment, Interest, Story, User } from "./models";
import { connectToDb } from "./connectToDB";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { getUser } from "./data";
import bcrypt from "bcryptjs";

export const addInterest = async (formData) => {
  "use server";
  const { title, desc, img } = Object.fromEntries(formData);
  try {
    await connectToDb();
    const NewInterest = new Interest({
      title: title,
      desc: desc,
      img: img,
      users: [],
    });
    await NewInterest.save();
    console.log("save to db");
    revalidatePath("/interests");
  } catch (err) {
    throw new Error(err);
  }
};

export const addStory = async (formData) => {
  "use server";
  const { title, desc, img, interestId, userId } = Object.fromEntries(formData);
  try {
    await connectToDb();
    const NewStory = new Story({
      title: title,
      desc: desc,
      img: img,
      userId: userId,
      interestId: interestId,
    });
    await NewStory.save();
    // update user activity
    try {
      const result = await User.updateOne(
        { _id: userId },
        { $inc: { activity: 1 } }
      );
    } catch (error) {
      console.error("Error updating user activity", error);
    }
    // update interest user
    try {
      const result_interest = await Interest.updateOne(
        { _id: interestId },
        { $addToSet: { users: userId } }
      );
    } catch (error) {
      console.error("Error adding user to interest if not exists:", error);
    }
    console.log("save to db");
    revalidatePath(`/interests/${interestId}`);
  } catch (err) {
    throw new Error(err);
  }
};

export const addComment = async (formData) => {
  "use server";
  const { userId, content, storyId, interestId } = Object.fromEntries(formData);
  try {
    await connectToDb();
    const NewComment = new Comment({
      userId: userId,
      content: content,
      storyId: storyId,
    });
    await NewComment.save();
    console.log("save to db");
    revalidatePath(`/interests/${interestId}`);
  } catch (err) {
    throw new Error(err);
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  "use server";
  const { username, email, password, passwordRepeat, img } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "password do not match" };
  }

  try {
    await connectToDb();

    const user = await User.findOne({ username });
    if (user) {
      return { error: "Username already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log("saved to db");
    return { success: true };
  } catch (err) {
    return { error: "something went wrong" };
  }
};

export const login = async (previousState,formData) => {
  "use server";
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if(err.message.includes("CredentialsSignin")) {
      return {error: "Invalid username or password"};
    }
    throw err;
  }
};

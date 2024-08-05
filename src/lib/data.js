import { connectToDb } from "./connectToDB";
import { Interest, Story, User, Comment } from "./models";

export const getInterests = async () => {
  try {
    connectToDb();
    const interests = await Interest.find();
    return interests;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Interests");
  }
};

export const getInterest = async (id) => {
  try {
    connectToDb();
    const interest = await Interest.findById(id);
    return interest;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Interest");
  }
};

export const getUser = async (userId) => {
  try {
    connectToDb();
    const user = await User.findById(userId);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch User");
  }
};

export const getUserByEmail = async (userEmail) => {
  try {
    connectToDb();
    const user = await User.findOne({email: userEmail});
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch User");
  }
};

export const getStories = async (interestId) => {
  try {
    connectToDb();
    const stories = await Story.find({ interestId: interestId });
    return stories;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Stories");
  }
};

export const getComments = async (storyId) => {
  try {
    connectToDb();
    const comments = await Comment.find({storyId: storyId});
    return comments;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Comments");
  }
};

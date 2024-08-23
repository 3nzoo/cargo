import { Post, AdUser, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";


export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find().sort({ createdAt: -1 });
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

//? List down all posts
export const getUserPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find().sort({ createdAt: -1 });
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};


//? List down Posts from a Branch/AdUser
export const getBranchPosts = async (username) => {
  try {
    connectToDb();
    const posts = await Post.find({ username: username, status: { $ne: 'canceled' } }).sort({ createdAt: -1 });
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};


export const getTruckDeliveries = async (contact) => {
  try {
    connectToDb();
    const posts = await Post.find({ truck_number: contact, status: { $ne: 'canceled' } }).sort({
      createdAt: -1
    });
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};



export const getPostBySlug = async (slug) => {
  noStore();
  try {
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};


export const getNewPostByBranch = async (username) => {
  try {
    connectToDb();
    const post = await Post.find({ username, status: 'New' }).sort({ createdAt: -1 });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};



export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.find(slug).sort({ createdAt: -1 });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await AdUser.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUserBySlug = async (username) => {
  noStore();
  try {
    connectToDb();
    const user = await AdUser.findOne({ username }).select('-password -__v -createdAt -isAdmin');
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await AdUser.find({ isAdmin: false }).select('-password');
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};


export const getBranchesOnly = async () => {
  try {
    connectToDb();
    const users = await User.find({ isAdmin: false }).select('username _id gmaps city contact');

    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
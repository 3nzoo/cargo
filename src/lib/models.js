import mongoose from "mongoose";

const adUserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      max: 50,
    },
    contact: {
      type: String,
      required: true,
      max: 20,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    name: {
      type: String,
      required: true,
      max: 50,
    },
    branchName: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    contact: {
      type: String,
    },
    city: {
      type: String,
    },
    img: {
      type: String,
    },
    gmaps: {
      type: String,
    },
    incorporate: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    truck_number: {
      type: String,
      default: '-',
    },
    item_category: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    remarks: {
      type: String,
      default: '-',
    },
    distance: {
      type: String,
      default: '-',
    },
    username: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'New',
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);



export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
export const AdUser = mongoose.models?.AdUser || mongoose.model("AdUser", adUserSchema);
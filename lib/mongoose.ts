import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MISSING MONGODB_URL");

  if (isConnected) {
    console.log("MONGODB IS CONNECTED");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "AnwerNation",
    });
    isConnected = true;

    console.log("mongo db is connected");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

import mongoose from "mongoose";
import dotenv from "dotenv";

//ENV configuration
dotenv.config();

export function dbConnection() {
  let MONGO_URL = process.env.Mongo_URL;
  try {
    mongoose.connect(`${MONGO_URL}`);
    console.log("Database connection Successfully");
  } catch (error) {
    console.log(error.message);
  }
}
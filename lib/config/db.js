import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("db connected successfull");
  } catch (error) {
    console.log("error at db connection");
    console.log(error);
  }
};

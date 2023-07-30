import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on("error", (error) => {
      console.log("MongoDB connection error. " + error);
      process.exit(1);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default dbConnect;

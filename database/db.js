import mongoose from "mongoose";

const Connection = async (username,password) => {
  const URL = `mongodb+srv://shoaibakhtar9430:d1ra57xBQep6rFWT@cluster0.ypph2yu.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database Connected");

  } catch (error) {
    console.log("Error while connecting with database", error);
  }
};

export default Connection;
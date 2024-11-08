import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://lakshyashrivastava2004:9251444130@cluster0.albml.mongodb.net/food-del"
      
    )
    .then(() => console.log("DB Connected"));
};

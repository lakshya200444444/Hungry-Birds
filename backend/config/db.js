import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://baidsimandhar:8bpFyktafizQ2FNh@cluster0.h8hzkzq.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};

import mongoose from "mongoose";

function handleError(error: any) {
    throw new Error("Failed connection.");
}

try {
    await mongoose.connect("mongodb://localhost:27017/base_admin"),
        { useNewUrlParser: true,  
        useUnifiedTopology: true};
  } catch (error) {
    handleError(error);
  }
const connection = mongoose.connection;

module.exports = connection;

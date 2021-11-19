import mongoose from "mongoose";

function handleError(error: any) {
  throw new Error("Failed connection.");
}

export const connect = () => {

  try {
    const account = async () => {
      await mongoose.connect("mongodb://localhost/base_admin"),
          // tslint:disable-next-line: no-unused-expression
          { useNewUrlParser: true,
          useUnifiedTopology: true };
    };
    account();

    } catch (error) {
      handleError(error);
    }
  const connection = mongoose.connection;

  connection.once("open", async () => {
    console.log("Connected to database");
  });

  connection.on("error", () => {
    console.log("Error connecting to database");
  });

  module.exports = connection;

};

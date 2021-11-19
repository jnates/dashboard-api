import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    // tslint:disable-next-line: object-literal-sort-keys
    lastName: String,
    age: { type: Number, min: 18, index: true },
    document: Number,
    country: String,
    town: String,
});

module.exports = mongoose.model("User", userSchema);

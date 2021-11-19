import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    // tslint:disable-next-line: object-literal-sort-keys
    content: { type: String, required: true },
});

module.exports = mongoose.model("Post", PostSchema);

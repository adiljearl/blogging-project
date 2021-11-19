const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: "categories"
    },

    title: {
      type: String,
      required: true
    },

    body: {
      type: String,
      required: true
    },
    file: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now()
    }
  },
  { usePushEach: true }
);

module.exports = mongoose.model("posts", PostSchema);
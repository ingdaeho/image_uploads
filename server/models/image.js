const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
  {
    key: { type: String },
    originalFileName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Image", ImageSchema);

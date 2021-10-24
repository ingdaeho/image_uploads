const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

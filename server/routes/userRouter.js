const { Router } = require("express");
const User = require("../models/user");
const { hash } = require("bcryptjs");

const userRouter = Router();

userRouter.post("/register", async (req, res) => {
  try {
    if (req.body.password.length < 6)
      throw new Error("비밀번호를 최소 6자 이상으로 해주세요.");
    if (req.body.username.length < 3)
      throw new Error("username은 최소 3자 이상으로 해주세요.");

    const hashedPassword = await hash(req.body.password, 10);
    await new User({
      user: req.body.user,
      username: req.body.username,
      hashedPassword,
    }).save();
    res.json({ message: "user registered" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = { userRouter };
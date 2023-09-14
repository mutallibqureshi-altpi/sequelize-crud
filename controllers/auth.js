const user = require("../model/user.json");
const bcrypt = require("bcrypt");
const path = require("path");
const fsPromises = require("fs/promises");
const User = require("../model/user.model");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Email and password is required" });
  // const foundUser = user.find((val) => val.email === email);
  const userExist = await User.findOne({ email: email });
  if (await bcrypt.compare(password, userExist.password))
    return res.status(200).json({ message: "success", user: userExist });
  else return res.status(400).json({ message: "chor" });
};

const register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Email and password is required" });
  const sameUser = user.find((user) => user.email === email);
  if (sameUser) return res.status(400).json({ message: "User already exists" });
  try {
    const hashedPwd = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPwd });
    res.status(201).json({ success: true, user: newUser });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
  res.json({ message: "done" });
};

module.exports = { login, register };

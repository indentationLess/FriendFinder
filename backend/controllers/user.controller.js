import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const SignUp = async (req, res) => {
    const { usersName,age ,email, password } = req.body;
}
if (!usersName || !age || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
}
hasedPassword = await bcrypt.hash(password, 12);
const newUser = new User({ usersName, age, email, password: hashedPassword });
try {await newUser.save();
res.status(201).json({ message: "User created successfully" });}
catch (error) {
    res.status(409).json({ message: error.message });
}

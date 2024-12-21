import User from "../models/user.js";
import bcrypt from "bcryptjs";
import GenerateJWT from "../config/GenerateJWT.js";

class UserController {
    async SignUp(req, res) {
        const { usersName, age, email, password } = req.body;

        if (!usersName || !age || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await User.findOne({
            email,
        });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({ usersName, age, email, password: hashedPassword, token: GenerateJWT(email) });
        try {
            await newUser.save();
            res.status(201).json({ message: "User created successfully" });
        }
        catch (error) {
            res.status(409).json({ message: error.message });
        }
    }

    async SignIn(req, res) {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User does not exist" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ result: existingUser, token: GenerateJWT(existingUser.email) });
    }
}

const userController = new UserController();

export default {
    SignUp: userController.SignUp.bind(userController),
    SignIn: userController.SignIn.bind(userController)
};
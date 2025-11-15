const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

// REGISTER
exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        const user = await User.create({ username, email, password });

        res.status(201).json({
            message: "User registered successfully",
            token: generateToken(user._id),
            user: { id: user._id, username, email },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// LOGIN
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid email" });

        const isMatch = await user.matchPassword(password);
        if (!isMatch) return res.status(400).json({ message: "Invalid password" });

        res.json({
            message: "Login successful",
            token: generateToken(user._id),
            user: { id: user._id, username: user.username, email },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
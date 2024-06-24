// Bcrypt y JWT
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// MODELS
const User = require("../models/user.model")

// SHOW ALL USERS
async function allUsers(req, res) {
    try {
        const users = await User.find()
        return res.json(users)
    } catch (error) {
        console.log(error)
    }
}

// SIGNUP - REGISTER A NEW USER
async function addUser(req, res) {
    try {
        // Encrypt and protect user's password
        const hash = await bcrypt.hash(req.body.password, 10)
        // role: "User" for all the users
        // The only user with "Admin" role will be the owner of the website
        // Owner login:
        // email: rodrigo@gmail.com
        // password: FullStack2023!
        const newUser = new User({
            username: req.body.username,
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            role: "User"
        })
        await newUser.save()
        return res.json({ message: "User created" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error trying to create user" })
    }
}

// LOGIN - LOGIN A REGISTERED USER
async function loginUser(req, res) {
    try {
        const findUser = await User.findOne({ email: req.body.email })
        if (!findUser) {
            // User not found
            return res.status(400).json({ message: "User not found" })
        } else {
            const comparePassword = await bcrypt.compare(req.body.password, findUser.password)
            if (!comparePassword) {
                // Password don´t match
                return res.status(400).json({ message: "Invalid password" })
            } else {
                const token = jwt.sign({ userId: findUser._id }, "DXdd21@ace4", { expiresIn: "1h" })
                return res.status(200).json({ message: "Login successfully", token: token, role: findUser.role})
            }
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error trying to log in" })
    }
}

module.exports = {
    allUsers,
    addUser,
    loginUser
}
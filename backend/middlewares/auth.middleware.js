const jwt = require("jsonwebtoken")

// MODELS
const User = require("../models/user.model")

async function isAuthenticated(req, res, next) {
    const token = req.query.token

    if (!token) {
        return res.status(401).json({ message: "You are not authenticated" })
    } else {
        const tokenDecoded = jwt.verify(token, "DXdd21@ace4")
        const userID = tokenDecoded.userId
        const findUser = await User.findById(userID)

        if(!findUser) {
            res.status(401).json({ message: "Invalid token" })
        } else {
            next()
        }
    }
}

async function isAdmin(req, res, next) {
    const token = req.query.token

    if (!token) {
        return res.status(401).json({ message: "You are not authenticated" })
    } else {
        const tokenDecoded = jwt.verify(token, "DXdd21@ace4")
        const userID = tokenDecoded.userId
        const findUser = await User.findById(userID)

        if(!findUser) {
            res.status(401).json({ message: "Invalid token" })
        } else {
            if(findUser.role !== "Admin") {
                return res.status(403).json({ msg: "You are not allowed to enter here" })
            } else {
                next()
            }
        }
    }
}

module.exports = {
    isAuthenticated,
    isAdmin
}
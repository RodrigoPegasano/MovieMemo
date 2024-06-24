// Express
const express = require("express")

const router = express.Router()

// CONTROLLERS
const { allUsers, addUser, loginUser } = require("../controllers/user.controller")

// MIDDLEWARES
const { isAdmin } = require("../middlewares/auth.middleware")

// ALL USERS
router.get("/", isAdmin, allUsers)

// SIGNUP
router.post("/signup", addUser)

// LOGIN
router.post("/login", loginUser)

module.exports = router
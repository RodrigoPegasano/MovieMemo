// Express
const express = require("express")

// CONTROLLERS
const { allMovies, addMovie, deleteMovie } = require("../controllers/movie.controller")

// MIDDLEWARES
const { isAuthenticated } = require("../middlewares/auth.middleware")

const router = express.Router()

// SEE ALL MOVIES
router.get("/", isAuthenticated, allMovies)

// ADD A NEW MOVIE
router.post("/", isAuthenticated, addMovie)

// DELETE A MOVIE BY ID
router.delete("/:id", isAuthenticated, deleteMovie)

module.exports = router
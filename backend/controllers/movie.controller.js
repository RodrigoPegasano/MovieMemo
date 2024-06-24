const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// MODELS
const Movie = require("../models/movie.model")

// SHOW ALL MOVIES
async function allMovies(req, res) {
    try {
        const movies = await Movie.find()
        return res.json(movies)
    } catch (error) {
        console.log(error)
    }
}

// ADD A NEW MOVIE
async function addMovie(req, res) {
    try {
        const newMovie = new Movie({
            cover: req.body.cover,
            title: req.body.title,
            category: req.body.category,
            year: req.body.year,
            rating: req.body.rating,
            description: req.body.description
        })
        await newMovie.save()
        return res.json({ message: "Movie added!" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error trying to add the movie" })
    }
}

// REMOVE A MOVIE
async function deleteMovie(req, res) {
    try {
        await Movie.findByIdAndDelete(req.params.id)
        return res.json({ message: "Movie deleted!" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error trying to remove the movie" })
    }
}

module.exports = {
    allMovies,
    addMovie,
    deleteMovie
}
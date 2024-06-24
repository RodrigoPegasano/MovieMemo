// Mongoose
const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    cover: { type: String, required: false },
    title: { type: String, required: true },
    category: { type: String, required: true },
    year: { type: Number, required: false },
    rating: { type: Number, required: true },
    description: { type: String, required: true }
})

module.exports = mongoose.model("movies", movieSchema)
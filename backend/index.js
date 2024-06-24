// Import express
const express = require("express")

// Import mongoose
const mongoose = require("mongoose")

// Cors
const cors = require("cors")

// Routes
const usersRoutes = require("./routes/user.route")
const moviesRoutes = require("./routes/movie.route")

const app = express()

// This will authorize and connect the backend server to the frontend
app.use(cors())

// Enable send data through post
app.use(express.json())

// Connect to mongoose database
mongoose.connect("mongodb+srv://rodrigopegasano:IjDzLNz0UqyG7LE5@cluster0.eraketb.mongodb.net/MovieMemo")
    .then(() => {
        console.log("Connected to the database...")
    })
    .catch((error) => {
        console.log(`Error trying to connect to the database: ${error}`)
    })

app.use("/users", usersRoutes)
app.use("/movies", moviesRoutes)

// Run the app in the server
app.listen(3000, () => {
    console.log("Server connected...")
})
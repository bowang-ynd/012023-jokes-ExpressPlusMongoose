// import mongoose
const mongoose = require("mongoose");

// create the joke schema
const jokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup is required!"],
        minlength: [10, "setup should have at least 10 characters!"]
    }, 
    punchline: {
        type: String,
        required: [true, "punchline is required!"],
        minlength: [10, "punchline should have at least 3 characters!"]
    }
})

// create the joke model
const joke = mongoose.model("joke", jokeSchema);

// export Joke
module.exports = joke;
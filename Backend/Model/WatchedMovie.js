const mongoose = require("mongoose");

const WatchedMoviesSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  movies: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("WatchedMovies", WatchedMoviesSchema);

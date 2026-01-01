const express = require("express");
const router = express.Router();

const WatchedMovie = require("../Model/WatchedMovie");

// Add movie
router.post("/add", async (req, res) => {
  const { userId, movie } = req.body;

  try {
    const result = await WatchedMovie.findOneAndUpdate(
      { userId },
      { $addToSet: { movies: movie } }, // like arrayUnion
      { upsert: true, new: true }
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Remove movie//


router.post("/remove", async (req, res) => {
  const { userId, movie } = req.body;

  try {
    await WatchedMovie.findOneAndUpdate(
      { userId },
      { $pull: { movies: movie } } // like arrayRemove
    );

    res.status(200).json({ message: "Movie removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

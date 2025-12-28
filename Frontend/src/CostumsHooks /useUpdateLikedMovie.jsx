
import React from "react";
import { useContext, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Contex/UserContex";

function useUpdateLikedMovies() {
  const { User } = useContext(AuthContext);
  const [Error, setError] = useState(false);

  const notifyAdd = () => toast.success("Movie added to Liked List");
  const notifyRemove = () => toast.success("Movie removed from Liked List");
  const notifyError = (msg) => toast.error(msg);

  const addToLikedMovies = async (movie) => {
    try {
      await axios.post("/api/liked-movies/add", {
        userId: User._id || User.uid,
        movie,
      });

      notifyAdd();
    } catch (error) {
      notifyError(error.response?.data?.message || error.message);
      setError(true);
    }
  };

  const removeFromLikedMovies = async (movie) => {
    try {
      await axios.post("/api/liked-movies/remove", {
        userId: User._id || User.uid,
        movie,
      });

      notifyRemove();
    } catch (error) {
      notifyError(error.response?.data?.message || error.message);
      setError(true);
    }
  };

  const LikedMoviePopupMessage = (
    <Toaster
      toastOptions={{
        style: {
          padding: "1.5rem",
          backgroundColor: Error ? "#fff4f4" : "#f4fff4",
          borderLeft: Error ? "6px solid red" : "6px solid lightgreen",
        },
      }}
    />
  );

  return { addToLikedMovies, removeFromLikedMovies, LikedMoviePopupMessage };
}

export default useUpdateLikedMovies;

import React from "react";
import { useNavigate } from "react-router-dom";
import useUpdateWatchedMovies from "./useUpdateWatchedMovies";

function usePlayMovie() {
  const { addToWatchedMovies } = useUpdateWatchedMovies();
  const navigate = useNavigate();

  const playMovie = (movies, from) => {
    addToWatchedMovies(movies);
    navigate(`/play/${movies.id}`, { replace: true, state: { From: from } });
  };

  return { playMovie };
}

export default usePlayMovie;

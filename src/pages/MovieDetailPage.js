import React from "react";
import { useFetcher, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
//endpoint: https://api.themoviedb.org/3/movie/{movie_id}?api_key=a2c6e1101cef616ebfd793b414446804

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=a2c6e1101cef616ebfd793b414446804`,
    fetcher
  );
  console.log("datadetails", data);

  return <div>Movie Detail Page</div>;
};

export default MovieDetailPage;

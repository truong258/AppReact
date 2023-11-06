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
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;

  return (
    data && (
      <div className="py-10">
        <div className="w-full h-[600px] relative">
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div
            className="w-full h-full  bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
            }}
          ></div>
        </div>
        <div className="w-full h-[600px] max-w-[800px] mx-auto -mt-[300px] relative z-10 pb-10">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            className="w-full h-full rounded-xl object-top"
            alt=""
          />
        </div>
        <h1 className="text-center text-6xl font-bold text-white mb-10">
          {title}
        </h1>
        {genres.length > 0 && (
          <div className="flex items-center justify-center gap-x-5 mb-10">
            {genres.map((item) => (
              <span
                className="py-2 px-4 border-primary text-primary border rounded"
                key={item.id}
              >
                {item.name}
              </span>
            ))}
          </div>
        )}
        <p className="text-center leading-relaxed max-w-[600px] mx-auto">
          {overview}
        </p>
      </div>
    )
  );
};

export default MovieDetailPage;

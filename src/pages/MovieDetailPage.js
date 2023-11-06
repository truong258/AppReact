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
        <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
          {overview}
        </p>
        <MovieCredits></MovieCredits>
        <MovieVideos></MovieVideos>
      </div>
    )
  );
};

function MovieCredits() {
  //endpointActor: https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=a2c6e1101cef616ebfd793b414446804
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a2c6e1101cef616ebfd793b414446804`,
    fetcher
  );
  console.log("dataactor", data);

  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;

  return (
    <div className="py-10">
      <h2 className="text-center text-6xl mb-10">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              className="w-full h-[350px] object-cover rounded-lg mb-3"
              alt=""
            />
            <h3 className="text-xl text-center font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieVideos() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=a2c6e1101cef616ebfd793b414446804`,
    fetcher
  );

  if (!data) return null;
  console.log("datavideo", data);
  //<iframe width="853" height="480" src="https://www.youtube.com/embed/EQe1m92es8o" title="40 CA KHÚC QUỐC TẾ ĐẠT TRÊN 1 TỶ VIEW NGHE HOÀI KHÔNG CHÁN - NHẠC QUỐC TẾ HAY NHẤT 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  return <div></div>;
}
export default MovieDetailPage;

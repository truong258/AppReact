import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../config";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=a2c6e1101cef616ebfd793b414446804",
    fetcher
  );

  useEffect(() => {
    if (data !== undefined) {
      setMovies(data.results);
    }
  }, []);
  console.log(movies);

  return (
    <div className="movies-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;

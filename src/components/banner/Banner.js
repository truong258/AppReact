import React, { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { SwiperSlide, Swiper } from "swiper/react";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=a2c6e1101cef616ebfd793b414446804`,
    fetcher
  );

  const movies = data?.results || [];
  console.log("banner", movies);

  return (
    <section className="baner h-[500px] page-container bg-white rounded-lg mb-10 overflow-hidden">
      <Swiper grabCursor={true} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, poster_path } = item;
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg object-top"
      />
      <div className="absolute bottom-5 left-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-md">
            Action
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Action
          </span>
        </div>
        <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
          Watch
        </button>
      </div>
    </div>
  );
}

export default Banner;

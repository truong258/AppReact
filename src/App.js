import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import MovieCard from "./components/movie/MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <Banner></Banner>
      <section className="movies-layout page-container-fluid pb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container-fluid pb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Top Rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container-fluid pb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Top Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
}

export default App;

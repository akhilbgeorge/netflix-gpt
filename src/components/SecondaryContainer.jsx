import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);
  return (
    <div className="px-10 bg-black">
      <div className="relative -mt-36 z-10">
        <MovieList category="Now Playing" movies={nowPlayingMovies} />
        <MovieList category="Popular" movies={popularMovies} />
        <MovieList category="Top Rated" movies={topRatedMovies} />
        <MovieList category="Upcoming" movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

import MovieCard from "./MovieCard";

const MovieList = ({ category, movies }) => {
  return (
    <div className="mt-5">
      <h1 className="text-white font-semibold text-xl mb-3">{category}</h1>
      <div className="flex overflow-x-scroll scrollbar-hidden">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} imgPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

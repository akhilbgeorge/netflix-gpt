import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    const officialTrailers = json?.results?.filter(
      (item) => item?.name === "Official Trailer"
    );
    const officialTrailer = officialTrailers[0];
    dispatch(addTrailer(officialTrailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useTrailerVideo;

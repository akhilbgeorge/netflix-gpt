import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailer = useSelector((store) => store?.movies?.trailer);
  if (!trailer) return;
  const { key } = trailer;
  return (
    <div>
      <iframe
        className="aspect-video"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${key}`}
      ></iframe>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 aspect-video"></div>
    </div>
  );
};

export default VideoBackground;

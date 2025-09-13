import { MOVIE_CARD_IMG_URL } from "../utils/constants";

const MovieCard = ({ imgPath }) => {
  return (
    <div className="w-28 sm:w-32 md:w-36 lg:w-40 mr-4">
      <img src={MOVIE_CARD_IMG_URL + imgPath} alt="Movie card" />
    </div>
  );
};

export default MovieCard;

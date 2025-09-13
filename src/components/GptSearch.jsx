import { BG_IMG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="flex text-white flex-col mt-24 gap-5 min-h-screen items-center">
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_IMG_URL}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;

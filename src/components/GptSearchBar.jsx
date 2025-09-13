import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  return (
    <div className="relative z-20">
      <form>
        <input
          className="border-2 py-2 px-4 w-120 border-[#10A37F]/80 rounded-l-lg"
          type="text"
          placeholder={lang[selectedLanguage].gptSearchPlaceHolder}
        />
        <button className="bg-[#10A37F]/90 border-2 border-[#10A37F]/80 py-2 px-10 rounded-r-lg cursor-pointer">
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

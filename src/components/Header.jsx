import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import cinegpt from "../assets/cinegpt.png";
import chatgptlogo from "../assets/chatgptlogo.svg";
import { toggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store?.gpt?.gptSearch);
  const selectedLanguage = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.err(err);
    }
  };
  const handleToggleGptSearch = () => {
    dispatch(toggleGptSearch());
  };
  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="fixed z-20 left-0 top-0 flex items-center justify-between px-20 w-full bg-gradient-to-b from-black">
      <img className="w-22" src={cinegpt} alt="CineGPT Logo" />
      <div className="flex items-center gap-3">
        {user && (
          <>
            {gptSearch && (
              <select
                value={selectedLanguage}
                onChange={handleChangeLanguage}
                className="text-white bg-yellow-300/90 p-2.5 rounded-md"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={handleToggleGptSearch}
              className={`flex gap-1 p-2 pe-2.5 rounded-md text-white shadow-lg cursor-pointer ${
                gptSearch ? "bg-yellow-300/90" : "bg-[#10A37F]"
              }`}
            >
              {!gptSearch && <img src={chatgptlogo} alt="Chat gpt logo" />}
              <span>{gptSearch ? "Home" : "GPT Search"}</span>
            </button>
            <button
              onClick={handleLogout}
              className="bg-yellow-300/90 p-2 rounded-md text-white shadow-lg cursor-pointer"
            >
              Sign out
            </button>
          </>
        )}
        <span className="font-light text-white">{user?.displayName}</span>
      </div>
    </div>
  );
};

export default Header;

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import cinegpt from "../assets/cinegpt.png";

const Header = () => {
  const user = useSelector((store) => store.user);
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.err(err);
    }
  };
  return (
    <div className="fixed z-10 flex items-center justify-between px-20 w-full bg-gradient-to-b from-black">
      <img className="w-22" src={cinegpt} alt="CineGPT Logo" />
      <div>
        {user && (
          <button
            onClick={handleLogout}
            className="bg-yellow-300/90 p-2 rounded-md text-white shadow-lg"
          >
            Sign out
          </button>
        )}
        <span className="ms-4 font-light text-white">{user?.displayName}</span>
      </div>
    </div>
  );
};

export default Header;

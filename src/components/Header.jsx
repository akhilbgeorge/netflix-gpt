import { LOGO_URL } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

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
    <div className="flex items-center justify-between px-30 py-4 w-full h-20 bg-gradient-to-b from-black">
      <img className="w-44" src={LOGO_URL} alt="Netflix Logo" />
      <div>
        {user && (
          <button
            onClick={handleLogout}
            className="bg-red-600/80 p-2 rounded-md text-gray-200 shadow-lg"
          >
            Sign out
          </button>
        )}
        <span className="ms-4 font-light text-gray-800">
          {user?.displayName}
        </span>
      </div>
    </div>
  );
};

export default Header;

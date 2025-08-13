import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 px-30 py-4">
      <img className="w-44" src={LOGO_URL} alt="Netflix Logo" />
    </div>
  );
};

export default Header;

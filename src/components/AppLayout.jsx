import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import Header from "./Header";
import GptSearch from "./GptSearch";

const AppLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gptSearch = useSelector((store) => store?.gpt?.gptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <Header />
      {gptSearch ? <GptSearch /> : <Outlet />}
    </>
  );
};

export default AppLayout;

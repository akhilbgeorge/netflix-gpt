import { useState } from "react";
import { BG_IMG_URL } from "../utils/constants";
import { useRef } from "react";
import { validateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [displayError, setDisplayError] = useState(null);
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const handleForm = () => {
    const errorMessage = validateForm(
      fullNameRef?.current?.value,
      emailRef?.current?.value,
      passwordRef?.current?.value,
      isSignInForm
    );
    setDisplayError(errorMessage);
    if (errorMessage) return;
    if (!isSignInForm) {
      signUp();
    } else {
      signIn();
    }
  };

  const signUp = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
      );
      await updateProfile(user, { displayName: fullNameRef?.current?.value });
      const { uid, email, displayName } = auth.currentUser;
      dispatch(addUser({ uid, email, displayName }));
    } catch (err) {
      setDisplayError(err.code);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
      );
    } catch (err) {
      setDisplayError(err.code);
    }
  };

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_IMG_URL}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="flex justify-center items-center min-h-[calc(100vh-5rem)]">
        <form className="flex flex-col w-md gap-5 p-14 text-gray-50 bg-black/70 rounded-md">
          <h1 className="text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={fullNameRef}
              className="p-4 border border-gray-600 rounded-sm focus:outline-2 focus:outline-gray-300 focus:outline-offset-2 placeholder-gray-400"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={emailRef}
            className="p-4 border border-gray-600 rounded-sm focus:outline-2 focus:outline-gray-300 focus:outline-offset-2 placeholder-gray-400"
            type="text"
            placeholder="Email"
          />
          <input
            ref={passwordRef}
            className="p-4 border border-gray-600 rounded-sm focus:outline-2 focus:outline-gray-300 focus:outline-offset-2 placeholder-gray-400"
            type="password"
            placeholder="Password"
          />
          <span className="text-red-500">{displayError}</span>
          <button
            onClick={handleForm}
            type="button"
            className="px-4 py-2 rounded-sm bg-yellow-300/90 font-medium"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div>
            <span className="text-gray-400">
              {isSignInForm ? "New to CineGPT? " : "Already a user? "}
            </span>
            <button
              type="button"
              onClick={toggleForm}
              className="cursor-pointer hover:underline"
            >
              {isSignInForm ? "Sign up now" : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

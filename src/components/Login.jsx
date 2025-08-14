import { useState } from "react";
import { BG_IMG_URL } from "../utils/constants";
import Header from "./Header";
import { useRef } from "react";
import { validateForm } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [displayError, setDisplayError] = useState(null);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleForm = () => {
    const errorMessage = validateForm(fullName?.current?.value, email?.current?.value, password?.current?.value, isSignInForm);
    setDisplayError(errorMessage);
  };
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={BG_IMG_URL}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <Header />
      <form className="flex flex-col w-md gap-5 p-14 text-gray-50 bg-black/70 relative">
        <h1 className="text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            className="p-4 border border-gray-600 rounded-sm focus:outline-2 focus:outline-gray-300 focus:outline-offset-2 placeholder-gray-400"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 border border-gray-600 rounded-sm focus:outline-2 focus:outline-gray-300 focus:outline-offset-2 placeholder-gray-400"
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className="p-4 border border-gray-600 rounded-sm focus:outline-2 focus:outline-gray-300 focus:outline-offset-2 placeholder-gray-400"
          type="password"
          placeholder="Password"
        />
        <span className="text-red-500">{displayError}</span>
        <button
          onClick={handleForm}
          type="button"
          className="px-4 py-2 rounded-sm bg-red-600 font-medium"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div>
          <span className="text-gray-400">
            {isSignInForm ? "New to Netflix? " : "Already a user? "}
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
  );
};

export default Login;

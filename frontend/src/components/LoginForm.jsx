import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/SignUp/SignIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Handle successful login
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const auth = getAuth(app);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultsFromGoogle);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="bg-white p-8 max-w-md w-full flex-1 flex items-center justify-center overflow-y-auto">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Login</h1>
          </div>
          <div className="flex flex-col sm:flex-row justify-around mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="border flex items-center justify-center focus:ring-2 text-black px-6 py-2 rounded-full hover:bg-gray-200 whitespace-nowrap"
            >
              <img
                src="/google.webp"
                alt="google icon"
                className="h-6 w-6 sm:h-8 sm:w-8 mr-2"
              />
              <span className="text-sm sm:text-base">Login with Google</span>
            </button>
            <button className="border flex items-center justify-center focus:ring-2 text-black px-6 py-2 rounded-full hover:bg-gray-200 whitespace-nowrap">
              <img
                src="/facebook.webp"
                alt="facebook icon"
                className="h-6 w-6 sm:h-8 sm:w-8 mr-2"
              />
              <span className="text-sm sm:text-base">Login with Facebook</span>
            </button>
          </div>
          <div className="text-center text-gray-500 my-4">OR</div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <div className="flex justify-between mt-2">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
              <a
                href="#"
                onClick={() => navigate("/signupLogin")}
                className="text-sm text-blue-500 hover:underline"
              >
                Don't have an account? Sign Up here
              </a>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
      {/* Right Section: Slogan */}
      <div className="hidden lg:flex lg:w-1/3 bg-blue-100 p-8 ml-auto mr-4 flex-col items-start justify-center text-left rounded-xl m-[10px]">
        <h2 className="text-2xl font-semibold mb-4">
          It has never been easier to find someone like you!
          <p className="mt-4 text-lg text-gray-700">Sign up now!</p>
        </h2>

        <img
          src="/slogan.webp"
          alt="Slogan"
          className="max-w-full max-h-60 rounded-xl shadow-md object-contain"
        />
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";

function SignupForm() {
  return (
    <div className="flex h-screen">
      <div className="bg-white p-8 max-w-md w-full flex-1 flex items-center justify-center overflow-y-auto">
        <div className="w-full">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Get Started</h1>
          </div>
          <div className="flex flex-col sm:flex-row justify-around mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
            <button className="border flex items-center justify-center focus:ring-2 text-black px-6 py-2 rounded-full hover:bg-gray-200 whitespace-nowrap">
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
              Zewail City Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="s-AzureDiamond@zewailcity.edu.eg"
              className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
              placeholder="Hunter2"
              className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <a href="#" className="text-blue-500 hover:underline">
                terms and policies
              </a>
            </label>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600">
            Sign Up
          </button>
          <p className="mt-6 text-center text-gray-600">
            It has never been easier to find someone like you
          </p>
        </div>
      </div>
      {/* Right Section: Slogan */}
      <div className="hidden lg:flex lg:w-1/3 bg-blue-100 p-8 ml-auto mr-4 flex-col items-start justify-center text-left rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">
          It has never been easier to find someone like you!
        </h2>
        <img
          src="/slogan-image.png"
          alt="Slogan"
          className="max-w-full max-h-60 shadow-md object-contain"
        />
        <p className="mt-4 text-lg text-gray-700">Sign up now!</p>
      </div>
    </div>
  );
}

export default SignupForm;

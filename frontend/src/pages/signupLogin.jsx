import React from 'react';
import { Button, TextField, FormControlLabel, Checkbox } from '@mui/material';
const LoginSignUpPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Get started now</h1>

        <div className="flex flex-col space-y-4">
          <Button
            variant="contained"
            color="primary"
            startIcon={<img src="/google-icon.svg" alt="Google" className="h-6 w-6" />}
          >
            Login with Google
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<img src="/facebook-icon.svg" alt="Facebook" className="h-6 w-6" />}
          >
            Login with Facebook
          </Button>
        </div>

        <div className="my-4 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form className="flex flex-col space-y-4">
          <TextField
            label="Zewail City Email"
            variant="outlined"
            name="email"
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            fullWidth
          />
          <div className="flex items-center justify-between">
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="I agree to the terms and policies"
            />
            <a href="#" className="text-primary-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <Button variant="contained" color="primary" type="submit">
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignUpPage;
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar({ toggleMenu }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isSignupPage = location.pathname === "/login";

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-azure p-4 z-50">
      <div className="flex-1">
        <img
          src="/logo.png"
          alt="logo icon"
          className="h-20 w-auto sm:h-12 sm:w-auto mr-2"
        />
      </div>
      {!isSignupPage && (
        <div className="flex-1 flex justify-end space-x-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Edit Profile
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Sign In
          </button>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

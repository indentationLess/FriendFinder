import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Button, Typography, Paper } from "@mui/material";

import SignupForm from "./components/SignupForm";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/Card";
import ChatPage from "./components/ChatPage";
import Onboard from "./pages/onboard";
import ChatPopup from "./components/ChatPopup";
import LoginPage from "./components/LoginForm";

function AppContent({ menuOpen, setMenuOpen }) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState(null);

  // for testing
  const profiles = [
    {
      id: 1,
      name: "User 1 - CSAI",
      school: "DSAI school",
      imageUrl: "/api/placeholder/320/320",
    },
    {
      id: 2,
      name: "User 2 - CSAI",
      school: "DSAI school",
      imageUrl: "/api/placeholder/320/320",
    },
    {
      id: 3,
      name: "User 3 - CSAI",
      school: "DSAI school",
      imageUrl: "/api/placeholder/320/320",
    },
    {
      id: 4,
      name: "User 4 - CSAI",
      school: "DSAI school",
      imageUrl: "/api/placeholder/320/320",
    },
  ];

  useEffect(() => {
    setSelectedProfile(profiles[0]);
  }, []);

  const handleAccept = () => {
    if (selectedProfile) {
      navigate(`/chat/${selectedProfile.id}`);
    }
  };

  const handleReject = () => {
    if (currentIndex < profiles.length - 1) {
      const nextProfile = profiles[currentIndex + 1];
      setSelectedProfile(nextProfile);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleOnboard = () => {
    navigate("/onboard");
    setMenuOpen(false); // Optionally close menu when navigating
  };

  return (
    <div className="flex min-h-screen">
      {/* Main content - Left side */}
      <div className="flex-1 mr-[320px] p-6">
        {selectedProfile && (
          <div className="flex flex-col items-center">
            <ProfileCard profile={selectedProfile} />
            <div className="flex gap-4 mt-4">
              <Button
                variant="contained"
                color="error"
                onClick={handleReject}
                className="min-w-[100px]"
              >
                Reject
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={handleAccept}
                className="min-w-[100px]"
              >
                Accept
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* right sidebar */}
      {menuOpen && (
        <Paper
          elevation={3}
          className="w-[320px] fixed right-0 top-0 mt-16 h-[calc(100vh-4rem)] bg-white"
        >
          <div className="p-6">
            <Typography variant="h5" className="mb-4 font-semibold">
              Your Profile
            </Typography>
            <Typography variant="body1" className="mb-6 text-gray-600">
              Complete your profile by selecting your interests
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOnboard}
              fullWidth
            >
              Set Your Interests
            </Button>
          </div>
        </Paper>
      )}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <HelmetProvider>
        <div className="min-h-screen bg-gray-100">
          <Helmet>
            <title>Friend Finder</title>
            <link rel="icon" type="image/x-icon" href="/public/logo.png" />
          </Helmet>
          <NavBar toggleMenu={toggleMenu} />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route
              path="/"
              element={
                <AppContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              }
            />
            <Route path="/onboard" element={<Onboard />} />
            <Route path="/chat/:profileId" element={<ChatPage />} />
          </Routes>
          <ChatPopup />
        </div>
      </HelmetProvider>
    </Router>
  );
}

export default App;

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Button, Typography, Paper } from '@mui/material';
import SignupForm from "./components/signupform";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/card";
import ChatPage from "./components/ChatPage";
import Onboard from "./pages/onboard";

function AppContent() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState(null);
// for testing
  const profiles = [
    {
      id: 1,
      name: "User 1 - CSAI",
      school: "DSAI school",
      imageUrl: "/api/placeholder/320/320"
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
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setSelectedProfile(profiles[currentIndex + 1]);
  };

  const handleOnboard = () => {
    navigate('/onboard');
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
    </div>
  );
}

function App() {
  return (
    <Router>
      <HelmetProvider>
        <div className="min-h-screen bg-gray-100">
          <Helmet>
            <title>Friend Finder</title>
          </Helmet>
          <NavBar />
          <Routes>
            <Route path="/login" element={<SignupForm />} />
            <Route path="/" element={<AppContent />} />
            <Route path="/onboard" element={<Onboard />} />
            {/* Just add the Chat componenet: Omar */}
            <Route path="/chat/:profileId" element={<ChatPage />} />
          </Routes>
        </div>
      </HelmetProvider>
    </Router>
  );
}

export default App;
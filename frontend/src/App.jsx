import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Button, Typography, Paper } from '@mui/material';
import SignupForm from "./components/signupform";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/card";
import ChatPage from "./components/ChatPage";
import Onboard from "./pages/onboard";

const StackCards = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Omar Ali - CSAI",
      school: "SWD school",
      imageUrl: "/api/placeholder/320/320"
    },
    {
      id: 2,
      name: "Ali - CSAI",
      school: "SWD school",
      imageUrl: "/api/placeholder/320/320"
    },
    {
      id: 3,
      name: "Ahmad - Design",
      school: "SWD school",
      imageUrl: "/api/placeholder/320/320"
    }
  ]);

  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    if (profiles.length > 0) {
      setSelectedProfile(profiles[currentIndex]);
    }
  }, [currentIndex, profiles]);

  const handleAccept = () => {
    if (selectedProfile) {
      navigate(`/chat/${selectedProfile.id}`);
    }
  };

  const handleReject = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setProfiles([]);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex min-h-screen">
        {/* Main content - Cards */}
        <div className="flex-1 mr-[620px] p-12">
          <div className="min-w-[420px] max-h-[480px] mt-16 mx-auto">
            {profiles.map((profile, index) => (
              <div
                key={profile.id}
                className={`transition-all duration-300 ${
                  index < currentIndex ? 'hidden' : 
                  index === currentIndex ? 'block' : 
                  'hidden'
                }`}
              >
                <ProfileCard 
                  name={profile.name}
                  school={profile.school}
                  imageUrl={profile.imageUrl}
                />
                
                {index === currentIndex && (
                  <div className="flex justify-center gap-3 mt-3">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#00498E",
                        '&:hover': {
                          backgroundColor: "#2F5C84",
                        }
                      }}
                      onClick={handleReject}
                      className="min-w-[100px]"
                    >
                      Reject
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#00498E",
                        '&:hover': {
                          backgroundColor: "#2F5C84",
                        }
                      }}
                      onClick={handleAccept}
                      className="min-w-[100px]"
                    >
                      Accept
                    </Button>
                  </div>
                )}
              </div>
            ))}
            
            {profiles.length === 0 && (
              <div className="flex items-center justify-center h-[400px] bg-white rounded-lg shadow-lg">
                <Typography variant="h5">No more profiles to show</Typography>
              </div>
            )}
          </div>
        </div>

        {/* Right sidebar - Details */}
        <Paper 
          elevation={3} 
          className="w-[720px] fixed right-1 top-0 mt-16 h-[calc(95vh-6rem)] bg-white rounded-lg"
        >
          <div className="p-6">
            {selectedProfile ? (
              <>
                <Typography variant="h5" className="mb-4 font-bold text-gray-800">
                  {selectedProfile.name}
                </Typography>
                <Typography variant="body1" className="mb-2 text-yellow-500 font-semibold">
                  {selectedProfile.school}
                </Typography>
              </>
            ) : (
              <Typography variant="h5" className="mb-4 font-semibold">
                No profile selected
              </Typography>
            )}
          </div>
        </Paper>
      </div>
    </>
  );
};

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
              <Route path="/" element={<StackCards />} />
              <Route path="/onboard" element={<Onboard />} />
              <Route path="/chat/:profileId" element={<ChatPage />} />
            </Routes>
          </div>
        </HelmetProvider>
      </Router>
    );
  }

export default App;
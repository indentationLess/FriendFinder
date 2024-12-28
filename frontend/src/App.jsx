import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import SignupForm from "./components/signupform";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/Card";
import ChatPage from "./components/ChatPage";
import ChatPopup from "./components/chatPopup";
import LoginPage from "./components/LoginForm";

function AppContent() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [acceptedProfiles, setAcceptedProfiles] = useState([]);

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

  return (
    <main className="container mx-auto px-6 py-8 mt-32">
      <div className="flex justify-between items-start">
        {/* Left card */}
        <div className="mt-16">
          {selectedProfile && (
            <div className="w-[450px]">
              <ProfileCard
                name={selectedProfile.name}
                school={selectedProfile.school}
                imageUrl={selectedProfile.imageUrl}
                onAccept={handleAccept}
                onReject={handleReject}
              />
            </div>
          )}
        </div>

        {/* Right stacked cards */}
        <div className="relative w-[450px] h-[600px] -ml-32 mt-16">
          {profiles.slice(currentIndex + 1).map((profile, index) => (
            <div
              key={profile.id}
              className="absolute left-0 top-0"
              style={{
                transform: `translateX(${index * 20}px) translateY(${
                  index * 8
                }px)`,
                zIndex: profiles.length - (index + 1),
                opacity: Math.max(1 - index * 0.15, 0.4),
              }}
            >
              <div className="w-[450px]">
                <ProfileCard
                  name={profile.name}
                  school={profile.school}
                  imageUrl={profile.imageUrl}
                  onAccept={() => {}}
                  onReject={() => {}}
                  showActions={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/" element={<AppContent />} />
            <Route path="/chat/:profileId" element={<ChatPage />} />
          </Routes>
          <ChatPopup />
        </div>
      </HelmetProvider>
    </Router>
  );
}

export default App;

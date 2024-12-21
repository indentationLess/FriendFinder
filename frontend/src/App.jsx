import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

import SignupForm from "./components/signupform";
import NavBar from "./components/NavBar";
import ChatPopup from "./components/chatPopup";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Friend Finder</title>
          <meta content="Find friends with similar interests at Zewail City" />
          <link rel="icon" href="/logo.png" />
        </Helmet>

        <NavBar className="fixed top-0 w-full" />
        <div className="mt-16">
          <Routes>
            <Route path="/login" element={<SignupForm />} />
            <Route
              path="/"
              element={
                <div className="h-screen flex flex-row items-center text-blue-200 p-4"></div>
              }
            />
          </Routes>
          <ChatPopup />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

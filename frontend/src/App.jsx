import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/signupform';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar className="fixed top-0 w-full" />
      <div className="mt-16">
        <Routes>
          <Route path="/login" element={<SignupForm />} />
          <Route
            path="/"
            element={
              <div className="h-screen flex flex-row items-center text-blue-200 p-4">
                {/* Main content */}
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
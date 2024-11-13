import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="h-screen flex flex-row items-center text-blue-200 p-4">
      <NavBar className="fixed top-0 w-full" />
      <div className="mt-16">
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="h-screen flex flex-col items-center bg-gray-900 text-blue-200 p-4">
      <NavBar className="w-full max-w-6xl" />
      <div className="flex-1 flex justify-center">
      </div>
    </div>
  );
}

export default App;
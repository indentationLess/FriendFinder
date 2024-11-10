import React from 'react';
import Button from '@mui/material/Button';

function NavBar() {
  return (
    <div className="w-full mx-auto flex justify-between items-center bg-gray-800 p-4 rounded-md">
      <div className="flex-1">
        <Button variant="contained" color="primary" className="bg-blue-700">
          Friend Finder
        </Button>
      </div>
      <div className="flex-1 flex justify-end space-x-4">
        <Button variant="contained" color="primary" className="bg-blue-700">
          Edit Profile
        </Button>
        <Button variant="contained" color="primary" className="bg-blue-700">
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
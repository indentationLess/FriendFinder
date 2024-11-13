import React from 'react';
import Button from '@mui/material/Button';

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-blue-500 p-4">
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
    </nav>
  );
}
export default NavBar;
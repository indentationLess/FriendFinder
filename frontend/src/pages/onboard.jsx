import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Container } from '@mui/material';
import OnboardCard from '../components/onboardcard';

const Onboard = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState({});

  const handleSelect = (interest) => {
    setSelectedInterests((prevInterests) => ({
      ...prevInterests,
      [interest]: !prevInterests[interest],
    }));
  };

  const handleSubmit = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="lg" className="py-8">
      <div className="flex flex-col items-center">
        <Typography variant="h4" className="mb-8 font-semibold text-center">
          Select Your Interests
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <OnboardCard
            title="Music"
            options={['Rock', 'Pop', 'Jazz', 'Classical']}
            onSelect={handleSelect}
          />
          <OnboardCard
            title="Books"
            options={['Fiction', 'Non-Fiction', 'Biography', 'Self-Help']}
            onSelect={handleSelect}
          />
          <OnboardCard
            title="Sports"
            options={['Football', 'Basketball', 'Tennis', 'Cricket']}
            onSelect={handleSelect}
          />
          <OnboardCard
            title="Movies"
            options={['Action', 'Drama', 'Comedy', 'Sci-Fi']}
            onSelect={handleSelect}
          />
          <OnboardCard
            title="Tech"
            options={['AI', 'Web Dev', 'Mobile Apps', 'Gaming']}
            onSelect={handleSelect}
          />
          <OnboardCard
            title="Food"
            options={['Italian', 'Asian', 'Mexican', 'Indian']}
            onSelect={handleSelect}
          />
        </div>
        <Button 
          variant="contained" 
          color="primary"
          onClick={handleSubmit}
          className="min-w-[200px]"
        >
          Save Interests
        </Button>
      </div>
    </Container>
  );
};

export default Onboard;
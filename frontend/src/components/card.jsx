import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 450,
  width: '135%',
  borderRadius: '20px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const ProfileCard = ({ name, school, imageUrl, onAccept, onReject }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <StyledCard 
      className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        height="400"
        image={imageUrl}
        alt={name}
        className="h-[350px] w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
        <CardContent className="p-6">
          <Typography variant="h5" className="text-white font-normal mb-2">
            {name}
          </Typography>
          <Typography variant="h6" className="text-yellow-400">
            {school}
          </Typography>
          {isExpanded && (
            <div className="flex justify-center gap-4 mt-4">
              <Button
                variant="contained"
                sx={{
                  borderRadius: '20px',
                  backgroundColor: '#2196f3',
                  '&:hover': {
                    backgroundColor: '#1976d2'
                  }
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onReject();
                }}
                startIcon={<CloseIcon />}
              >
                Reject
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: '20px',
                  backgroundColor: '#2196f3',
                  '&:hover': {
                    backgroundColor: '#1976d2'
                  }
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onAccept();
                }}
                startIcon={<CheckIcon />}
              >
                Accept
              </Button>
            </div>
          )}
        </CardContent>
      </div>
    </StyledCard>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired
};

export default ProfileCard;
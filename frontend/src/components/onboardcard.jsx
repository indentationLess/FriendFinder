import React from 'react';
import { Card, CardContent, Typography, Checkbox, FormControlLabel } from '@mui/material';

const OnboardCard = ({ title, options, onSelect }) => {
  return (
    <Card className="w-60 m-2 shadow-md">
      <CardContent className="p-4">
        <Typography variant="h6" className="mb-3 font-semibold">
          {title}
        </Typography>
        <div className="flex flex-col gap-2">
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  size="small"
                  onChange={() => onSelect(option)}
                />
              }
              label={
                <Typography variant="body2" className="text-sm">
                  {option}
                </Typography>
              }
              className="m-0"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OnboardCard;
import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ exercise, setBodyPart, bodyPart }) => {
  return (
    <Stack
      className="bodyPart-card"
      type="button"
      alignItems="center"
      justifyContent="center"
      sx={
        bodyPart === exercise
          ? {
              borderTop: '4px solid #ff2625',
              backgroundColor: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '280px',
              cursor: 'pointer',
              gap: '47px'
            }
          : {
              backgroundColor: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '280px',
              cursor: 'pointer',
              gap: '47px'
            }
      }
      onClick={() => {
        setBodyPart(exercise);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: '40px', height: '40px' }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {exercise}
      </Typography>
    </Stack>
  );
};

export default BodyPart;

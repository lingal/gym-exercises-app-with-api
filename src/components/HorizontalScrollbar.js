import React from 'react';
import { Box } from '@mui/material';

const HorizontalScrollbar = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((exercise, idx) => {
        return <Box key={idx}>{exercise}</Box>;
      })}
    </div>
  );
};

export default HorizontalScrollbar;

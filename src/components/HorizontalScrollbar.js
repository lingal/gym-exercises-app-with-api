import React, { useContext } from 'react';
import { BodyPart } from '../components';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="left arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((exercise) => {
        return (
          <Box
            key={exercise.id || exercise}
            itemId={exercise.id || exercise}
            title={exercise.id || exercise}
            m="0 40px"
          >
            <BodyPart
              exercise={exercise}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        );
      })}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;

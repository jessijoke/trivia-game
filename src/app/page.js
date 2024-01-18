"use client"; // This is a client component 👈🏽

import React, { useState } from 'react';
import { 
  Typography,
  Container,
  Box,
  Button,
} from '@mui/material';
import StyledH1 from '../app/components/styledH1';
import StyledH2 from '../app/components/StyledH2';
import StyledH3 from '../app/components/StyledH3';
import MappedToggleButton from './components/MappedToggleButton';

export default function Home() {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const CATEGORY = 'Select a Category';
  const DIFFIFCULTY = 'Select a difficulty';

  const handleButtonGroup = (
    setChange, ariaLabel
  ) => (event, newValue
  ) => {
    setChange(newValue);
  };

  const categories = ['category 1', 'category 2', 'category 3', 'category 4', 'category 5'];
  const difficulties = ['easy', 'medium', 'hard'];
  
  return (
    <Box height="100vh" display="flex" flexDirection="column" justifyContent="space-around" sx={{ bgcolor: 'white' }}>
      <Container>
        <StyledH1 text={'Trivia Quiz'} />
        <StyledH2 text={'Trivia Quiz Description'} />
      </Container>
      <Container>
        <StyledH3 text={'Select a Category'} />
        <MappedToggleButton 
          array={categories}
          state={category}
          setState={setCategory}
          handleSetState={handleButtonGroup}
          ariaLabel={CATEGORY}
        />
      </Container>
      <Container>
      <StyledH3 text={'Select a Difficulty'} />
        <MappedToggleButton 
          array={difficulties}
          state={difficulty}
          setState={setDifficulty}
          handleSetState={handleButtonGroup}
          ariaLabel={DIFFIFCULTY}
        />
      </Container>
      <Container>
        <Button variant='contained'>Start Button</Button>
      </Container>
    </Box>
  )
}

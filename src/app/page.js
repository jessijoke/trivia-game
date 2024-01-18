"use client"; // This is a client component 👈🏽

import React, { useState, useEffect } from 'react';
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
  const [categoryList, setCategoryList] = useState({});
  const CATEGORY = 'Select a Category';
  const DIFFIFCULTY = 'Select a difficulty';

  const handleButtonGroup = (
    setChange, ariaLabel
  ) => (event, newValue
  ) => {
    setChange(newValue);
  };

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => setCategoryList(data.trivia_categories))
      .catch(error => console.log(error));
  }, []);

  console.log('dahhh', categoryList);

  const APIUrl = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;

  const difficulties = { 
    0: { id: 'easy', name: 'easy' },
    1: { id: 'medium', name: 'medium' },
    2: { id: 'hard', name: 'hard' }
  };
  
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="space-around" sx={{ bgcolor: 'white' }}>
      <Container>
        <StyledH1 text={'Trivia Quiz'} />
        <StyledH2 text={'Trivia Quiz Description'} />
      </Container>
      <Container>
        <StyledH3 text={'Select a Category'} />
        <MappedToggleButton 
          object={categoryList}
          state={category}
          setState={setCategory}
          handleSetState={handleButtonGroup}
          ariaLabel={CATEGORY}
        />
      </Container>
      <Container>
      <StyledH3 text={'Select a Difficulty'} />
        <MappedToggleButton 
          object={difficulties}
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

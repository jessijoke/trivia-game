"use client"; // This is a client component 👈🏽

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { 
  Container,
  Box,
  Button,
} from '@mui/material';
import { StyledH1, StyledH2, StyledH3, MappedToggleButton } from '../app/components/';

export default function Home() {
  const router = useRouter();

  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [categoryList, setCategoryList] = useState({});

  const CATEGORY = 'Select a Category';
  const DIFFIFCULTY = 'Select a difficulty';

  console.log(categoryList);

  const handleButtonGroup = (
    setChange
  ) => ( newValue
  ) => {
    setChange(newValue);
  };
  console.log(categoryList);

  const navigateToQuiz = () => {
    const query = { category: category, difficulty: difficulty };
    router.push(`/quiz/?category=${category}${difficulty ? `&difficulty=${difficulty}` : ''}`);
  };

  useEffect(() => {
    if (category.length >= 1) return;
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => {
        const transformedData = data.trivia_categories.map(category => ({
          id: category.id,
          name: category.name,
        }));
        console.log(transformedData);
        setCategoryList(transformedData);
      })
      // .then(data => setCategoryList(JSON.stringify(data.trivia_categories)))
      .catch(error => console.log(error));
  }, []);

  const difficulties = [
    { id: 'easy', name: 'easy' },
    { id: 'medium', name: 'medium' },
    { id: 'hard', name: 'hard' }
  ];
  
  return (
    <Container>
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
          <Button variant='contained' onClick={navigateToQuiz}>Start Button</Button>
        </Container>
      </Box>
    </Container>
  )
}

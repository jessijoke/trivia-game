"use client"; // This is a client component 👈🏽

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import {
  Container,
  Box,
  Button,
} from '@mui/material';
import { StyledH1, StyledH2, StyledH3, MappedToggleButton } from '../app/components/';
import { CATEGORY, DIFFICULTY, DIFFICULTIES } from './consts.js';
import { useQuiz } from './QuizContext';

export default function Home() {
  const router = useRouter();

  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const { quizData, setQuizData } = useQuiz();

  const APIUrl = `https://opentdb.com/api.php?amount=10&category=${category}${difficulty !== null ? `&difficulty=${difficulty}` : ''}&type=multiple`;

  const navigateToQuiz = () => {
    fetchQuizData();
    router.push(`/quiz`);
  };

  useEffect(() => {
    //isMounted handles async issues with useEffect and setting state
    let isMounted = true;

    if (categoryList.length >= 1 || !isMounted) return;

    fetch('https://opentdb.com/api_category.php')
        .then(response => response.json())
        .then(data => {
            if (isMounted) {
                const transformedData = data.trivia_categories.map(category => ({
                    id: category.id,
                    name: category.name,
                }));
                console.log('Transformed Data', transformedData);
                setCategoryList(transformedData);
            }
        })
        .catch(error => console.error(error));

    // Cleanup function
    return () => {
        isMounted = false;
    };
  }, []);

  const fetchQuizData = () => {
    //isMounted handles async issues with useEffect and setting state
    let isMounted = true;

    if (quizData.length >= 1 || !isMounted) return;

    fetch(APIUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data.results); // Log the fetched data
        const quizData = data.results.map(result => ({
          question: result.question,
          answers: [...result.incorrect_answers, result.correct_answer],
          correctAnswer: result.correct_answer
        }));

        setQuizData(quizData); // Update the quizData state with the fetched data
        })
      .catch(error => console.error(error));

    return () => {
      isMounted = false;
    };
  };

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
            object={DIFFICULTIES}
            state={difficulty}
            setState={setDifficulty}
            // handleSetState={handleButtonGroup}
            ariaLabel={DIFFICULTY}
          />
        </Container>
        <Container>
          <Button variant='contained' onClick={navigateToQuiz}>Start Button</Button>
        </Container>
      </Box>
    </Container>
  )
}

"use client"; // This is a client component 👈🏽

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useQuiz } from '../hooks/QuizContext';
import { useSearchParams } from 'next/navigation'
import { StyledH1, StyledH2, StyledH3, MappedToggleButton } from '../components/';
import {
  Container,
  Box,
  Button,
} from '@mui/material';

const Page = ({ params }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || 1;
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [allAnswers, setAllAnswers] = useState([]); // This is the state that will hold the answers array
  const { quizData, setQuizData } = useQuiz();
  const [answer, setAnswer] = useState('');
  const ANSWER = 'answer';

  useEffect(() => {
    if (page) {
      const parsedPage = parseInt(page, 10);
      setCurrentPage(parsedPage);
    }
  }, [page]);

  const handlePageChange = (newPage, event) => {
    event.preventDefault();
    router.push(`/quiz?page=${newPage}`);
  };

  const currentQuestion = quizData[currentPage - 1]; // Adjust for zero-based index

  useEffect(() => {
    if (currentQuestion) {
      let tempanswers = currentQuestion.answers;
      
      // Scramble the order of the answers array using Fisher-Yates shuffle algorithm
      for (let i = tempanswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempanswers[i], tempanswers[j]] = [tempanswers[j], tempanswers[i]];
      }
  
      setAllAnswers(tempanswers.map((answer, index) => ({
        id: index,
        name: answer,
      })));
    }
  }, [currentQuestion]);

  useEffect(() => {
    // console.log('all answers test', allAnswers)
  }, [allAnswers])

  return (
    <Container>
      <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="space-around" sx={{ bgcolor: 'white' }}>
        <Container>
          <StyledH1 text={'Trivia Quiz'} />
        </Container>
        <Container>
        {currentQuestion && (
          <div>
            <StyledH2 text={`Question ${currentPage}`} />
            <StyledH3 text={currentQuestion.question} />
          </div>
        )}
        </Container>
        <Container>
          {/* {console.log('in app', allAnswers)} */}
          {allAnswers.length > 0 && ( // Render MappedToggleButton only when allAnswers is populated
            <MappedToggleButton
              object={allAnswers}
              state={answer}
              setState={setAnswer}
              ariaLabel={ANSWER}
              value='name'
            />
          )}
        </Container>
        <Container>
          <Button variant='contained' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous Question</Button>
          <span> Question {currentPage} of {quizData.length} </span>
          <Button variant='contained' onClick={(e) => handlePageChange(currentPage + 1, e)} disabled={currentPage === quizData.length}>Next Question</Button>
        </Container>
      </Box>
    </Container>
  );
};

export default Page;
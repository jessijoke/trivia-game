"use client"; // This is a client component 👈🏽

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useQuiz } from '../QuizContext';
import { useSearchParams } from 'next/navigation'
import { MappedToggleButton } from '../components/';

const Page = ({ params }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || 1;
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const { quizData, setQuizData } = useQuiz();
  const [answer, setAnswer] = useState('');
  const ANSWER = 'answer';

  useEffect(() => {
      console.log(quizData);
  }, [quizData]);

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

  let answers = [];
  let allAnswers = [];

  useEffect(() => {
    if (currentQuestion) {
      answers = [...currentQuestion?.incorrect_answers, currentQuestion?.correct_answer];
      
      // Scramble the order of the answers array using Fisher-Yates shuffle algorithm
      for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
      }
  
      allAnswers = answers.map((answer, index) => ({
        id: index,
        name: answer,
      }));
      
      console.log('current question', allAnswers);
    }
  }, [currentQuestion]);

  useEffect(() => {
    console.log('allAnswers', allAnswers);
    console.log('answer', answer);
  }, [allAnswers, answer]);


  return (
    <div>
      <h1>Quiz</h1>
      {currentQuestion && (
        <div>
          <p>Question {currentPage}</p>
          <p>{currentQuestion.question}</p>
        </div>
      )}
      test
      <MappedToggleButton
        object={allAnswers}
        state={answer}
        setState={setAnswer}
        ariaLabel={ANSWER}
        value='name'
      />
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous Question
      </button>
      <span> Question {currentPage} of {quizData.length} </span>
      <button onClick={(e) => handlePageChange(currentPage + 1, e)} disabled={currentPage === quizData.length}>
        Next Question
        </button>
    </div>
  );
};

export default Page;
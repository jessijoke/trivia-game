"use client"; // This is a client component 👈🏽

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useQuiz } from '../QuizContext';
import { useSearchParams } from 'next/navigation'

const Page = ({ params }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || 1;
  const router = useRouter();
  console.log('testing params', page);
  const [currentPage, setCurrentPage] = useState(1);
  const { quizData, setQuizData } = useQuiz();
  console.log('the current question is ', quizData[page]);


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

  return (
    <div>
      <h1>Quiz</h1>
      {currentQuestion && (
        <div>
          <p>Question {currentPage}</p>
          <p>{currentQuestion.question}</p>
        </div>
      )}
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
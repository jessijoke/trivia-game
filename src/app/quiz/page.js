"use client"; // This is a client component 👈🏽

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useQuiz } from '../QuizContext';
import { Script } from 'next/script';

const Page = () => {
  const router = useRouter();
  const { page } = router.query ?? { page: 1 };
  const [currentPage, setCurrentPage] = useState(1);
  const { quizData, setQuizData } = useQuiz();

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
    router.push(`/?page=${newPage}`);
  };

  const currentQuestion = quizData[currentPage - 1]; // Adjust for zero-based index

  return (
    <div>
      <h1>Quiz</h1>
      {currentQuestion && (
        <div>
          <p>Question {currentPage}</p>
          <p>{currentQuestion.text}</p>
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
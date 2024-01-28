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
      {/* Render your quiz content here using currentQuestion */}
      {currentQuestion && (
        <div>
          <p>Question {currentPage}</p>
          <p>{currentQuestion.text}</p>
          {/* Render other details of the question */}
        </div>
      )}
      {/* Add pagination controls/buttons */}
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
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuestionCard from '../../components/words-memory/QuestionCard';
import ScoreReport from '../../components/words-memory/ScoreReport';
import { WORDS_MEMORY_DURATION } from '../../config/testsConfig';
import { ErrorReport } from '../../js/words-memory-test/ErrorReport';
import { Test } from '../../js/words-memory-test/Test';

const WordsMemoryTest = () => {
  const [test] = useState(new Test(WORDS_MEMORY_DURATION, 60));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerClick = (chosenAnswer: number) => {
    if (chosenAnswer === test.questions[currentQuestionIndex].answer) {
      test.rightAnswers = test.rightAnswers + 1;
    } else {
      test.errorReports.push(
        new ErrorReport(test.questions[currentQuestionIndex], chosenAnswer)
      );
    }
    if (currentQuestionIndex === test.questions.length - 1) {
      setIsFinished(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      test.currentQuestionIndex++;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(test.questions[currentQuestionIndex]);
      test.errorReports.push(
        new ErrorReport(test.questions[currentQuestionIndex], -1)
      );
      setIsFinished(true);
    }, test.duration * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='min-h-screen p-4 relative bg-dark-blue flex flex-col justify-center items-center'>
      <Link
        className='absolute top-10 right-10 underline text-orange hover:text-white self-end'
        to='/words-memory'
      >
        Quitter le test
      </Link>
      {isFinished ? (
        <ScoreReport test={test} />
      ) : (
        <QuestionCard
          questionIndex={currentQuestionIndex}
          question={test.questions[currentQuestionIndex]}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </main>
  );
};

export default WordsMemoryTest;

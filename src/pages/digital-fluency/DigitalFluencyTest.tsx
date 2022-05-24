import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuestionCard from '../../components/digital-fluency/QuestionCard';
import ScoreReport from '../../components/digital-fluency/ScoreReport';
import { Answer, ErrorReport } from '../../js/digital-fluency-test/Question';
import { Test } from '../../js/digital-fluency-test/Test';

const DigitalFluencyTest = () => {
  const [test] = useState(new Test(60, 60));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerClick = (chosenAnswer: Answer) => {
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
      setIsFinished(true);
    }, test.duration * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='h-screen relative bg-dark-blue flex flex-col justify-center items-center'>
      <Link
        className='absolute top-10 right-10 underline text-orange hover:text-white self-end'
        to='/btca-app/digital-fluency'
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

export default DigitalFluencyTest;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuestionCard from '../../components/spatial-orientation/QuestionCard';
import ScoreReport from '../../components/spatial-orientation/ScoreReport';
import { SPATIAL_ORIENTATION_DURATION } from '../../config/testsConfig';
import { ErrorReport } from '../../js/spatial-orientation-test/ErrorReport';
import { Test } from '../../js/spatial-orientation-test/Test';

const SpatialOrientationTest = () => {
  const [test] = useState(new Test(SPATIAL_ORIENTATION_DURATION, 60));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerClick = (chosenAnswerIndex: number) => {
    if (
      chosenAnswerIndex === test.questions[currentQuestionIndex].answerIndex
    ) {
      test.rightAnswers++;
    } else {
      test.errorReports.push(
        new ErrorReport(test.questions[currentQuestionIndex], chosenAnswerIndex)
      );
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
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
    <main className='h-screen relative bg-dark-blue flex flex-col justify-center items-center'>
      <Link
        className='absolute top-10 right-10 underline text-orange hover:text-white self-end'
        to='/digital-fluency'
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

export default SpatialOrientationTest;

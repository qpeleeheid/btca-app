import React, { FC, useState } from 'react';
import { Answer, Question } from '../../js/digital-fluency-test/Question';
import AnswerButtons from './AnswerButtons';
import QuestionTable from './QuestionTable';

interface QuestionCardProps {
  questionIndex: number;
  question: Question;
  handleAnswerClick: Function;
}

enum QuestionStep {
  topLineShown = 0,
  botLineShown = 1,
  answerButtonsShown = 2,
}

const QuestionCard: FC<QuestionCardProps> = ({
  questionIndex,
  question,
  handleAnswerClick,
}) => {
  const [currentStep, setCurrentStep] = useState(QuestionStep.topLineShown);

  const handleNextClick = () => {
    currentStep === QuestionStep.answerButtonsShown
      ? setCurrentStep(QuestionStep.topLineShown)
      : setCurrentStep(currentStep + 1);
  };

  return (
    <div className='p-4 w-auto md:w-2/3 bg-light-gray flex flex-col'>
      <div className='flex justify-between items-center'>
        <h2 className='my-3 ml-3 text-xl'>Test d'Aisance Numérique</h2>
        <div>Question {questionIndex + 1}</div>
      </div>

      {currentStep === QuestionStep.topLineShown && (
        <QuestionTable
          topLine={question.topLine}
          botLine=''
          handleNextClick={handleNextClick}
        />
      )}
      {currentStep === QuestionStep.botLineShown && (
        <QuestionTable
          topLine=''
          botLine={question.botLine}
          handleNextClick={handleNextClick}
        />
      )}
      {currentStep === QuestionStep.answerButtonsShown && (
        <AnswerButtons
          handleAnswerClick={(answer: Answer) => {
            handleNextClick();
            handleAnswerClick(answer);
          }}
        />
      )}
    </div>
  );
};

export default QuestionCard;

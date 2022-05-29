import React, { FC, useState } from 'react';
import { Question } from '../../js/words-memory-test/Question';
import ActionButton from '../ActionButton';
import QuestionRules from './QuestionRules';
import QuestionWords from './QuestionWords';

interface QuestionCardProps {
  questionIndex: number;
  question: Question;
  handleAnswerClick: Function;
}

enum QuestionStep {
  rulesShown = 0,
  wordsShown = 1,
}

const QuestionCard: FC<QuestionCardProps> = ({
  questionIndex,
  question,
  handleAnswerClick,
}) => {
  const [currentStep, setCurrentStep] = useState(QuestionStep.rulesShown);

  const handleNextClick = () => {
    currentStep === QuestionStep.wordsShown
      ? setCurrentStep(QuestionStep.rulesShown)
      : setCurrentStep(QuestionStep.wordsShown);
  };

  return (
    <div className='p-4 w-auto md:w-2/3 bg-light-gray flex flex-col'>
      <div className='flex justify-between items-center'>
        <h2 className='my-3 ml-3 text-xl'>Test de Mémoire des mots</h2>
        <div>Question {questionIndex + 1}</div>
      </div>

      {currentStep === QuestionStep.rulesShown && (
        <>
          <QuestionRules rules={question.rules} />
          <ActionButton text='Suivant' handleAction={handleNextClick} />
        </>
      )}
      {currentStep === QuestionStep.wordsShown && (
        <QuestionWords
          words={question.words}
          handleAnswerClick={(answer: number) => {
            handleNextClick();
            handleAnswerClick(answer);
          }}
        />
      )}
    </div>
  );
};

export default QuestionCard;

import React, { FC, useState } from 'react';
import { Question } from '../../js/spatial-orientation-test/Question';
import ActionButton from '../ActionButton';
import ArrowsCombinationsPanel from './ArrowsCombinationsPanel';
import QuestionRules from './QuestionRules';

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  handleAnswerClick: Function;
}

enum QuestionStep {
  RulesShown = 1,
  AnswerButtonsShown = 0,
}

const QuestionCard: FC<QuestionCardProps> = ({
  question,
  questionIndex,
  handleAnswerClick,
}) => {
  const [currentStep, setCurrentStep] = useState(QuestionStep.RulesShown);
  const handleNextClick = () => {
    switch (currentStep) {
      case QuestionStep.RulesShown: {
        setCurrentStep(QuestionStep.AnswerButtonsShown);
        break;
      }
      case QuestionStep.AnswerButtonsShown: {
        setCurrentStep(QuestionStep.RulesShown);
        break;
      }
    }
  };

  return (
    <div className='p-4 w-auto md:w-2/3 bg-light-gray flex flex-col'>
      <div className='flex justify-between items-center'>
        <h2 className='my-3 ml-3 text-xl'>Test d'Orientation Spatiale</h2>
        <div>Question {questionIndex + 1}</div>
      </div>
      {currentStep === QuestionStep.RulesShown ? (
        <>
          <QuestionRules rule1={question.rule1} rule2={question.rule2} />
          <ActionButton text='Suivant' handleAction={handleNextClick} />
        </>
      ) : currentStep === QuestionStep.AnswerButtonsShown ? (
        <ArrowsCombinationsPanel
          arrowsCombinations={question.arrowsCombinations}
          handleAnswerClick={(answerIndex: number) => {
            handleNextClick();
            handleAnswerClick(answerIndex);
          }}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default QuestionCard;

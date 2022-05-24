import React, { FC } from 'react';
import { Answer } from '../../js/digital-fluency-test/Question';

interface AnswerButtonsProps {
  handleAnswerClick: Function;
}

const AnswerButtons: FC<AnswerButtonsProps> = ({ handleAnswerClick }) => {
  return (
    <div className='mx-auto my-6 w-96 flex'>
      <button
        className='py-4 px-8 mx-auto rounded bg-blue text-white hover:bg-dark-blue'
        onClick={() => handleAnswerClick(Answer.topLine)}
      >
        S
      </button>
      <button
        className='py-4 px-8 mx-auto rounded bg-blue text-white hover:bg-dark-blue'
        onClick={() => handleAnswerClick(Answer.botLine)}
      >
        I
      </button>
      <button
        className='py-4 px-8 mx-auto rounded bg-blue text-white hover:bg-dark-blue'
        onClick={() => handleAnswerClick(Answer.equal)}
      >
        E
      </button>
    </div>
  );
};

export default AnswerButtons;

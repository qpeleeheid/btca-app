import React, { FC, MouseEventHandler } from 'react';
import ActionButton from '../ActionButton';

interface QuestionTableProps {
  topLine: string;
  botLine: string;
  handleNextClick: MouseEventHandler;
}

const QuestionTable: FC<QuestionTableProps> = ({
  topLine,
  botLine,
  handleNextClick,
}) => {
  return (
    <>
      <div className='mx-auto my-6 w-96'>
        <div className='border border-dark-blue flex'>
          <div className='p-2 w-2/3 text-center border-r border-dark-blue'>
            Ligne <span className='uppercase'>supérieure</span>
          </div>
          <div className='p-2 w-1/3 text-center'>{topLine}</div>
        </div>
        <div className='border border-t-0 border-dark-blue flex'>
          <div className='p-2 w-2/3 border-r text-center border-dark-blue'>
            Ligne <span className='uppercase'>inférieure</span>
          </div>
          <div className='p-2 w-1/3 text-center'>{botLine}</div>
        </div>
      </div>
      <ActionButton text='Suivant' handleAction={handleNextClick} />
    </>
  );
};

export default QuestionTable;

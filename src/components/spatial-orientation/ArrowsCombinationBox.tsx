import React, { FC } from 'react';
import { Arrow } from '../../js/spatial-orientation-test/Arrows';

interface ArrowsCombinationBoxProps {
  index: number;
  topArrow: Arrow;
  botArrow: Arrow;
  handleAnswerClick: Function;
}

const ArrowsCombinationBox: FC<ArrowsCombinationBoxProps> = ({
  index,
  topArrow,
  botArrow,
  handleAnswerClick,
}) => {
  return (
    <div className='p-2'>
      <div className='my-2'>
        <img className='mx-auto' src={topArrow.icon} alt='Top Arrow Icon' />
        <img className='mx-auto' src={botArrow.icon} alt='Top Arrow Icon' />
      </div>
      <button
        className='w-full text-white bg-blue rounded font-bold hover:bg-dark-blue'
        onClick={() => handleAnswerClick(index)}
      >
        X
      </button>
    </div>
  );
};

export default ArrowsCombinationBox;

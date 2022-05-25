import React, { FC } from 'react';
import { ArrowsCombination } from '../../js/spatial-orientation-test/ArrowsCombination';
import ArrowsCombinationBox from './ArrowsCombinationBox';

interface ArrowsCombinationsPanelProps {
  arrowsCombinations: Array<ArrowsCombination>;
  handleAnswerClick: Function;
}

const ArrowsCombinationsPanel: FC<ArrowsCombinationsPanelProps> = ({
  arrowsCombinations,
  handleAnswerClick,
}) => {
  return (
    <div>
      <div className='grid grid-cols-3 w-80 mx-auto'>
        {arrowsCombinations.map((combination, index) => (
          <ArrowsCombinationBox
            key={index}
            index={index}
            topArrow={combination.topArrow}
            botArrow={combination.botArrow}
            handleAnswerClick={handleAnswerClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ArrowsCombinationsPanel;

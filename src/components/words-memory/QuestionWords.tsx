import React, { FC } from 'react';

interface QuestionWordsProps {
  words: Array<string>;
  handleAnswerClick: Function;
}

const QuestionWords: FC<QuestionWordsProps> = ({
  words,
  handleAnswerClick,
}) => {
  return (
    <div className='my-3'>
      <h3 className='text-xl text-center uppercase mb-3'>Règles</h3>
      <div className='flex justify-center'>
        {words.map((word, index) => (
          <div className='uppercase m-2 p-2' key={index}>
            {word}
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <button
          className='py-4 px-8 mx-auto rounded bg-blue text-white hover:bg-dark-blue'
          onClick={() => handleAnswerClick(0)}
        >
          0
        </button>
        <button
          className='py-4 px-8 mx-auto rounded bg-blue text-white hover:bg-dark-blue'
          onClick={() => handleAnswerClick(1)}
        >
          1
        </button>
        <button
          className='py-4 px-8 mx-auto rounded bg-blue text-white hover:bg-dark-blue'
          onClick={() => handleAnswerClick(2)}
        >
          2
        </button>
        <button
          className='py-4 px-8 mx-auto rounded bg-blue text-white hover:bg-dark-blue'
          onClick={() => handleAnswerClick(3)}
        >
          3
        </button>
      </div>
    </div>
  );
};

export default QuestionWords;

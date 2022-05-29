import React, { FC } from 'react';

interface QuestionRulesProps {
  rules: Array<string>;
}

const QuestionRules: FC<QuestionRulesProps> = ({ rules }) => {
  return (
    <div className='my-3'>
      <h3 className='text-xl text-center uppercase mb-3'>Règles</h3>
      <div className='flex justify-center'>
        {rules.map((rule, index) => (
          <div className='uppercase m-2 p-2' key={index}>
            {rule}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionRules;

import React, { FC } from 'react';
import { Rule } from '../../js/spatial-orientation-test/Rule';
import ActionButton from '../ActionButton';

interface QuestionRulesProps {
  rule1: Rule;
  rule2: Rule;
}

const QuestionRules: FC<QuestionRulesProps> = ({ rule1, rule2 }) => {
  return (
    <div className='my-3'>
      <h3 className='text-xl text-center uppercase mb-3'>Règles</h3>
      <p className='text-center'>{rule1.getString()}</p>
      <p className='text-center'>{rule2.getString()}</p>
    </div>
  );
};

export default QuestionRules;

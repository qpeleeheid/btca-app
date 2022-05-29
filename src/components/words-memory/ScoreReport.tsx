import React, { FC } from 'react';
import { Test } from '../../js/words-memory-test/Test';

interface ScoreReportProps {
  test: Test;
}

const ScoreReport: FC<ScoreReportProps> = ({ test }) => {
  return (
    <div className='p-4 w-auto md:w-2/3 bg-light-gray rounded flex flex-col'>
      <h1 className='text-2xl text-center my-2'>
        Fin du Test d'Aisance Numérique
      </h1>
      <div className='flex justify-between items-center'>
        <div>
          Score: {test.rightAnswers}/{test.currentQuestionIndex + 1}
        </div>
        <div>Durée totale: {test.duration}sec.</div>
      </div>
      {test.errorReports.map(({ question, chosenAnswer }, index) => {
        return (
          <div
            className='py-2 flex justify-between items-center border-b border-white last:border-none'
            key={index}
          >
            <div>Question {test.questions.indexOf(question) + 1}</div>
            <div>
              <div className='flex justify-center'>
                {question.rules.map((rule, index) => (
                  <div className='uppercase m-2 p-2' key={index}>
                    {rule}
                  </div>
                ))}
              </div>
              <div className='flex justify-center'>
                {question.words.map((word, index) => (
                  <div className='uppercase m-2 p-2' key={index}>
                    {word}
                  </div>
                ))}
              </div>
            </div>
            <div>{chosenAnswer === -1 ? 'Aucune réponse' : chosenAnswer}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ScoreReport;

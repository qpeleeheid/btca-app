import React, { FC } from 'react';
import { Test } from '../../js/spatial-orientation-test/Test';

interface ScoreReportProps {
  test: Test;
}

const ScoreReport: FC<ScoreReportProps> = ({ test }) => {
  return (
    <div className='p-4 w-auto md:w-2/3 bg-light-gray rounded flex flex-col'>
      <h1 className='text-2xl text-center my-2'>
        Fin du Test d'Orientation Spatiale
      </h1>
      <div className='flex justify-between items-center'>
        <div>
          Score: {test.rightAnswers}/{test.currentQuestionIndex + 1}
        </div>
        <div>Durée totale: {test.duration}sec.</div>
      </div>
      {test.errorReports.map(({ question, chosenAnswerIndex }, index) => {
        return (
          <div
            className='py-2 flex justify-between items-center border-b border-white'
            key={index}
          >
            <div className='m-2'>Erreur {index + 1}</div>

            <div className='m-3 flex-grow'>
              <h3 className='text-xl text-center uppercase mb-3'>Règles</h3>
              <p className='text-center'>{question.rule1.getString()}</p>
              <p className='text-center'>{question.rule2.getString()}</p>
            </div>
            <div className='grid grid-cols-3'>
              {question.arrowsCombinations.map((combination, index) => (
                <div
                  className={
                    index === chosenAnswerIndex
                      ? 'my-2 p-2 border border-orange'
                      : index === question.answerIndex
                      ? 'my-2 p-2 border'
                      : 'my-2 p-2'
                  }
                >
                  <img
                    className='mx-auto'
                    src={combination.topArrow.icon}
                    alt='Top Arrow Icon'
                  />
                  <img
                    className='mx-auto'
                    src={combination.botArrow.icon}
                    alt='Top Arrow Icon'
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScoreReport;

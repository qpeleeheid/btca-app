import React, { FC } from 'react';
import { Answer } from '../../js/digital-fluency-test/Question';
import { Test } from '../../js/digital-fluency-test/Test';

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
      {test.errorReports.map((errorReport, index) => {
        return (
          <div
            className='py-2 flex justify-between items-center border-b border-white'
            key={index}
          >
            <div>Erreur {index + 1}</div>
            <div>
              <div>
                {errorReport.question.topLine} ={' '}
                {errorReport.question.topNumber}{' '}
                {errorReport.chosenAnswer === Answer.topLine
                  ? '(Votre réponse)'
                  : errorReport.chosenAnswer === Answer.equal
                  ? '(Votre réponse: égal)'
                  : ''}
              </div>
              <div>
                {errorReport.question.botLine} ={' '}
                {errorReport.question.botNumber}{' '}
                {errorReport.chosenAnswer === Answer.botLine
                  ? '(Votre réponse)'
                  : errorReport.chosenAnswer === Answer.equal
                  ? '(Votre réponse: égal)'
                  : ''}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScoreReport;

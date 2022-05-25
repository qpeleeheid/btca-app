import React, { FC } from 'react';
import { Test } from '../../js/spatial-orientation-test/Test';

interface ScoreReportProps {
  test: Test;
}

const ScoreReport: FC<ScoreReportProps> = ({ test: Test }) => {
  return <div>ScoreReport</div>;
};

export default ScoreReport;

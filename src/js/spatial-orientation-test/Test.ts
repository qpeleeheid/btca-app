import { ErrorReport } from './ErrorReport';
import { Question, randomQuestionFactory } from './Question';

class Test {
  questions: Array<Question>;
  duration: number;
  rightAnswers: number;
  errorReports: Array<ErrorReport>;
  currentQuestionIndex: number;

  constructor(duration: number, questionNumber: number) {
    this.questions = questionsGenerator(questionNumber);
    this.duration = duration;
    this.rightAnswers = 0;
    this.errorReports = [];
    this.currentQuestionIndex = 0;
  }
}

function questionsGenerator(questionNumber: number): Array<Question> {
  let questions: Array<Question> = [];
  for (let i = 0; i < questionNumber; i++) {
    questions.push(randomQuestionFactory(6));
  }
  return questions;
}

export { Test };

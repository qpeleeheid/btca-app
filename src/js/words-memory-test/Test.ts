import { ErrorReport } from './ErrorReport';
import { Question, randomQuestionFactory } from './Question';
import { categories } from './wordsData';

class Test {
  questions: Array<Question>;
  duration: number;
  errorReports: Array<ErrorReport>;
  rightAnswers: number;
  currentQuestionIndex: number;

  constructor(duration: number, questionCount: number) {
    this.questions = generateQuestions(questionCount);
    this.duration = duration;
    this.errorReports = [];
    this.rightAnswers = 0;
    this.currentQuestionIndex = 0;
  }
}

function generateQuestions(questionCount: number): Array<Question> {
  let questions: Array<Question> = [];
  for (let i = 0; i < questionCount; i++) {
    questions.push(randomQuestionFactory(categories));
  }
  return questions;
}

export { Test };

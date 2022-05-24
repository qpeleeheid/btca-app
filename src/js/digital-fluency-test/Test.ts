import { ErrorReport, Question, randomQuestionFactory } from './Question';

export class Test {
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
    questions.push(randomQuestionFactory());
  }
  return questions;
}

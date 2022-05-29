import { Question } from './Question';

class ErrorReport {
  question: Question;
  chosenAnswer: number;

  constructor(question: Question, chosenAnswer: number) {
    this.question = question;
    this.chosenAnswer = chosenAnswer;
  }
}

export { ErrorReport };

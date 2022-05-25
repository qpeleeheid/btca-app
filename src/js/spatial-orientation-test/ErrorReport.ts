import { Question } from './Question';

class ErrorReport {
  question: Question;
  chosenAnswerIndex: number;

  constructor(question: Question, chosenAnswerIndex: number) {
    this.question = question;
    this.chosenAnswerIndex = chosenAnswerIndex;
  }
}

export { ErrorReport };

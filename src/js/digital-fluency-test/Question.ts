export enum Answer {
  topLine = 0,
  botLine = 1,
  equal = 2,
  noAnswer = 3,
}

export class ErrorReport {
  question: Question;
  chosenAnswer: Answer;

  constructor(question: Question, answerChoice: Answer) {
    this.question = question;
    this.chosenAnswer = answerChoice;
  }
}

export class Question {
  topLine: string;
  botLine: string;
  answer: Answer;
  topNumber: number;
  botNumber: number;

  constructor(
    topLine: string,
    botLine: string,
    answer: Answer,
    topNumber: number,
    botNumber: number
  ) {
    this.topLine = topLine;
    this.botLine = botLine;
    this.answer = answer;
    this.topNumber = topNumber;
    this.botNumber = botNumber;
  }
}

export function randomQuestionFactory(): Question {
  let { topNumber, botNumber }: { topNumber: number; botNumber: number } =
    generateNumbers();

  let topLine: string = generateOperationLine(topNumber);
  let botLine: string = generateOperationLine(botNumber);
  let answer: Answer;
  if (topNumber > botNumber) {
    answer = Answer.topLine;
  } else if (botNumber > topNumber) {
    answer = Answer.botLine;
  } else {
    answer = Answer.equal;
  }

  return new Question(topLine, botLine, answer, topNumber, botNumber);
}

function generateNumbers(): { topNumber: number; botNumber: number } {
  let number1: number = Math.round(Math.random() * 80) + 10;
  let number2: number = number1 + (Math.round(Math.random() * 18) - 9);

  if (Math.round(Math.random())) {
    return { topNumber: number1, botNumber: number2 };
  } else {
    return { topNumber: number2, botNumber: number1 };
  }
}

function generateOperationLine(answerNumber: number): string {
  enum Operation {
    division = 0,
    substraction = 1,
    addition = 2,
    multiplication = 3,
  }

  let line: string = '';
  let minOperationId: Operation = 0;
  let maxOperationId: Operation = 3;
  while (line.length === 0) {
    let operationId: Operation =
      Math.round(Math.random() * (maxOperationId - minOperationId)) +
      minOperationId;
    switch (operationId) {
      case Operation.division: {
        let multipliers: Array<number> = [];
        for (let i = 2; i * answerNumber < 300; i++) {
          multipliers.push(i * answerNumber);
        }

        if (multipliers.length === 0) {
          minOperationId = 1;
          continue;
        } else {
          let operand1: number =
            multipliers[Math.floor(Math.random() * multipliers.length)];
          let operand2: number = operand1 / answerNumber;
          line = `${operand1} ÷ ${operand2}`;
        }
        break;
      }
      case Operation.substraction: {
        let operand2: number = Math.round(Math.random() * 8) + 1;
        let operand1: number = answerNumber + operand2;
        line = `${operand1} - ${operand2}`;
        break;
      }
      case Operation.addition: {
        let operand2: number = Math.round(Math.random() * 8) + 1;
        let operand1: number = answerNumber - operand2;
        line = `${operand1} + ${operand2}`;
        break;
      }
      case Operation.multiplication: {
        let dividers: Array<number> = [];

        for (let i = 2; i <= 10; i++) {
          if (answerNumber % i === 0) {
            dividers.push(i);
          }
        }
        if (dividers.length === 0) {
          maxOperationId = 2;
          continue;
        }
        let operand1 = dividers[Math.floor(Math.random() * dividers.length)];
        let operand2 = answerNumber / operand1;
        line = `${operand1} x ${operand2}`;
        break;
      }
    }
  }
  return line;
}

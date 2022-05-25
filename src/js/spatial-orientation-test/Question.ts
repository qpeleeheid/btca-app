import { Arrow, BlackArrows, WhiteArrows } from './Arrows';
import { ArrowsCombination } from './ArrowsCombination';
import { ColorRule, Direction, OrientationRule, Rule } from './Rule';

class Question {
  arrowsCombinations: Array<ArrowsCombination>;
  rule1: Rule;
  rule2: Rule;
  answerIndex: number;

  constructor(
    arrowsCombinations: Array<ArrowsCombination>,
    rule1: Rule,
    rule2: Rule,
    answerIndex: number
  ) {
    this.arrowsCombinations = arrowsCombinations;
    this.rule1 = rule1;
    this.rule2 = rule2;
    this.answerIndex = answerIndex;
  }
}

function randomQuestionFactory(arrowsCombinationNumber: number) {
  let arrowsCombinations: Array<ArrowsCombination> = [];
  /* Generate the arrowsCombinations without duplicate */
  while (arrowsCombinations.length < arrowsCombinationNumber) {
    let blackArrow: Arrow =
      BlackArrows[Math.floor(Math.random() * BlackArrows.length)];
    let whiteArrow: Arrow =
      WhiteArrows[Math.floor(Math.random() * WhiteArrows.length)];
    let newTopArrow: Arrow;
    let newBotArrow: Arrow;
    if (Math.round(Math.random())) {
      newTopArrow = blackArrow;
      newBotArrow = whiteArrow;
    } else {
      newTopArrow = whiteArrow;
      newBotArrow = blackArrow;
    }
    let newArrowsCombination = new ArrowsCombination(newTopArrow, newBotArrow);
    if (!arrowsCombinations.includes(newArrowsCombination)) {
      arrowsCombinations.push(newArrowsCombination);
    }
  }
  /* Chose the right combination */
  let answerIndex: number = Math.floor(
    Math.random() * arrowsCombinations.length
  );
  let { topArrow, botArrow } = arrowsCombinations[answerIndex];
  /* Determine the rules */
  let colorRule: ColorRule = new ColorRule(
    topArrow.color,
    botArrow.color,
    Math.round(Math.random()) ? Direction.Above : Direction.Under
  );
  let orientationRule: OrientationRule = new OrientationRule(
    topArrow.orientation,
    botArrow.orientation,
    Math.round(Math.random()) ? Direction.Above : Direction.Under
  );
  let rule1: Rule;
  let rule2: Rule;
  if (Math.round(Math.random())) {
    rule1 = colorRule;
    rule2 = orientationRule;
  } else {
    rule1 = orientationRule;
    rule2 = colorRule;
  }

  return new Question(arrowsCombinations, rule1, rule2, answerIndex);
}

export { Question, randomQuestionFactory };

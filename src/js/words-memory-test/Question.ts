import { match } from 'assert';
import { Category } from './wordsData';

class Question {
  rules: Array<string>;
  words: Array<string>;
  answer: number;

  constructor(rules: Array<string>, words: Array<string>, answer: number) {
    this.rules = rules;
    this.words = words;
    this.answer = answer;
  }
}

function randomQuestionFactory(categoriesData: Array<Category>): Question {
  /* Determine the number of good matches, and their position in the rules-words */
  let categories: Array<Category> = [...categoriesData];

  let rightmatchesCount: number = Math.round(Math.random() * 3);
  let matchesPositions: Array<Boolean> = [];
  for (let i = 0; i < 3; i++) {
    matchesPositions.push(i < rightmatchesCount);
  }
  shuffleArray(matchesPositions);

  /* Select the two categories which will be used */
  let category1: Category = categories.splice(
    Math.floor(Math.random() * categories.length),
    1
  )[0];
  let category2: Category = categories.splice(
    Math.floor(Math.random() * categories.length),
    1
  )[0];

  /* Select the rules and words */
  let rules: Array<string> = [];
  let words: Array<string> = [];

  matchesPositions.forEach((match: Boolean, index) => {
    /* Select the category */
    let selectedCategory: Category;
    let unselectedCategory: Category;
    if (Math.round(Math.random())) {
      selectedCategory = category1;
      unselectedCategory = category2;
    } else {
      selectedCategory = category2;
      unselectedCategory = category1;
    }

    rules.push(selectedCategory.title);

    /* Select the word matching or not the category (attention that the word is not already present in the previous words) */
    let category = match ? selectedCategory : unselectedCategory;
    let newWord: string;
    do {
      newWord =
        category.words[Math.floor(Math.random() * category.words.length)];
    } while (words.includes(newWord));
    words.push(newWord);
  });

  return new Question(rules, words, rightmatchesCount);
}

function shuffleArray(array: Array<Object>): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export { Question, randomQuestionFactory };

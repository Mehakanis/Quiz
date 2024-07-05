#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let name = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Enter your Name" 
})
let totalQuestions = 5

const quiz: {
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  question_5: string;
} = await inquirer.prompt([
  {
    name: "question_1",
    type: "list",
    message: "What is TypeScript?",
    choices: [
      "A new version of JavaScript",
      "A superset of JavaScript that adds static types",
      "A server-side scripting language",
      "A framework for building web applications",
    ],
  },
  {
    name: "question_2",
    type: "list",
    message: "Which command is used to compile TypeScript code to JavaScript?",
    choices: ["tsc", "ts-compile", "typescript", "node"],
  },
  {
    name: "question_3",
    type: "list",
    message: "How do you define an interface in TypeScript?",
    choices: ["class", "interface", "enum", "function"],
  },
  {
    name: "question_4",
    type: "list",
    message:
      "Which of the following is the correct syntax for declaring a variable in TypeScript?",
    choices: [
      "var x: number = 5",
      "let x number = 5",
      "let x: number = 5",
      "let x := 5",
    ],
  },
  {
    name: "question_5",
    type: "list",
    message: "What does the ? symbol represent in TypeScript?",
    choices: [
      "A required property",
      "An optional property",
      "A mandatory method",
      "A static method",
    ],
  },
]);

let score: number = 0; // initial score 0

switch (quiz.question_1) {
  case "A superset of JavaScript that adds static types":
    console.log(chalk.green("1. correct!"));
    ++score;
    break; // ager case true hai to break laga do agy kuch bhi print ni kerwana
  default:
    console.log(chalk.red("1. Incorrect"));
}
switch (quiz.question_2) {
  case "tsc":
    console.log(chalk.green("2. correct!"));
    ++score;
    break; // ager case true hai to break laga do agy kuch bhi print ni kerwana
  default:
    console.log(chalk.red("2. Incorrect"));
}

switch (quiz.question_3) {
  case "interface":
    console.log(chalk.green("3. correct!"));
    ++score;
    break; // ager case true hai to break laga do agy kuch bhi print ni kerwana
  default:
    console.log(chalk.red("3. Incorrect"));
}
switch (quiz.question_4) {
  case "let x: number = 5":
    console.log(chalk.green("4. correct!"));
    ++score;
    break; // ager case true hai to break laga do agy kuch bhi print ni kerwana
  default:
    console.log(chalk.red("4. Incorrect"));
}
switch (quiz.question_5) {
  case "An optional property":
    console.log(chalk.green("5. correct!"));
    ++score;
    break; // ager case true hai to break laga do agy kuch bhi print ni kerwana
  default:
    console.log(chalk.red("5. Incorrect"));
}
console.log(`${chalk.blue.bold(name.name)} Your score is ${chalk.bold.red(score)} out of ${chalk.red.bold(totalQuestions)}`);

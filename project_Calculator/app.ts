#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const goSleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};
async function welcomeHome() {
  let headLine = chalkAnimation.rainbow(
    `

                                         ~ ~ ~ ~
          _______ _______        _______ _     _        _______ _______  _____   ______
 ~ ~ ~ ~  |       |_____| |      |       |     | |      |_____|    |    |     | |_____/ ~ ~ ~ ~
          |_____  |     | |_____ |_____  |_____| |_____ |     |    |    |_____| |     \_
                                        
                                         ~ ~ ~ ~

`
  ); //start
  await goSleep();
  headLine.stop(); //stop
  console.log(
    chalk.blue(`
    _____________________
   |  _________________  |
   | | JO           0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|
   `)
  );
}
await welcomeHome();

async function getQuestion() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      message: "Which operation do you want to perform? \n",
      choices: [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division",
        "Exponent",
      ],
    },
    {
      type: "number",
      name: "num1",
      message: "Enter number 1: ",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter number 2: ",
    },
  ]);
  if (answers.operator == "Addition") {
    console.log(
      chalk.green(
        `${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`
      )
    );
  } else if (answers.operator == "Subtraction") {
    console.log(
      chalk.green(
        `${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`
      )
    );
  } else if (answers.operator == "Multiplication") {
    console.log(
      chalk.green(
        `${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`
      )
    );
  } else if (answers.operator == "Division") {
    console.log(
      chalk.green(
        `${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`
      )
    );
  } else if (answers.operator == "Exponent") {
    console.log(
      chalk.green(
        `${answers.num1} ** ${answers.num2} = ${answers.num1 ** answers.num2}`
      )
    );
  }
}
// askQuestion();

async function againStart() {
  do {
    await getQuestion();
    var goAhead = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: "Do you want to continue? Press y or n: ",
    });
  } while (
    goAhead.restart == "y" ||
    goAhead.restart == "Y" ||
    goAhead.restart == "yes" ||
    goAhead.restart == "YES"
  );
}
againStart();

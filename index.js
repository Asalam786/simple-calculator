#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter first number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select one of the operators to perform operator",
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
        ],
    },
]);
// condition statement
if (answer.operator === "Addition") {
    console.log("Your answer is =", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log("Your answer is =", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("Your answer is =", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("Your answer is =", answer.firstNumber / answer.secondNumber);
}

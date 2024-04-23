#! /usr/bin/env node
import inquirer from 'inquirer';
console.log('\n\tWelcome to \'Muhammad Harmain\' - CLI Simple Calculator\n');
let answer = await inquirer.prompt([
    {
        name: 'firstNumber',
        message: 'Enter 1st Number: ',
        type: 'number'
    },
    {
        name: 'secondNumber',
        message: 'Enter 2nd Number: ',
        type: 'number'
    },
    {
        name: 'operation',
        message: 'Enter Operation to perform: ',
        type: 'list',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
    }
]);
if (answer.operation === 'Addition') {
    console.log(`The result when ${answer.firstNumber} is ADDED in ${answer.secondNumber} is: ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operation === 'Subtraction') {
    console.log(`The result when ${answer.firstNumber} is SUBTRACTED from ${answer.secondNumber} is: ${answer.firstNumber - answer.secondNumber}`);
}
else if (answer.operation === 'Multiplication') {
    console.log(`The result when ${answer.firstNumber} is MULTIPLIED by ${answer.secondNumber} is: ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operation === 'Division') {
    if (answer.secondNumber === 0) {
        console.log('The result is Infinity');
    }
    else {
        console.log(`The result when ${answer.firstNumber} is DIVIDED by ${answer.secondNumber} is: ${answer.firstNumber / answer.secondNumber}`);
    }
}
else {
    console.log('Invalid Operation');
}

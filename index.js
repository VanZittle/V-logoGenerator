const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for your logo (max 4 letters):',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for your text (e.g., red, #ff0000):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter a color for that shape (e.g., red, #ff0000):',
    },
];
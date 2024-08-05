const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for your logo (max 4 letters):',
        validate: input => input.length <= 4 || 'Text must be four characters or less'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for your text (e.g., red, #ff0000):'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for that shape (e.g., red, #ff0000):'
    }
]).then(answers => {
    let shape;
    switch (answers.shape) {
        case 'Circle':
            shape = new Circle(answers.shapeColor);
            break;
        case 'Square':
            shape = new Square(answers.shapeColor);
            break;
        case 'Triangle':
            shape = new Triangle(answers.shapeColor);
            break;
    }

    const textProps = shape.textProperties();

    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250">
        ${shape.render()}
        <text x="50%" y="${textProps.y}" font-size="${textProps.fontSize}" text-anchor="middle" font-weight="bold" font-family="sans-serif" fill="${answers.textColor}">${answers.text}</text>
    </svg>`;

    fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) throw err;
        console.log('The logo has been saved as logo.svg!');
    });
});

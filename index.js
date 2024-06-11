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

const svgGenerator = ({ text, textColor, shape, color }) => {

    switch (shape) {
        case 'Circle':
            return `
<svg height="250" width="250">
    <circle cx="125" cy="125" r="125" fill="${color}" />
    <text x="50%" y="53%" dominant-baseline="middle" text-anchor="middle" font-size="80px" fill="${textColor}" font-weight="bold" font-family="sans-serif">${text}</text>
</svg>`;
            break;
        case 'Square':
            return `
<svg height="250" width="250">
    <rect width="250" height="250"  fill="${color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="90px" fill="${textColor}" font-weight="bold" font-family="sans-serif">${text}</text>
</svg>`;
            break;
        case 'Triangle':
            return `
<svg height="250" width="250">
    <polygon points="125,50 250,200 0,200" fill="${color}" />
    <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="60px" fill="${textColor}" font-weight="bold" font-family="sans-serif">${text}</text>
</svg>`;
            break;
    }

} 

inquirer.prompt(questions).then((data) => {
    const svgContent = svgGenerator(data)
    fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) throw err;
        console.log('The logo has been saved as logo.svg!');
    });
});
// const objSVG = {text:'HGDS', textColor:'red', shape: 'Circle', color:'black'}
// console.log(svgGenerator(objSVG));
module.exports = {svgGenerator}
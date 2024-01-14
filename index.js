const { writeFile } = require("fs");
const inquirer = require('inquirer');
const printXML = require('./lib/shapes'); 

const userInput = [
    {
        type: 'input',
        message: 'Text. 3 characters or less.',
        name: 'text'
    },
    {
        type: 'input',
        message: 'Tect color. Enter a color keyword (OR a hexadecimal number)',
        name: 'textColor'
    },
    {
        type: 'input',
        message: 'circle, triangle, and square?',
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        message: 'Shapes color. Enter a color keyword (OR a hexadecimal number)',
        name: 'shapeColor'
    }
];

function writeToFile(fileName = 'svg.XML', userInput) {
    writeFile(`./output/${fileName}`, printXML(userInput), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('SVG created successfully.');
        }
    });
}

const init = () => {
    inquirer
        .prompt(userInput)
        .then((answers) => {
            writeToFile('svg.XML', answers);
        })
        .catch((error) => {
            console.error('Error during inquirer prompt:', error);
        });
};

init();
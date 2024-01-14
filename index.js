const { writeFile } = require("fs");
const inquirerPromise = import('inquirer').then((inquirer) => inquirer.default);
const printXML = require('./lib/shapes');

const userInput = [
  {
    type: 'input',
    message: 'Text. 3 characters or less.',
    name: 'text',
    validate: (input) => input.length <= 3 || 'Please enter 3 characters or less.',
  },
  {
    type: 'input',
    message: 'Text color. Enter a color keyword (OR a hexadecimal number)',
    name: 'textColor',
    validate: (input) => input.length > 0 || 'Text color is required.',
  },
  {
    type: 'list', // Change from 'input' to 'list'
    message: 'circle, triangle, and square?',
    name: 'shape',
    choices: ['Triangle', 'Circle', 'Square'],
  },
  {
    type: 'input',
    message: 'Shapes color. Enter a color keyword (OR a hexadecimal number)',
    name: 'shapeColor',
    validate: (input) => input.length > 0 || 'Shapes color is required.',
  },
];

function writeToFile(fileName = 'output.svg', userData) {
  writeFile(`./output/${fileName}`, printXML(userData), (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('SVG created successfully.');
    }
  });
}

const init = () => {
  inquirerPromise
    .then((inquirer) => inquirer.prompt(userInput))
    .then((answers) => {
      writeToFile('output.svg', answers);
    })
    .catch((error) => {
      console.error('Error during inquirer prompt:', error);
    });
};

init();
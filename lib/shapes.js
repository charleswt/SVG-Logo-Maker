const TEXT = 220;

function shapes (userInput, TEXT) {

    if (userInput.shape === 'Circle') 
    return `<circle cx="150" cy="150" r="150" fill="${userInput.shapeColor}" />`;

    if(userInput === 'Triangle') return TEXT = 200;
    if (userInput.shape === 'Triangle')
    return `<polygon points="150 0, 300 300, 0 300" fill="${userInput.shapeColor}" />`;
    
    return `<rect x="0" y="0" width="300" height="300" fill="${userInput.shapeColor}" />`; 
}

function printXML (userInput) {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

    ${shapes(userInput)}
  
    <text x="150" y="${TEXT}" font-size="60" text-anchor="middle" fill="${userInput.textColor}">${userInput.text}</text>
  
  </svg>`
}

module.exports = printXML;
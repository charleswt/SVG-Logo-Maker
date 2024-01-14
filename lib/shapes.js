function shapes (userInput) {

    if (userInput.shape === 'Circle') 
    return `<circle cx="150" cy="100" r="80" fill="${userInput.shapeColor}" />`

    if (userInput.shape === 'Square')
    return `<square x="150" y="150" fill="${userInput.shapeColor}" />`

    return `<polygon points="50 15, 100 100, 0 100" fill="${userInput.shapeColor}" />`
}

function printXML (userInput) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapes(userInput)}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.textColor}">${userInput.text}</text>
  
  </svg>`
}

module.exports = printXML;
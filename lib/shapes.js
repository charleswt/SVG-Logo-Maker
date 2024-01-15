class Shape {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
  
    renderLater(TEXT = 150) {
      return `<text x="150" y="${TEXT}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
  class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
  
    render() {
      return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="150" fill="${this.shapeColor}" />${this.renderLater()}</svg>`;
    }
  }
  
  class Square extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
  
    render(TEXT = 220) {
      return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="300" fill="${this.shapeColor}" />${this.renderLater()}</svg>`;
    }
  }
  
  class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
  
    render() {
      return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150 0, 300 300, 0 300" fill="${this.shapeColor}" />${this.renderLater(220)}</svg>`;
    }
  }

  module.exports = { Circle, Square, Triangle }
const { Circle, Square, Triangle } = require('./shapes');

describe('Shapes', () => {
  test('Triangle should render correctly', () => {
    const shape = new Triangle('text', 'red', 'blue');
    expect(shape.render()).toEqual(
      '<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150 0, 300 300, 0 300" fill="blue" /><text x="150" y="220" font-size="60" text-anchor="middle" fill="red">text</text></svg>'
    );
  });

  test('Circle should render correctly', () => {
    const shape = new Circle('text', 'red', 'blue');
    expect(shape.render()).toEqual(
      '<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="150" fill="blue" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="red">text</text></svg>'
    );
  });

  test('Square should render correctly', () => {
    const shape = new Square('text', 'red', 'blue');
    expect(shape.render()).toEqual(
      '<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="300" fill="blue" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="red">text</text></svg>'
    );
  });
});
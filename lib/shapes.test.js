const { Circle, Triangle, Square } = require('./shapes');

test('Circle render', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<circle cx="125" cy="125" r="125" fill="blue" />');
});

test('Triangle render', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="125,30 250,200 0,200" fill="blue" />');
});

test('Square render', () => {
    const shape = new Square();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<rect width="250" height="250" fill="blue" />');
});

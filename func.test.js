const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const Calculator = require('./calculator');
const calculator = new Calculator();
const caesarCipher = require('./ceasarCipher');
const analyzeArray = require('./analyzeArray');

test('capitalize', () => expect(capitalize('hello')).toBe('Hello'));

test('reverse string', () => expect(reverseString('Hello')).toBe('olleH'));

test('Calculator', () => {
    expect(calculator.add(1,1)).toBe(2);
    expect(calculator.subtract(2,1)).toBe(1);
    expect(calculator.multiply(2,2)).toBe(4);
    expect(calculator.divide(2,1)).toBe(2)
});

test('Cipher', () => expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!'));

test('analyzeArray', () => expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6}))
// IMPORT MODULES under test here:
import { addExclamationPoints, multiplyBySeven, myFunction, multiplyBy12ThenHalve, divideThenMultiply, } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected, 'bunny rabbit');

    const expected2 = 'cat!!!';

    const actual2 = addExclamationPoints('cat');
    expect.equal(actual2, expected2, 'cat');

    const expected3 = 'dog!!!';

    const actual3 = addExclamationPoints('dog');
    expect.equal(actual3, expected3, 'dog');

    const expected4 = 'go sloth!!!';

    const actual4 = addExclamationPoints('go sloth');
    expect.equal(actual4, expected4, 'go sloth');

    console.log(actual4);
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('this test should take in a number and multiply it by seven', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected, 4);
    
    const expected2 = 14;

    const actual2 = multiplyBySeven(2);

    expect.equal(actual2, expected2, 2);

    const expected3 = 49;

    const actual3 = multiplyBySeven(7);

    expect.equal(actual3, expected3, 7);
    
    const expected4 = 35;

    const actual4 = multiplyBySeven(5);

    expect.equal(actual4, expected4, 5);


});

test('multiply a number by twelve then cut the result in half', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected, 4);

    const expected2 = 48;

    const actual2 = multiplyBy12ThenHalve(8);

    expect.equal(actual2, expected2, 8);

    const expected3 = 60;

    const actual3 = multiplyBy12ThenHalve(10);

    expect.equal(actual3, expected3, 10);

    const expected4 = 30;

    const actual4 = multiplyBy12ThenHalve(5);

    expect.equal(actual4, expected4, 5);
});

test('take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected, 8, 4, 5);


    const expected2 = 4;
    const actual2 = divideThenMultiply(10, 5, 2);
    expect.equal(actual2, expected2, 10, 5, 2);

    const expected3 = 8;
    const actual3 = divideThenMultiply(20, 10, 4);
    expect.equal(actual3, expected3, 20, 10, 4);


    const expected4 = 16;
    const actual4 = divideThenMultiply(40, 20, 8);
    expect.equal(actual4, expected4, 40, 20, 8);





});
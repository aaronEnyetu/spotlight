// IMPORT MODULES under test here:
import { addExclamationPoints, myFunction } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = myFunction('bunny rabbit');

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

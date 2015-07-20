'use strict';

import { assert } from 'chai';

describe('Problem 1 - Multiples of 3 and 5', function () {

    it(`

        If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
        The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

    `, function () {
        assert.equal(solution(), 233168);
    });

});

function solution() {

    let limit = 1;
    let result = 0;

    while(limit < 1000) {
        if (limit % 3 === 0 || limit % 5 ===0) {
            result += limit;
        }
        limit++;
    }

    return result;
}



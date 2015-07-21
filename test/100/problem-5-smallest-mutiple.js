'use strict';

import { assert } from 'chai';

describe('Problem 5 - Smallest multiple', function() {

    it(`

        2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
        What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

    `, function() {
        assert.equal(solution(10), 2520);
        assert.equal(solution(20), 232792560);
    });

});

function solution(limit) {
    let result = 1;
    for (let i = 2; i <= limit; i++) {
        result = leastCommonMultiple(result, i);
    }
    return result;
}


function leastCommonMultiple(a, b) {
    return a * b / greatestCommonFactor(a, b);
}

function greatestCommonFactor(a,b) {
    if (a === 0) {
        return b;
    }
    if (b === 0) {
        return a;
    }
    return greatestCommonFactor(b, a % b);
}
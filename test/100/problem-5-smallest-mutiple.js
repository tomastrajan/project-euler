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
    let solution;
    let i = 1;
    while(!solution) {
        let candidate = limit * i;
        let isSolution = true;
        for (let j = 2; j < limit; j++) {
            if (candidate % j !== 0) {
                isSolution = false;
            }
        }
        if (isSolution) {
            solution = candidate;
        }
        i++;
    }
    return solution;
}

'use strict';

import { assert } from 'chai';

describe('Problem 6 - Sum square difference', function() {

    it(`

        The sum of the squares of the first ten natural numbers is, 1^2 + 2^2 + ... + 10^2 = 385
        The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)^2 = 552 = 3025

        Hence the difference between the sum of the squares of the first ten natural numbers
        and the square of the sum is 3025 ? 385 = 2640.

        Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

    `, function() {
        assert.equal(solution(10), 2640);
        assert.equal(solution(100), 25164150);
    });

});

function solution(limit) {
    let numbers = [];
    for (let i = 1; i <= limit; i++) {
        numbers.push(i);
    }

    let sumOfSquares = numbers.map(function(number) {
            return Math.pow(number, 2);
        }).reduce(function(sum, n) {
            return sum += n;
        }, 0);

    let squareOfSum = Math.pow(numbers.reduce(function(sum, n) {
        return sum += n;
    }, 0), 2);

    return squareOfSum - sumOfSquares;
}


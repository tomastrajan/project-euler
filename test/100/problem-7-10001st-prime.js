'use strict';

import { assert } from 'chai';

describe.only('Problem 7 - 10001st prime', function() {

    it(`

        By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
        What is the 10 001st prime number?

    `, function() {
        this.timeout(5000);

        assert.equal(solution(6), 13);
        assert.equal(solution(10001), 104743);
    });

});

function solution(limit) {

    let found;
    let foundCount = 0;
    let candidate = 2;
    let test;
    let isPrime;

    while(foundCount < limit) {
        test = 2;
        isPrime = true;
        while(test < candidate) {
            if (test !== candidate && candidate % test === 0) {
                isPrime = false;
                break;
            }
            test++;
        }
        if (isPrime) {
            foundCount++;
            found = candidate;
        }
        candidate++;
    }

    return found;
}
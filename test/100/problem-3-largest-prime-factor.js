'use strict';

import { assert } from 'chai';

let primesLessThan100 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

describe('Problem 3 - Largest prime factor', function () {

    it(`

    The prime factors of 13195 are 5, 7, 13 and 29.
    What is the largest prime factor of the number 600851475143 ?

  `, function () {
        assert.deepEqual(getPrimes(100), primesLessThan100);
        assert.deepEqual(solution(13195), 29);

        assert.deepEqual(solution(600851475143), 6857);
    });

});

//let getPrimesMemoized = _.memoize(getPrimes);

function solution(input, limit = 100, start = 2, result = 1) {
    let basicPrimes = getPrimes(limit, start);

    basicPrimes.forEach(function(prime) {
       if (input % prime === 0) {
           result = prime;
           input = input / result;
       }
    });

    if (input / 2 > result) {
        return solution(input, limit * 2, limit, result);
    }

    return result;
}

function getPrimes(limit, start = 2) {

    let primes = [];

    for (let i = start; i < limit; i++) {
        let candidate = i;
        let test = 2;
        let isPrime = true;
        while (test < i) {
            if (test !== candidate && candidate % test === 0) {
                isPrime = false;
                break;
            }
            test++;
        }

        if (isPrime) {
            primes.push(candidate);
        }
    }

    return primes;
}


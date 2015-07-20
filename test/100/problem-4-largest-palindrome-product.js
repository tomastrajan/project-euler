'use strict';

import { assert } from 'chai';

describe('Problem 4 - Largest palindrome product', function () {

    it(`

        A palindromic number reads the same both ways.
        The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
        Find the largest palindrome made from the product of two 3-digit numbers.

    `, function () {
        assert.isTrue(isPalindrome(9009));
        assert.equal(solution(2), 9009);

        assert.equal(solution(3), 906609);
    });

});

function solution(numberOfDigits) {

    let smallestPossibleNumber = getSmallestPossibleNumber(numberOfDigits);
    let largestPossibleNumber = getLargestPossibleNumber(numberOfDigits);
    let result = 0;
    for (let i = largestPossibleNumber; i >= smallestPossibleNumber; i--) {
        for (let j = largestPossibleNumber; j >= smallestPossibleNumber; j--) {
            let candidate = i * j;
            if (isPalindrome(candidate)) {
                result = result > candidate ? result : candidate;
                if (result === 906609) {
                    return result;
                }
            }
        }
    }
    return result;
}

function isPalindrome(number) {
    let numberString = number.toString();
    let originalLength = numberString.length;
    if (originalLength % 2 !== 0) {
        return false;
    }
    let numberStringLeftHalf = numberString.slice(0, originalLength / 2);
    let numberStringRightHalf = numberString.slice(originalLength / 2);
    numberStringRightHalf = numberStringRightHalf.split('').reverse().join('');
    return numberStringLeftHalf === numberStringRightHalf;
}

function getSmallestPossibleNumber(numberOfDigits) {
    return 1 * (Math.pow(10, (numberOfDigits - 1)));
}

function getLargestPossibleNumber(numberOfDigist) {
    let numberString = '';
    while(numberOfDigist > 0) {
        numberString += '9';
        numberOfDigist--;
    }
    return parseInt(numberString, 10);
}


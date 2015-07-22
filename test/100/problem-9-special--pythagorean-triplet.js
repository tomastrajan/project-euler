'use strict';

import { assert } from 'chai';

describe('Problem 9 - Special Pythagorean triplet', function () {

    it(`

        A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2
        For example, 3^2 + 4^2 = 9 + 16 = 2^5 = 52.

        There exists exactly one Pythagorean triplet for which a + b + c = 1000.
        Find the product abc.

    `, function () {
        this.timeout(1000000);
        assert.deepEqual(solution(12), {a: 3, b: 4, c: 5});
        assert.deepEqual(solution(1000), {a: 200, b: 375, c: 425});
    });

});

function solution(limit) {
    for (let i = 1; i <= limit; i++) {
        for (let j = 1; j <= limit; j++) {
            for (let k = 1; k <= limit; k++) {
                if (i < j && j < k) {
                    if (i + j + k === limit) {
                        if (Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2)) {
                            return {a: i, b: j, c: k};
                        }
                    }
                }
            }
        }
    }
}
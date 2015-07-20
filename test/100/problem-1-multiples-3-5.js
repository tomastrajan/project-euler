'use strict';

import { assert } from 'chai';

import * as solution from '../../lib/100/problem-1-multiples-3-5';


describe('Problem 1 - Multiples of 3 and 5', function() {

    it('If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. ' +
        'The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.', function() {

        assert.equal(solution.run(), 233168);

    });

});



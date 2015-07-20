'use strict';

exports.run = run;

function run() {

    let limit = 1000;
    let result = 0;

    for (let i = 0; i < limit; i++) {
        if (i % 3 === 0 || i % 5 ===0) {
            result += i;
        }
    }

    return result;
}
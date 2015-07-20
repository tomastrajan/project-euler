# Project Euler problem solutions in Javascript

I decided to try to solve as much [Project Euler](https://projecteuler.net) puzzles as possible using Javascript (ECMAScript 2015)

Use `npm test` to run all implemented solutions

### Implementation

Solutions are implemented directly inside of test files to make it more readable and easier to implement.

- problem name is used as a first parameter of `describe` function
- problem description is used as the first parameter of `it` function.

To keep things as simple as possible the tests are runned by [mocha](https://github.com/mochajs/mocha) test runner 
together with [mocha-babel](https://github.com/jorgetolentinog/mocha-babel) compiler to facilitate ECMAScript 2015 
compilation without use of grunt (or similar build tool)

Some solutions use [lodash](https://github.com/lodash/lodash) utility library.
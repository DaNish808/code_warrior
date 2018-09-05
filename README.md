# Code Wars Kata Development and Testing Suite
For use tackling [codewars](https://www.codewars.com/) challenges.

## Assumptions
- you use VSCode
- you're writing Javascript
- you have Node and npm installed

## Setup
1. clone from git
2. run `npm i` in the repository from the terminal

## File Naming
.js files should be named (camelCase) according to their rank and challenge name, separated by an underscore. eg. the 7 kyu Remove Duplicate Words challenge could be ./test/7k_removeDupWords.

## Repository Structure
challenges should be started in /test and later moved to /completed when finished, /in_progress when partially done, or /fuuuuuh when fuuuuuh'd

## Testing
tests are conducted with the [Mocha](https://mochajs.org/api/mocha) test suite and the [Chai](http://www.chaijs.com/api/assert/) assertion library. 

### Main Testing Functions
```
/* Main grouper */
// good for identifying the function/class/method being tested
// eg. if testing the Game class, all tests for it should go in one describe function
// describe functions can be nested for greater subdivision
describe('a short name/description of what is being tested', () => {
  // it() functions go here
};

/* Subgrouper */
// good for saying exactly what's being tested in its assertions
// should be phrased in terms of what it's supposed to do
// eg. it('returns a string', () => { /*code*/ });
it('a short description of what you are checking for', () => {
  // assert functions go here
});

/* Comparison Functions */
// the assert object holds [several comparison/checking methods](http://www.chaijs.com/api/assert)
// the function being tested is called as the first argument (remember to call() it!)
// if using a comparison, the expected result is set as the second argument
// useful methods include assert.strictEqual, assert.notStrictEqual, assert.deepEqual, and assert.notDeepEqual
assert.equals(functionBeingTested(), 'expected result (may be string, number, object, whatever)');
```

### Code Structure
```
const assert = require('chai').assert;

function exampleFunc() {
  // code
  console.log('Im running!'); // console.logs still show up when the tests are run
  return true;
}

describe('This is an example function', () => {
  it('returns true: ', () => {
    assert.equal(exampleFunc(), true);
  });
  it('returns a boolean value: ', () => {
    assert.typeOf(exampleFunc(), 'boolean');
  });
});
```

### Running the Tests
Mocha runs all the code in the /test directory and hooks onto the `describe` and `it` functions to group and judge your results. 

to run, enter the command `npm test` in the terminal

## Debugging
### Setup
To use the built-in VSCode debugger, use `ctrl` + `shift` + `d` or click the circle\-through-the-bug icon on the left vertical toolbar. To set things up with Mocha, click the down-arrow to the right of the green play-arrow at the top of the DEBUG window and select Add Configuration. Select Mocha Tests in the launch.json file that pops up, then save the file. You should now be able to use the green play-arrow to run the debugger tools.
### Breakpoints
Breakpoints allow us to pause your code mid-run and take a look at the values held by the variables at that instant in the code. Suuuuuper useful.
To add them:
- Add the line: `debugger;`
- Hover your pointer to the left of the line-numbers in the .js file and click the red circle to set the breakpoint. Click again to remove it.
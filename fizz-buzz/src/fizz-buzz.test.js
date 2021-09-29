const fizzBuzz = require('./fizz-buzz').fizzBuzz;
const run = require('./fizz-buzz').run;

describe('fizzBuzz()', () => {
  it('should return self number', () => {
    expect(fizzBuzz(1)).toBe(1);
  });

  it('should return "Fizz"', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  })

  it('should return "Buzz"', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('should return "FizzBuzz"', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
});

describe('run()', () => {
  it('should return an array with 100 positions', () => {
    expect(run().length).toBe(100);
  });
});
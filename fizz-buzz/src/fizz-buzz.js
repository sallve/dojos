function fizzBuzz(number) {


  if (!(number % 3) && !(number % 5)) {
    return 'FizzBuzz';
  }

  if (number % 3 == 0) {
    return 'Fizz';
  }

  if (number % 5 == 0) {
    return 'Buzz';
  }

  return number;
}

const run = () => {
  const response = []
  let i = 0
  while(i < 100){
    i++
    const fizzBuzzResult = fizzBuzz(i)
    response.push(fizzBuzzResult)
  }
  return response
}

module.exports = {
  fizzBuzz,
  run
}
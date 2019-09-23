//sumOfTen, which takes an array as an argument and returns the sum of that array's elements. it returns a value of 10.
const sumOfTen = arr => {
  arr.splice(2, 1)
  return arr.reduce((a, b) => a + b);
}

console.log(sumOfTen([2, 5, 1, 5, 2, 1]));


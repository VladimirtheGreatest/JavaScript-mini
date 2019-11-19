//Return the sum of those two numbers plus the sum of all the numbers between them

function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var temp = 0;
  for (var i = min; i <= max; i++) {
    temp += i;
  }
  console.log(temp)
  return temp;
}

sumAll([1, 4]);
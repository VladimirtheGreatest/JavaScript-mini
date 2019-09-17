
function largestOfFour(arr) {
  var results = []
  for (let index = 0; index < arr.length; index++) {
    var largestNumber = arr[index][0]  //choosing the first number from the array so we can compare it and find out which one is the largest
    for (let index2 = 0; index2 < arr[index].length; index2++) {
      if(arr[index][index2] > largestNumber) { //we are looping through subarray in this inside loop and we compare each number with the largest number, if the number is bigger it becomes the largest number in the subarray
        largestNumber = arr[index][index2]
      }
    }

    results[index] = largestNumber   // we store the largest number for each sub array
    console.log(results);
    
    
  }
  return results
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
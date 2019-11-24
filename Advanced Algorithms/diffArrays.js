//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.

function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2) //mergin arrays
      .filter(item => !arr1.includes(item) || !arr2.includes(item)); //creating new array from the array that contains that difference
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
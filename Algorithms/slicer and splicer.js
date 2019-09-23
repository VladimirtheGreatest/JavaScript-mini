
//solution 1, array within array or and multidimensional array
function frankenSplice(arr1, arr2, n) {
  let newArr = [];
  let sliceIt = arr2.slice()
  sliceIt.splice(n, 0, arr1)
  newArr.push(sliceIt)

  console.log(newArr);
  console.log(sliceIt);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


//solution 2, only one array is returned and the original array is not modified
function frankenSplice(arr1, arr2, n) {
  let newArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    newArray.splice(n, 0, arr1[i]);
    n++;
  }

  console.log(newArray);
  
  return newArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

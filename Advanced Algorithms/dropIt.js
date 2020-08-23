//Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.



function dropElements(arr, func) {
    if (arr.length === 0 || func(arr[0])) {
      console.log(arr);
      return arr;
    } else {
      let result = arr.shift();
      console.log(result);
      return dropElements(arr, func);
    }
  }
  
  dropElements([1, 3, 9, 2, 2], function(n) {return n > 2;});
//Flatten a nested array. You must account for varying levels of nesting.
//steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

function steamrollArray(arr) {
    let flattened = flatDeep(arr, Infinity);
  //  let flatFunction = arr.flat(Infinity);  
  //  console.log(flatFunction);
    console.log(flattened);
    return flattened;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
  
  function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                 : arr.slice();
  };
  
const getIndexToIns = (arr, num) => {
    arr.push(num);
    let sorted = arr.sort((a, b) => {return a - b});
    console.log(sorted);
    return sorted.indexOf(num);
  }
  
  getIndexToIns([2, 20, 10, 25, 7], 19)

const greaterThan = (arr, arg) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arg) {
        newArr.push(arr[i]);
      }
    }
    console.log(newArr);
    
    return newArr;
  }
  
   const randomArr = [2, 12, 8, 14, 80, 0, 1, 5533,86];
   const argument = 18;
  
  greaterThan(randomArr, argument);
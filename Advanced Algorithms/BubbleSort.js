function bubbleSort(array) {
  
  for(let i = 0; array.length; i++){
    for(let j = 0; array.length -1 - i; j++){
        console.log(array[j], "array j");
        console.log(array[j+ 1], "array j +1");      
      if(array[j] > array[j + 1]){  //We compare each element to the one ahead of it, if the element before is smaller, we swap their places.
        [array[j], array[j + 1]] = [array[j+1],array[j]]
      }
    }
  }
  console.log(array);
  return array;
  // Only change code above this line
}

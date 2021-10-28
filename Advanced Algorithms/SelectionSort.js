function selectionSort(array) {
      for(let i = 0; i < array.length -1; i++){
        let min = i; //we are starting from the left as a minimum
        for(let j = i + 1; j < array.length; j++){ //+1 so the next element in the array
        console.log(`Is ${array[min]} bigger than ${array[j]}.`); 
          if(array[min] > array[j]){ //if arrays current minimum is bigger than any element in the array we have a new minimum, hopw
            min = j;
            console.log(array[j],"we found something smaller in the array it becomes new minimum");          
          }
          //we are swapping regardless of the previous condition 
          //not like bubble sort so be careful
          //NOTE WE SWAP EVEN IF THERE IS A NUMBER THAT IS SMALLER IN THE ARRAY
          //we swap with the first "new minimum" occurence
        console.log(`We swap ${array[i]} for minimum  ${array[min]}.`); 
            console.log(array); 
          [array[i], array[min]] =  [array[min], array[i]]; 
        console.log(array, 'after swap'); 
        }
      }
  return array;
}

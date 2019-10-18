//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {

  
    var result = [];
    for (var i=0,len=arr.length; i<len; i+=size)
      result.push(arr.slice(i,i+size));
      console.log(result);
      
    return result;
  

  
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)


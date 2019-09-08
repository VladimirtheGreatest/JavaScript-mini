
function findLongestWordLength(str) {
  var array = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i].length > maxLength) {
      maxLength = array[i].length;
    }
  }


  console.log(maxLength);
  return maxLength;
  
}


findLongestWordLength("I am trying to find the largest word in this array");
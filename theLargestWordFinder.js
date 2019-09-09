
function findLongestWordLength(str) {
  var array = str.split(' ');  // we split the string so we can loop through those individual words
  var maxLength = 0;

  for (var i = 0; i < array.length; i++) {  //looping through those words
    if (array[i].length > maxLength) {  // we compare the length of each and every single word in the array until we find the longest
      maxLength = array[i].length;
    }
  }


  console.log(maxLength);
  return maxLength;
  
}


findLongestWordLength("I am trying to find the largest word in this array");

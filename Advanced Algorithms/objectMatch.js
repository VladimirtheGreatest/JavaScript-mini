//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
 
    var srcKeys = Object.keys(source);
  
    // filter the collection
    return collection.filter(function(obj) {
        //Using a `for loop` we loop through each item in the object
      for (var i = 0; i < srcKeys.length; i++) {
       // We use a `if statement` to check if the object in the collection doesn't have the key and the property value doesn't match the value in source.
        if (
          !obj.hasOwnProperty(srcKeys[i]) ||
          obj[srcKeys[i]] !== source[srcKeys[i]]
        ) {
          return false;
        }
      }
      return true;
      //We return `false` if the above `if statement` is correct. Otherwise, we return `true`;
    });
  }
  
  // test here
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  );
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(val => {
       return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  console.log(result);
  
  
  return result.join(" ");
}



titleCase("I'm a little tea pot");
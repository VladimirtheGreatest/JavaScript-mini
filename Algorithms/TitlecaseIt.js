<<<<<<< HEAD
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(val => {
       return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  console.log(result);
  
  
  return result.join(" ");
}



=======
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(val => {
       return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  console.log(result);
  
  
  return result.join(" ");
}



>>>>>>> de90f576c8f0ae128eb6c44aa0a875d9d60e9a31
titleCase("I'm a little tea pot");
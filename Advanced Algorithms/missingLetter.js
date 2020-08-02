function fearNotLetter(str) {
 
    for(var i = 0; i < str.length; i++)
    {
      console.log(i);
      var code = str.charCodeAt(i);
      console.log(code);
      var previousIndex = str.charCodeAt(i - 1);
      console.log(previousIndex);
      if(code - previousIndex > 1){
        let result = String.fromCharCode(previousIndex + 1);
        console.log(result);
        return result
      }               
    }
  }
  
  fearNotLetter("abce");
  
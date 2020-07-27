function myReplace(str, before, after) {
    if (after == after.toLowerCase())
  {
     let converted = after.charAt(0).toUpperCase() + after.slice(1);
     let result = str.replace(before, converted);
     return result;
  }
    let result = str.replace(before, after);
    return result;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
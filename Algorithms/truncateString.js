function truncateString(str, num) {
  let splitIt = str.split("")
  let newArr = [];
  for (let index = 0; index < num; index++) {
    const element = splitIt[index];
    newArr.push(element);
  }
  newArr.push("...");
  let newStr = newArr.join("");
  console.log(newStr);
  
  
  return newStr
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);



//advanced

function truncateString2(str, num) {
  let result = str.length > num ? str.slice(0, num) + '...' : str;
  console.log(result);
  
  }

  truncateString2("A-tisket a-tasket A green and yellow basket", 8);
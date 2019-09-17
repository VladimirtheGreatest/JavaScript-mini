function confirmEnding(str, target) {

  let first = str.length;
  let second = target.length;
  const result = first - second;
  const ending = str.slice(result)
  console.log(result);
  if (ending === target ){
    return true
  } else {
    return false
  }
    
}

confirmEnding("Bastian", "n");
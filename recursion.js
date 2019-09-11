
function factorialize(num) {
  if (num === 0) { 
    return 1; }
  let result = num * factorialize(num-1);
  console.log(result);
  return result;
}

factorialize(5);

function bouncer(arr) {
  const result =  arr.filter(Boolean => Boolean);
  console.log(result);
  
}

bouncer([7, "ate", "", false, 9]);
function reverseString(str) {
  let splitIt = str.split("");
  let reverseIt = splitIt.reverse();
  let joinIt = reverseIt.join("");
  str = joinIt

  return str;
  
}

reverseString("hello");

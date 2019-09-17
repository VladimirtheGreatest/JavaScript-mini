const palindrome = "abba";
const notPalindrome = "Vladimir";

const palindromeCheck = word => {
  let splitIt = word.split("");
  let joinIt1 = splitIt.join();
  let reverseIt = splitIt.reverse();
  let joinIt = reverseIt.join();
  joinIt === joinIt1 ? console.log(`${word} is a palindrome`) : console.log(`${word} is not a palindrome`);
};

palindromeCheck(palindrome);

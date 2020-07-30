//You will get a DNA strand sequence and you need to get the pair and return it as a 2D array of the base pairs. Keep in mind that the provided strand should be first always.

//Another way to interpret the problem: there are four potential characters that exist in DNA: “A”, “T”, “G”, and “C”. “A” and “T” are always paired together, and “G” and “C” are always paired together.
//This problem presents you with an input, e.g. “ATCGA”. Each of those five characters are missing their pairs.
//E.g. the first character “A” needs to be paired with “T” to give the array element [“A”, “T”].
//The second character “T” needs to be paired with “A” to give the array element [“T”, “A”].
//The number of elements in the final output equals the number of characters in the input.



function pairElement(str) {
    let array = [];
  
    let matchTheLetter = (letter) => {
      if (letter == "G"){
        array.push(["G","C"])
      } else if (letter == "A") {
        array.push(["A", "T"])
      } else if (letter == "T") {
        array.push(["T", "A"])
      } else if (letter == "C") {
        array.push(["C", "G"])
      }
    }
  
      for (let index = 0; index < str.length; index++) {
        const element = str[index];
        matchTheLetter(element);   
      }
      console.log(array);
    return array;
  }
  
  pairElement("GCG");
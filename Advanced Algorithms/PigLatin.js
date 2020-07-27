function translatePigLatin(str) {
    var regex = /[aeiou]/gi;
    let vowels = ["a", "e", "i", "o", "u", "y" ];
    let wordArray = str.split("");
    console.log(wordArray);
  
        if (vowels.indexOf(wordArray[0].toLowerCase()) !== -1) {
          let result = str.concat("way");
            console.log("starts with vowels")
            console.log(result);
            return result;
        } else {
            var vowelIndice = str.indexOf(str.match(regex)[0]);
            console.log(vowelIndice)
            var result = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
            console.log(result);
          return result;
                  
        }        
  }
  
  translatePigLatin("DddAam");
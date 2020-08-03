function convertHTML(str) {
    let array = str.split("");
  

    //a = a.map(function(item) { return item == 3452 ? 1010 : item; });
  array.forEach(function(item, i) {
     if (item == "&") array[i] = "&amp;"; 
     if (item == "<") array[i] = "&lt;"; 
     if (item == ">") array[i] = "&gt;"; 
     if (item == '"') array[i] = "&quot;"; 
     if (item == "'") array[i] = "&apos;"; 
    });
  let result = array.join("");
    console.log(result);
    return result;
  }
  
  convertHTML("Dolce & Gabbana");
  convertHTML("Sixty > twelve");
  convertHTML('Stuff in "quotation marks"');


  //https://stackoverflow.com/questions/5915789/how-to-replace-an-item-in-an-array-with-javascript
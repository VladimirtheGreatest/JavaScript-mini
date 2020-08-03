//https://stackoverflow.com/questions/57903061/foreach-loop-through-two-arrays-at-the-same-time-in-javascript
function uniteUnique(arr) {  
    var result = [];
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(element) {
       // console.log(element);
        element.forEach(function(number) {
          //  console.log(number);
          if(result.includes(number) == false){
            result.push(number);
          };      
        });
    }, this);
    console.log(result);
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

function smallestCommons(arr) {
    let min = Math.min.apply( Math, arr );
    let max = Math.max(...arr);
    var counter = max;
    var numbers = [];
    for (var i = min + 1; i < max; i++) {
      numbers.push(i);
    }
  
    while (true) {
      counter += 1;
      if(counter % max == 0 && counter % min == 0){
        let check = numbers.filter(function (number){
          return counter % number == 0
        })
        let areTheSame = check.length === numbers.length && check.every(function(value, index) { return value === numbers[index]})
        if(areTheSame){
          return counter;
        }
      }
    }
  }
  
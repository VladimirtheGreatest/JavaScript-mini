function recursionNoGarbage(num) {
    var sum = 0;
  
    const fibonaci = (a, b) => {
      while (b <= num) {
        if (b % 2 === 1) {
          sum += b;
        }
        return fibonaci(b, a + b);
      }
    };
    fibonaci(0, 1);
  
    console.log(sum);
    return sum;
  }
  
  recursionNoGarbage(1000);
  
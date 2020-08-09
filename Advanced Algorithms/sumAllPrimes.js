function sumPrimes(num) {
    let result = [];
    let i = 1;
    while (i <= num) {
      if (isPrime(i)) {
        result.push(i);
      }
      console.log(i);
      i++;
    }
    console.log(result);
    let sum = result.reduce((a, b) => a + b, 0);
    console.log(sum);
    return sum;
  
  
  
  function isPrime(x){
  
      for (let i = 2; i < x; i++) {
        if (x % i === 0) return false;
      }
      return x !== 1 && x !== 0;
    
  }
  }
  
  sumPrimes(10);
  
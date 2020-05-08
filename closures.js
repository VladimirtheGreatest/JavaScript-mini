function foo() {
    const secret = Math.trunc(Math.random()*100)
    return function inner() {
      console.log(`The secret number is ${secret}.`)
    }
  }
  const f = foo() // `secret` is not directly accessible from outside `foo`
  f() // The only way to retrieve `secret`, is to invoke `f`

let fizzBuzz = function(n) {
    for (i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) 
        console.log("FizzBuzz");
      else if
        (i % 3 === 0) 
          console.log("Fizz");
      else if (i % 5 === 0) 
        console.log("Buzz");
      else  // handles numbers not divisible by 3 or 5
        console.log(i);
    }
};

fizzBuzz(15);
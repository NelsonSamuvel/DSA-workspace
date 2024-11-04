const fizzBuzz = (n) => {
  let i = 1;
  while (i <= n) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FIZZ BUZZ");
    } else if (i % 3 === 0) {
      console.log("FIZZ");
    } else if (i % 5 === 0) {
      console.log("BUZZ");
    } else {
      console.log(i);
    }
    i++;
  }
};

fizzBuzz(45);

const isPrime = (num) => {
  notPrime = false;

  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        notPrime = true;
        break;
      }
    }

    if (notPrime || num <= 0) {
      console.log(num + " is not a prime number");
    } else {
      console.log(num + " is a prime number");
    }
  }
};

isPrime(5); // eo is prime
isPrime(6); // eo is not prime

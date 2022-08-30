const c = {}; // Cache Map

var climbStairs = function (n) {
  // cache

  if (n <= 3) {
    return n;
  }

  c[n] = climbStairs(n - 1) + climbStairs(n - 2); // Here we cache the value for upcoming operations
  return c[n];
};

console.log(climbStairs(5)); //eo 8

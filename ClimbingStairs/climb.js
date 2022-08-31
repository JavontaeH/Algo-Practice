const climbStairs = function (n) {
  // Initialize for n = 0, and n = 1. There's only 1 way to climb those stairs.
  const waysToClimb = [1, 1];

  for (let i = 2; i <= n; i++) {
    // How to climb i stairs:
    // - Either climb 1 stair and then climb the rest i-1 stairs X ways.
    // - Or climb 2 stairs at once and then climb the rest i-2 stairs Y ways.
    // Total: X + Y ways
    waysToClimb.push(waysToClimb[i - 1] + waysToClimb[i - 2]);
  }

  return waysToClimb[n];
};

console.log(climbStairs(5)); //eo 8

const exactchange = (input_value) => {
  let q = 0;

  let d = 0;
  let n = 0;
  let p = 0;
  let output = "";

  if (input_value > 0) {
    while (input_value > 0) {
      if (input_value >= 25) {
        q++;
        input_value -= 25;
      } else if (input_value >= 10) {
        d++;
        input_value -= 10;
      } else if (input_value >= 5) {
        n++;
        input_value -= 5;
      } else if (input_value >= 1) {
        p++;
        input_value -= 1;
      }
    }
  } else {
    console.log("no change"); // print in python
  }
  if (p > 0) {
    if (p === 1) {
      output += "1 pennie";
    } else {
      output += p + " pennies";
    }
  }
  if (n > 0) {
    if (n === 1) {
      output += "1 nickle";
    } else {
      output += n + " nickles";
    }
  }
  if (d > 0) {
    if (d === 1) {
      output += "1 dime";
    } else {
      output += d + " dimes";
    }
  }
  if (q > 0) {
    if (q === 1) {
      output += "1 quarter";
    } else {
      output += q + " quarters";
    }
  }

  console.log(output);
};

exactchange(50);

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let result = array.reduce((accum, n) => accum + n, 0);
  if (result === undefined) { //empty array case
    return 0;
  }
  return result;
};

const multiply = function(array) {
  let result = array.reduce((accum, n) => accum * n, 1);
  if (result === undefined) { //empty array case
    return 0;
  }

  return result;
};

const power = function(num, exp) {
  return Math.pow(num,exp);
};

const factorial = function(num) {
  let accum = 1 //start at 1
  for (let i = num; i > 0; i--) { //keep multiply the accum by one greater until you stop at the numb (i > num)
    accum *= i;
  }
  return accum;	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

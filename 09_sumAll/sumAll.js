const sumAll = function (a, b) {
  let sum = 0;
  const startNum = Math.min(a, b);
  const endNum = Math.max(a, b);

  if (
    startNum < 0 ||
    endNum < 0 ||
    !Number.isInteger(startNum) ||
    !Number.isInteger(endNum) ||
    typeof a !== "number" ||
    typeof b !== "number"
  ) {
    return "ERROR";
  }

  for (i = startNum; i <= endNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

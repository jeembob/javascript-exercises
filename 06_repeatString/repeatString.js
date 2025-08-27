const repeatString = function (word, times) {
  let output = ''
  if (times < 0) {
    return "ERROR";
  } else {
    for (i = times; i > 0; i--) {
      output += word;
    }
  }
  return output;
};

// Do not edit below this line
module.exports = repeatString;

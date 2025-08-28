const leapYears = function (year) {
  //divisible by four === leap year

  //if % 100 = 0 not leap years unless % 400 ===0
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
};

// Do not edit below this line
module.exports = leapYears;

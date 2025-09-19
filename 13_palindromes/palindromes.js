const palindromes = function (string) {
  const noPunc = string.replace(/[^\w\s]|_/g, ""); //remove puntuation
  const noSpace = noPunc.replace(/\s+/g, "");
  const lowerCase = noSpace.toLowerCase(); //no spaces

  function reverse(str) {
    let reversed = "";
    for (let i = str.length; i > 0; i--) {
      //start from the back and decriment across length
      reversed += str[i - 1]; // concatenate with the correct index
    }
    return reversed;
  }

  return lowerCase == reverse(lowerCase);
};

// Do not edit below this line
module.exports = palindromes;

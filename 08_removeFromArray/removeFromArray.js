const removeFromArray = function(array, ...removal) {
    const filtered = array.filter((element) => !removal.includes(element))
    array.length = 0;
    array.push(filtered);
    console.log(filtered);
    return filtered;
};

//for each element, check if needs to be removed
//dump it into a new array

// Do not edit below this line
module.exports = removeFromArray;

// Write a function that takes in an array of numbers and outputs the average of all the numbers. 
'use strict';
// adding, dividing by (Amount of Numbers being used in this equation)

const average = (arrays) => arrays.reduce(function theFormulaforAverage(initialValue, newNumberbeingAdded) {
    return initialValue + newNumberbeingAdded / arrays.length;
}, 0);


console.log(average([1, 4 ,7])); // Output : 4
console.log(average([10, 5])); // Output : 7.5
console.log(average([1.5, 3 , 2.5, 1])); // Output : 2


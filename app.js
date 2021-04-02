'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first
 element
 is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this
  example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished,
 uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) {
  //eslint-disable-line
  let sum=a+b;
  return [sum,`The sum of ${a} and ${b} is ${sum}.`]
}
// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() 
that takes in two numbers as arguments and returns an array where the first element is the product of 
those numbers, and the second element is a string that EXACTLY follows this example and uses the values 
that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, 
uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) {
  //eslint-disable-line
  let Mult = a * b ;
  return [Mult,`The product of ${a} and ${b} is ${Mult}.`];

}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9)

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments 
and returns an array where the first element is the sum of those three numbers, the second element is the 
product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this 
example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition,
 use your sum() function, and to do multiplication, use your multiply() function that you've already created. 
 You're going to have to be resourceful to figure out how to do this. However, you may continue to use the +
  operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, 
uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) {
  //eslint-disable-line
  
  //let getSum = sum((sum(a,b)[0]), c[0]);
  //let getMult = multiply((multiply(a, b)[0]), c[0]) ;

  let newSum = sum(a,b)[0], getSum = sum(newSum,c)[0];
  let newMult = multiply(a,b)[0], getMult = multiply(newMult,c)[0];

 return [getSum,getMult,`${a} and ${b} and ${c} sum to ${getSum}.`,`The product of ${a} and ${b} and ${c} is ${getMult}.`];

}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns '
an array where the first element is the sum of the numbers in the array, and the second element is a string 
that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() 
function that you've already created. You're going to have to be resourceful to figure out how to do this. 
However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished,
 uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
let testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) {
  //eslint-disable-line

// I declared arraysum and i give it zero
 let arraySum = null;
 // I declared a loop for walk through the array 3 times
 for (let i = 0 ; i<3; i++){
      // here: arraysum(0)+ 2 then arraysum(2)+3 then arraysum(5) + 4 so the last value of arraySum is 9
      arraySum =  sum(arraySum,sumArr[i])[0];
     
 }
 return[arraySum,`${sumArr} was passed in as an array of numbers, and ${arraySum} is their sum.`]

}

// Here is the test for sumArray(); uncomment it to run it

 testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
//Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an arra
 whose first element is the product of those numbers, and the second element is a string that EXACTLY follows 
 this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication,
 use your multiply() function that you've already created. You're going to have to be resourceful to 
 figure out how to do this. This function should handle an array containing three elements. However, 
 you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment
 the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) {
  //eslint-disable-line
  

  //I declared a variable for i to loop 3 times 
  let i = 0;

  // Here I declared a variable and i give it a value "1"  I choose 1 because 
  //I need to value when multiply with Index of array that not change
  // for example if I chose 0 so all value in array will be ZERO that why we need 1 for Mutiply
  let multiplyArray = 1;

// here I declared a loop because I have an array with 3 elements so i need loop to walk three times through the array
  while(i<3) {
    //  multiplyArray(1) * 2 then multiplyArray(2 )*3 then multiplyArray(6) *4 // multiplyArray =24
    multiplyArray=multiply(multiplyArray,multArr[i])[0];
       i++;    // add 1 for i
     }

    return [multiplyArray,`The numbers ${multArr} have a product of ${multiplyArray}.`];

    }
// Here is the test for multiplyArray(); uncomment it to run it
 testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
let testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) {
  //eslint-disable-line
}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.

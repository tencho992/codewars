// Factorials are often used in probability and are used 
// as an introductory problem for looping constructs. 
// In this kata you will be summing together multiple factorials.

// Here are a few examples of factorials:
// 4 Factorial = 4! = 4 * 3 * 2 * 1 = 24
// 6 Factorial = 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720

// In this kata you will be given a list of values 
// that you must first find the factorial, and then return their sum.
// For example if you are passed the list [4, 6] 
// the equivalent mathematical expression would be 4! + 6! 
// which would equal 744.
// Good Luck!

// Note: Assume that all values in the list are positive 
// integer values > 0 and each value in the list is unique.

function sumFactorial(arr){
    let sum = 0;
    for (let num of arr) { //for of loop through each number
      let product = 1;
      for (let i = 1; i <= num; i++) {
        product *= i;
      }
      sum += product; //add sums 
    }
    return sum;
  }
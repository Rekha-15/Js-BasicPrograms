/***********************************************************************************
 * Purpose - This code is wrriten to write a program that takes a command-line 
 * argument n and prints a table of the powers of 2 that are less than or equal 
 * to 2^n till 256 is reached..
 * @author Rekha
 * @since 12-07-2021
 ***********************************************************************************/

/**
 * including input output library.
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("enter the number : ",num => {      // lambda function is use
    console.log(`"the number is:"  ${num}`)             // Num is stored
    number = parseInt(num)                              //num is parse from string to to int
console.log("Limit Of Table is 256")
const RESULT = 256;
var table = 0;
console.log("Table Of Power Of Two")
var count = 1
/**
 * loop continue till count is equal to the number
 */
while (count != number) {
    if (table != RESULT) {
        table = 2 ** count;
        count++
        console.log(table)
    } else {
        break;
    }
}
});
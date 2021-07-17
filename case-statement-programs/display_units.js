/********************************************************************
 * Purpose - This code is wrriten to Read a Number 1, 10, 100, 1000, etc 
 * and display unit, ten, hundred,...
 * @version 1.0
 * @author Rekha
 * @since 12-07-2021
 *******************************************************************/

//Taking input from user
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  //Reading inout from user
  readline.question("enter any number 10 ,100,1000: ",number => {
    console.log(`"the number is:"  ${number}`)
var num = parseInt(number)
var unit = checkUnit(num)
console.log("Num in Digit is : " + num + " and its unit is: " + unit)
readline.close();

});

//Printing Units according to numbers
function checkUnit(number) {
    switch (number) {
        case 1:
            return "Unit";
        case 10:
            return "Ten";
        case 100:
            return "Hundred";
        case 1000:
            return "Thousand";
        case 10000:
            return "Ten Thousand";
        case 100000:
            return "Lakh";
        default:
            return "Limit Exceeded"
    }
}
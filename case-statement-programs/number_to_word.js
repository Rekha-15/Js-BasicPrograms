/********************************************************************
 * Purpose - This code is wrriten to Read a single digit number and 
 * write the number in word using Case
 * @version 1.0
 * @author Rekha
 * @since 12-07-2021
 *******************************************************************/
//declaring readline in const
//Taking input from user
const readline = require('readline').createInterface({
    //reading input by stdin
    input: process.stdin,
    output: process.stdout
  });

  //Reading inout from user
  readline.question("enter the number between 1 to 9: ",number => {
    console.log(`the number is:  ${number}`)
    num = parseInt(number)
var word = checkWord(num)
console.log("Number in Digit: " + num + " is in Words is: " + word)
readline.close();

});

//checkout function for numbers
function checkWord(number) {
    //Printing woords according to number
    switch (number) {
        case 0:
            return "ZERO";
        case 1:
            return "ONE";
        case 2:
            return "TWO";
        case 3:
            return "THREE";
        case 4:
            return "FOUR";
        case 5:
            return "FIVE";
        case 6:
            return "SIX";
        case 7:
            return "SEVEN";
        case 8:
            return "EIGHT";
        case 9:
            return "NINE";
        default:
            return "Wrong Input";
    }
}
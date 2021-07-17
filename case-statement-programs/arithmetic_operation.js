/********************************************************************
 * Purpose - This code is wrriten to implement Unit Conversion Problem
 * @version 1.0
 * @author Rekha
 * @since 12-07-2021
 *******************************************************************/
//declaring value
 const FEET_TO_INCH = 12
 const FEET_TO_METER = 0.3048
 
 //performing diffrent kinds of unit conversion
 function conversion(value, inputValue) {
     switch (value) {
         case 1:
             return inputValue * FEET_TO_INCH;
         case 2:
             return inputValue / FEET_TO_INCH;
         case 3:
             return inputValue * FEET_TO_METER;
         case 4:
             return inputValue / FEET_TO_METER;
     }
 }
 
 //taking input values from user
 console.log("Enter Value For Conversion "+
 "1:Feet To Inch Conversion "+
 "2:Inch To Feet Conversion "+
 "3:Feet To Meter Conversion "+
 "4:Meter To Feet Conversion")
 
 //taking input from user
 const readline = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout
   });
   readline.question("Choose Option From Above: ",number => {
     console.log(`"the number is:"  ${number}`)
     var num = parseInt(number)
 readline.question("Choose Option From Above: ",number => {
         console.log(`"the number is:"  ${number}`)
         var value = parseInt(number)
         var convert = conversion(value, inputValue)
         console.log("The Value is: "+inputValue+" Its Conversion is: "+convert)
 readline.close();
 })
 });
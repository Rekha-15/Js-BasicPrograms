/***********************************************************************************
 * Purpose - Writing a program that reads 5 Random 2 Digit values , 
 * then find their sum and the average.
 * @version v14.17.3
 * @author Rekha
 * @since 12-07-2021
 ***********************************************************************************/

/**
 * 4. Reads 5 Random 2 Digit Values
 * adding them and finding Average
 */
 let totalofFiveNumber = 0;
 let i = 1;
 
 while( i <= 5){
     totalofFiveNumber += Math.floor(10 +(Math.random() * 10) % 90);
     i++;
 }
 
  averageOfRandomNumbers = totalofFiveNumber / 5;
 
 console.log("Sum of 5 random 2 digit numbers :"+ totalofFiveNumber);
 console.log("Average of five numbers :"+ averageOfRandomNumbers);
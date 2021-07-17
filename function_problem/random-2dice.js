/***********************************************************************************
 * Purpose - This code is written to Add two Random Dice Number and Print the Result.
 * @version v14.17.3
 * @author Rekha
 * @since 12-07-2021
 ***********************************************************************************/

/**
 * 3. Adding two random Dice numbers
 */
let numberOnFirstDice = Math.floor(1 + (Math.random() * 10) % 6);
let numberOnSecondDice = Math.floor(1 + (Math.random() * 10) % 6);

totalOfTwoDices = numberOnFirstDice + numberOnSecondDice;

console.log("First Dice :"+ numberOnFirstDice + "\nSecond Dice :"+ numberOnSecondDice +"\nTotal of two Dices is :" + totalOfTwoDices);
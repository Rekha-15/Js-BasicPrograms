/***********************************************************************************
 * Purpose - This code is written to Use a Random Function to get Dice number between 1 to 6 .
 * @version v14.17.3
 * @author Rekha
 * @since 12-07-2021
 ***********************************************************************************/
/**
 * 2. Using Random Function to get Dice number between 
 * 1 to 6
 */
 let numberOnDice = Math.floor(1 + (Math.random() * 10) % 6);
 console.log("Number on Dice is :" + numberOnDice);
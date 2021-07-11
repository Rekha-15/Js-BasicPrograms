/********************************************************************
 * Purpose - This code written to simulate a coin flip and print out
 * "Heads" or "Tails" accordingly.
 * @version 1.0
 * @author Rekha
 * @since 12-07-2021
 *******************************************************************/

//Generated random number(0,1)
let random = Math.floor(Math.random()*10) % 2;

//if-else to state heads ot tails
if(random == 1) {
    console.log("Its Heads!")
}else {
    console.log("Its Tails!")
}
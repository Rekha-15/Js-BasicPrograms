//taking input from user
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  //reading input from user
  readline.question("enter the number : ",number => {
      //printing statement
    console.log(`"the number is:"  ${number}`)
    num = number;
    var number = parseInt(num)
    var table = 0;
    for (count = 1; count <= number; count++) {
            table = 1 / count;  
    }
    console.log("nth Harmonic Number Value is: "+table)

});
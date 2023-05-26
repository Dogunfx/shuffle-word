//A program to guess the number computer is thinking between 0 to 20

let computer_number = Math.ceil(Math.random() * 20);

let my_number = 10;

let responds = `The Computer guess ${computer_number} while you predicted ${my_number}`;

console.log(responds);

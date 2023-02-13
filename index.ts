

/*1. Install Node.js, TypeScript and VS Code on your computer.*/

/* Task 2
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as,
 “Hello Eric, would you like to learn some Python today?”
*/
console.log("Hello Eric, would you like to learn some Python today?");

/* Task 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
var  personName:string = "Muhammad Jamil";
// Print name in lowercase
console.log(personName.toLowerCase());
// Print name in uppercase
console.log(personName.toUpperCase());
// Print name in titlecase
console.log(personName.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" "));

/* Task 4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
*/
console.log('Bill Gates said once,"I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it."');

/* Task 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
*/
var famous_person = "Bill Gates";
var message = famous_person+' said once, "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it."';
console.log(message);

/* Task 6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/
message = '\n\t'+famous_person+'\t said once, "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it."';
console.log(message);
/* Task 7
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
*/
var number1 = 4;
var number2 = 4;
var result = number1 + number2;
console.log(number1 +' + '+number2+" = "+result);

 number1 = 12;
 number2 = 4;
 result = number1 - number2;
console.log(number1 +' - '+number2+" = "+result);

number1 = 2;
number2 = 4;
result = number1 * number2;
console.log(number1 +' * '+number2+" = "+result);

number1 = 16;
number2 = 2;
result = number1 / number2;
console.log(number1 +' / '+number2+" = "+result);

/* Task 8
// 

You should create four lines that look like this:
console.log(5 + 3)
*/
var i;
var line1 : string="-";
for(i=0;i<5;i++)
    line1 +=line1;
console.log(line1);
    console.log("5+3");
console.log(line1);
/* Task 9 and 10
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.*/
console.log("my favorite number is "+ result);

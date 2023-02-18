"use strict";
/* Task 11
*Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
*/
var my_friends = ['Nadeem', 'Shafqat', 'Mohsin', 'Gulfam', 'Shahid'];
for (let i = 0; i < my_friends.length; i++) {
    console.log(my_friends[i]);
}
/* Task 12
* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
*/
for (let i = 0; i < my_friends.length; i++) {
    console.log("Greetings " + my_friends[i]);
}
/* Task 13
*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
var transportation = ['Bike', 'Car', 'MG', 'Mercedes', 'Qatar Airlins'];
for (let i = 0; i < transportation.length; i++) {
    console.log("I would like to own " + transportation[i]);
}
/* Task 14
*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
for (let i = 0; i < 3; i++) {
    console.log("Hi " + my_friends[i] + "! I would to like invite for dinner");
}
/* Task 15
*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/
console.log("Hi friends. I just heard Mr. " + my_friends[3] + "! is not coming");
console.log("So I have decided to change my list. Here is the new list");
for (let i = 0; i < 4; i++) {
    if (i == 3)
        continue;
    console.log("Hi " + my_friends[i] + "! I would to like invite for dinner");
}
/* Task 16
*
. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/
console.log(" I just found bigger tablel so now more space is available.");
my_friends.unshift("Sammi");
my_friends.push("Dawood");
my_friends.splice(2, 0, "Irfan");
for (let i = 0; i < my_friends.length; i++) {
    console.log("Hi " + my_friends[i] + "! I would to like invite for dinner"); //use i instead of 0
}
/* Task 17
*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
console.log("As bigger dinner table didn't arrive. So I can only invite 2 people");
for (let i = 0; i < (my_friends.length - 2); i++) {
    console.log("Hi " + my_friends[i] + "! I am sorry I can’t invite you to dinner");
}
my_friends.splice(0, my_friends.length - 2);
for (let i = 0; i < my_friends.length; i++) {
    console.log("Hi " + my_friends[i] + "! Your are still invited for dinner");
}
my_friends.splice(0, my_friends.length);
console.log("After emptying the list");
for (let i = 0; i < my_friends.length; i++) {
    console.log("Hi " + my_friends[i] + "! Your are still invited for dinner");
}
/* Task 18
*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
// Store the locations in an array
let places_to_visit = ['Koh Tao', 'Swat', 'Islamabad', 'Colombo', 'Chang Mia'];
// Print the array in its original order
console.log('Original order:', places_to_visit);
// Print the array in alphabetical order without modifying the actual list
console.log('Alphabetical order:', [places_to_visit].sort());
// Show that the array is still in its original order by printing it
console.log('Original order:', places_to_visit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log('Reverse alphabetical order:', [places_to_visit].sort().reverse());
// Show that the array is still in its original order by printing it again
console.log('Original order:', places_to_visit);
// Reverse the order of the list
places_to_visit.reverse();
// Print the array to show that its order has changed
console.log('Reversed order:', places_to_visit);
// Reverse the order of the list again
places_to_visit.reverse();
// Print the list to show it’s back to its original order
console.log('Original order:', places_to_visit);
// Sort the array so it’s stored in alphabetical order
places_to_visit.sort();
// Print the array to show that its order has been changed
console.log('Alphabetical order:', places_to_visit);
// Sort to change your array so it’s stored in reverse alphabetical order
places_to_visit.sort((a, b) => b.localeCompare(a));
// Print the list to show that its order has changed
console.log('Reverse alphabetical order:', places_to_visit);
/* Task 19
*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
*/
console.log("I am going to invite " + my_friends.length);
/* Task 20
*Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
*/
let mix_array = ['Koh Tao', 'English', 'K2', 'Indus River', 'Black Sea'];
console.log('Original order:', mix_array);
// Create the object
const my_items = {
    item1: "book",
    item2: "phone",
    item3: "pen",
    item4: "laptop",
    item5: "headphones",
};
// Print the object
console.log(my_items);
/* Task 22
* Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/
const myArray = [1, 2, 3];
// error
console.log(myArray[3]);
// Fix the error
console.log(myArray[2]);
/* Task 11
*
*/
/* Task 11
*
*/ 

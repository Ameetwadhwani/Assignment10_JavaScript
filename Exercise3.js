// if / else statements

var greaterNum = function(num1, num2) {
  if (num1 > num2)
    return num1
  else if (num2 > num1)
    return num2
  else if (num1 = num2)
    return "Tie"
}

console.log("Which is greater?" + greaterNum(1, 2))

console.log("Which is greater?" + greaterNum(9, 4))
console.log("Are these equal?" + greaterNum(923, 923))


// ------------------ //

var helloWorld = function(language) {
  if (language == 'en')
    return "Hello World";
  else if (language == 'fr')
    return "Bonjour World";
  else if (language == 'hindi')
    return "Namaste World";
  else
    return "Sorry, I don't know that language";
}

console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld('hindi'));
console.log(helloWorld('jp'));

// lesson was the == conditional -- //


var assignGrade = function(grade) {
  if (grade < 50)
    return "F"
  else if (grade <= 60)
    return "D"
  else if (grade <=70)
    return "C"
  else if (grade <=80)
    return "B"
  else if (grade <=90)
    return "A"
  else 
    return "A+!!"
}

console.log(assignGrade(89))


// The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
// See Solution
// function pluralize(noun, number) {
//     if (number != 1 && noun != 'sheep' && noun != 'geese') {
//         return number + ' ' + noun + 's';
//     } else {
//         return number + ' ' + noun;
//     }
// }
// console.log('I have ' + pluralize('cat', 0));
// console.log('I have ' + pluralize('cat', 1));
// console.log('I have ' + pluralize('cat', 2));

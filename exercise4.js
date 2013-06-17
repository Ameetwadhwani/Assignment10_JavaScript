// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even")

// var evenOddReporter = function(initialize, condition, update) {

// }

for (var cnum = 1; cnum < 20; cnum++) {
  if (cnum % 2 === 0) {
      console.log(cnum + " is even ");
    } else {
        console.log(cnum + " is odd ");
  }
}


for (var i = 0; i < 10; i++) {
    console.log(i + ' * 9 = ' + (i*9))
}


var assignGrade = function(grade) {
  if (grade <= 50)
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
for (var i = 1; i<100; i++) {
   console.log(assignGrade(i))
}





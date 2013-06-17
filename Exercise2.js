// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

var numKids = ["1", "2", "3", "4"];

var randKids = function() {
  return Math.floor(Math.random() * numKids.length);
}

var partnerName = ["Claire", "Joyce", "Louise", "Holloway"];

var randPartner = function() {
  return Math.floor(Math.random() * partnerName.length);
}

var geoLocation = ["Bangalore", "Toronto", "Suburbia", "Africa"];

var randLocation = function() { 
  return Math.floor(Math.random() * geoLocation.length);
}


var jobTitle = ["Co-Founder & CEO", "Partner", "Lowly Analyt", "Developer"];

var randJob = function() {
  return Math.floor(Math.random() * jobTitle.length);

}

// console.log(numKids[randKids])
// console.log(jobTitle[randJob])
// console.log(geoLocation[randLocation])
// console.log(partnerName[randPartner])



var tellFortune = function() {
	var fortune = "You will be a " + jobTitle[randJob()] + " in " 
		+ geoLocation[randLocation()] + " married to " 
		+ partnerName[randPartner()] + " with " + numKids[randKids()] 
		+ " kids.";  
	console.log(fortune);
};

//tellFortune();

// // var numIterations = 3;	

for(x = 0; x < 3; x++) {
	tellFortune();
}

// ------------ //

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var currentYear = 2013;
var birthYear = 1979;
var calculateAgea = function() {
  return currentYear - birthYear;
};

var calculateAgeb = function() {
  return currentYear - (birthYear-1);
};

console.log("You are either " + calculateAgea() + " or " + calculateAgeb()+"!");


// function calculateAge(birthYear, currentYear) {
//     var age = currentYear - birthYear;
//     console.log('You are either ' + age + ' or ' + (age - 1));
// }

// calculateAge(1984, 2012);
// calculateAge(1988, 2012);
// calculateAge(1982, 2012);



// The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
// See Solution 

// function calculateSupply(age, numPerDay) {
//   var maxAge = 100;
//   var totalNeeded = (numPerDay * 365) * (maxAge - age);
//   var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
//    console.log(message);
// }

// calculateSupply(28, 36);
// calculateSupply(28, 2.5);
// calculateSupply(28, 400);

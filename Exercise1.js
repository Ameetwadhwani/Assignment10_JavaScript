// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// var numChildren
// var partnerName
// var geoLocation
// var jobTitle

var numChildren = [1, 2, 3, 4]
var randKids = numChildren[Math.floor(Math.random() *numChildren.length)];

var partnerName = ["Claire", "Joyce", "Louise", "Holloway"]
var geoLocation = ["Bangalore", "Toronto", "Suburbia", "Africa"]
var jobTitle = ["Co-Founder & CEO", "Partner", "Lowly Analyt", "Developer"]

// console.log("You will be a " + jobTitle + " in " + geoLocation + " and married to " + partnerName + " with " + numChildren + " kids.")


var Q = "You will be a " + jobTitle + " in " + geoLocation + " and married to " + partnerName + " with " + numChildren + " kids."

alert(Q)
console.log(Q) // this method eliminates redundant code.

// ---------------- //

// Forgot how old you are? Calculate it!

// Store the current year in a variable.
// Store your birth year in a variable.
// Calculate your 2 possible ages based on the stored values.
// Output them to the screen like so: "You are either NN or NN", substituting the values.


var myBirthYear = prompt ('What year were you born in?') // added prompt for fun. 
var currentYear = 2013
var Output = "You are either " + (currentYear - myBirthYear) + " or " + (currentYear - myBirthYear - 1)

console.log(Output)
alert(Output)

// should ahve set age as a variable to cut down on the amount of code. 


// ------------- //


// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".


var myAge = 34 
var lifeSpan = 99
var dailyCoffeeConsumption = 3
var daysRemaining = (lifeSpan - myAge)*365

var lifeTimeCoffeeConsumption = ("You will drink another " + daysRemaining*dailyCoffeeConsumption + " cups of coffee if you indeed live to see " + lifeSpan + ". Better lighten up on the sugar!")

console.log(lifeTimeCoffeeConsumption)
alert(lifeTimeCoffeeConsumption)

// ----- end of exercise 1 --- // 









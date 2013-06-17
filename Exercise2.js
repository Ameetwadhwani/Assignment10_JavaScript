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










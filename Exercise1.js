function greaterNum(numOne, numTwo) {
	if(numOne > numTwo)
			return numOne
		else if (numTwo > numOne)
			return(numTwo)
		else
			return "equal"

}

console.log("Which is greater? " + greaterNum(1,2));


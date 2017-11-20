var unesiBroj=prompt("Unesi neki broj");



if (unesiBroj %3==0 && unesiBroj %7==0) {

	console.log("FizzBuzz");
}

else if (unesiBroj %3==0) {
	console.log("Fizz");
}

else if (unesiBroj %7==0) {
	console.log("Buzz");
}
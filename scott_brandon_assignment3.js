/* Brandon Lee Scott
March 19, 2013
Deliverable 3
"Cleveland International Film Festival"
*/

//alert("JavaScript works!");

//Global Variables

var movieType1 = "comedy",
	movieType2 = "action",
	movieType3 = "drama",
	actionFilm = '"180 Seconds"',
	comedyFilm = '"Chasing Rainbows"',
	dramaFilm = "Blondie",
	destination1 = "movies",
	destination2 = "dinner",
	destination3 = "hookah bar",
	thisWeekend = "Saturday",
	cousin = "Kei",
	numberOfPeople = 4,
	thisSaturday = true,
	thisFriday = false;
	
	console.log("We had such a great time at the film festival last year, that we decided to go again this upcoming " + thisWeekend + ".");

//Method Procedure

var theater = {
	name:"Tower City Cinemas",
	location: "Cleveland, OH.",
	price: 13,
	free: false,
	foods: [
		"popcorn",
		"chicken tenders",
		"pizza",
		"mozzarella sticks"
	],
	watchMovie: function () {
		console.log("Did" + cousin + " remember to buy our ticket package in advance? " + theater.free);
	}
}

theater.watchMovie()

if (destination1 === "movies") {
	if (numberOfPeople === 4) {
		console.log("Not a problem.")
		console.log("We'll have to pay $" + theater.price + " per person.");
	} else {
		console.log("This is pretty great, we will get to watch another movie for free!!");
	}
} else {
	console.log("We'll all have extra money!");
};

//Method Function

var ticketCounter = {
	workers: "cashiers",
	job: "sale movie tickets",
	names: [
		"Jason",
		"Amy",
		"Chris",
		"Anthony"
	],
	buyTickets: function () {
		console.log("My boyfriend will purchase his and my ticket to watch a " + movieType1 + " with my cousin and her husband.");
		console.log("He walks up to the ticket counter and the cashier who attends him is " + ticketCounter.names[2] + ".");
	}


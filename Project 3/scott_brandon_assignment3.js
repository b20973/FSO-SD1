//Brandon Lee Scott
//SDI 1306
//Assignment 3
//


var passengerList= [];
//var takeTrip = 

//Constructor
var passenger = function (name,age,gender) {
	//Local Variable
	var luggageItems = [];

//Functions
	var getName = function () { 
		return name; 
	};

	var getAge = function () {
		if(age < 15) {
			console.log(name + " must be accompanied by an adult on this flight.")
		} else {
			console.log(name + " is an adult passenger.")
		};
		return age;
	};

	var getGender = function () {
		return gender;
	};

	var addItems = function (item) {
		for (var i =0; i < item.length; i++) {
			if (gender === "Female") {
				console.log(name + " has added " + item[i] + " to her luggage.");
			} else {
				console.log(name + " has added " + item[i] + " to his luggage.");
			}
			luggageItems.push(item[i]); 
		}
	};

	var listContents = function () { 
		return luggageItems;
	};

	var takeFlight= function (answer){
		if (answer === true ) {
			console.log("Finally after months of saving we can finally fly to the tropics!")
		} else {
			console.log("I can't wait to fly to the beach, we better finish packing")
		};
	}; 

	var checkinTime= function (hrs) {
		var hrsRemaining= hrs;
		while(hrsRemaining > 0){
			console.log(name + " has " + hrsRemaining + " hours until flight check in");
			hrsRemaining--;
		};
		console.log("It's time to check in."); 
			return hrs;
	};

	var luggageFees = function(json){
		var totalFees=0;
		for (var i = 0; i < json.luggage.length; i++ ) {
			if (json.luggage[i].weight > 50) {
				luggageFee = (json.luggage[i].weight - 50) * 5;
				totalFees = luggageFee + totalFees;
			};
		};
		return totalFees;
	};


	return { 
		"name": getName,
		"age": getAge,		
		"gender": getGender,
		"addContents": addItems,
		"listContents": listContents,
		"takeFlight": takeFlight,
		"timeRemaining": checkinTime,
		"luggageFees": luggageFees
	};

};
//Travelers Names
var passenger1 = passenger("Cathy",34,"Female");
passengerList.push(passenger1);
var passenger2 = passenger("Brandon Lee",28,"Male");
passengerList.push(passenger2);
var passenger3 = passenger("Lennon",11,"Female");
passengerList.push(passenger3);



passenger1.addContents(["bathing suits", "sun glasses", "flip flops, sunscreen"]);
passenger2.addContents(["beach chairs", "snorkle", "towels", "toiletries"])
passenger3.addContents(["sand toys", "umbrella", "crab net", "goggles", "kite"]);

console.log(" ");
console.log(passenger1.name() + "'s suitcase contains: " + passenger1.listContents()+ ".");
console.log(passenger2.name() + "'s suitcase contains: " + passenger2.listContents()+ ".");
console.log(passenger3.name() + "'s suitcase contains: " + passenger3.listContents()+ ".");
console.log("I think we have everything packed");

console.log(" ")
if (passengerList.length === 3){
	passenger1.takeFlight(true);
} else {
	passenger1.takeFlight(false);
};

console.log(" ");
console.log("Passenger Names: " + passengerList[0].name() + ", " + passengerList[1].name() + ", " + passengerList[2].name());


console.log(passenger1.name() + " is " + passenger1.age());
console.log(passenger2.name() + " is " + passenger2.age());
console.log(passenger3.name() + " is " + passenger3.age());

console.log(" ");
passenger1.timeRemaining(2)
passenger2.timeRemaining(2)
passenger3.timeRemaining(2)

console.log(" ");
console.log("Total luggage fees for this trip will be $" + passenger1.luggageFees(json));


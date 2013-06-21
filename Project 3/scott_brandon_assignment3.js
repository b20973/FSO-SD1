//Brandon Lee Scott
//SDI 1305 
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


//Brandon Lee Scott
//SDI 1305 
//Assignment 3
//

//global variables
var usualAmount = 25,//usual amount to save.
	//object with number properties
	eachWeek = [], 
	weeks= [],
	toMany="I have to many bills this week to put my usual amount of $"+usualAmount
;

var jobs = {
	nextWeek:"I don\'t have enough for this week.",
	paycheck1: 395,
	paycheck2: null,
	weeklyIncome: [],
	//property boolean
	enough: true,
	//poperty array
	enoughEachWeek: [],
	hoursWorked: null,
	//method mutator
	setPaycheck2: function (hoursWorked, rate){
			var check = hoursWorked*rate;
			return jobs.paycheck2=check;
	},
	//method accessor
	getHoursWorked: function (hoursWorked){
		jobs.setPaycheck2(hoursWorked,12);
	},
};

//booleanfunction
var haveEnough = function (paycheck1){
	if (paycheck1 >= 350) {
		console.log("I can maybe save the usual amount of $"+usualAmount)
		return enough = true;
	} else{
		return enough = false;
	};
};


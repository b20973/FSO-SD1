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

//number function2
var incomeEachWeek = function(income1,income2){
	for (var i = 0; i<= 4; i++){
		var totalIncome =  (income1 + income2);
		jobs.weeklyIncome.push(totalIncome);
	};return jobs.weeklyIncome;
};

//array function
var billsDue = function (bills){
	for (key in json.weeks) {
		amountEachWeek = json.weeks[key];
		weeks.push(key);
			console.log("I have $"+amountEachWeek+" due in week "+key);
		if (amountEachWeek <= 200) {
				console.log("I made enough this week so I can save more then the usual amount of $"+usualAmount);
				jobs["enoughEachWeek"].push(true);
		} else if (amountEachWeek<300){
			console.log("I can only save the usual amount")
				jobs.enoughEachWeek.push(false)

		}else{
			console.log("I have to many bills this week to put my usual amount of $"+usualAmount);
			jobs.enoughEachWeek.push(false);
		};
	};
	//console.log(jobs.enoughEachWeek);
	return jobs.enoughEachWeek, weeks;
};

//number function1
var saveMore = function (amount,number){
	usualAmountTwo = amount + number;
	var n = 0;
	while(n<= jobs.enoughEachWeek.length-1){
		if (jobs.enoughEachWeek[n]==true){
			console.log("I have made enough to double my amount of savings the "+weeks[n]+" week of $"+usualAmountTwo);

		}else {
			console.log("The "+weeks[n]+" week I can only save the usual amount of $"+usualAmount);
		};
	n++;
	};return usualAmountTwo;
};

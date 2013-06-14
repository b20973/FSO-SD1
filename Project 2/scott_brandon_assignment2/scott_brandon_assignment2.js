/*
Brandon Lee Scott
June/13/2013
Project 2
Saving enough for my next holiday.
*/

var usualAmount = 25,//usual amount to save.
	bills = [335,190,120,250], 
	weeks = [1,2,3,4],
	enoughEachWeek = [],
	next ="I don\'t have enough for this week.",
	toMany="I have to many bills this week to put my usual amount of $"+usualAmount
;
//booleanfunction
var haveEnough = function (paycheck1,paycheck2){
	if (paycheck1 == 350 && paycheck2 >=75) {
		console.log("I can maybe save the usual amount of $"+usualAmount)
		return enough = true;
	} else{
		return enough = false;
	};
};

//array function
var billsDue = function (bills){
	for (var i = 0; i <= bills.length-1; i++) {
			console.log("I have $"+bills[i]+" due in week "+weeks[i]);
		if (bills[i] <= 200) {
				console.log("I made enough this week so I can save more then the usual amount of $"+usualAmount);
				enoughEachWeek.push(true);
		} else if (bills[i]<300){
			console.log("I can only save the usual amount")
				enoughEachWeek.push(false)

		}else{
			console.log("I have to many bills this week to put my usual amount of $"+usualAmount);
			enoughEachWeek.push(false);
		};
	};console.log(enoughEachWeek);
	return enoughEachWeek;
};

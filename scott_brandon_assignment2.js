/*
Brandon Lee Scott
March/14/2013
Project 2
Finding rocks for our sand garden!
*/

var greeting = "Hey! Lets go get some rocks!",
	rocksFound = 12,
	lunchTime = true,
	getLunch = false,
	time = 22,
	myName = "Brandon Lee",
	partnerName = "Gerald",
	peopleSummary;
	foundSoFar = 9;
	shapeOfRock = ["Round", "Square", "Rectanglar", "Odd Shaped"];

var output = function(out)
{
		console.log(out);
};
var findAnotherSpot = function(newSpot)
{
		if(newSpot == true)
		{
			console.log("Lets find a new spot to look for rocks. Maybe theres betters ones in the creek.");
		}
		else
		{
			console.log("We will go to our regular spot in the metro parks");
		};
};

var rocksFoundHere = function(rocksFound)
{
		if(rocksFound < 5)
		{
			var oldSpot = true;
			findAnotherSpot(oldSpot);
		}
		else
		{
			var oldSpot = false;
			findAnotherSpot(oldSpot);
		};
};

var lunch = function(timeHour,getfood)
{
		if(timeHour < 13 && timeHour > 11 && getFood == true)
		{
			getLunch = true;
		}
		else
		{
			getLunch = false;
		};
		return(getLunch);
};

var keepRocks = function(rocksToKeep)
{
			output("Since theres only two of us, we can only carry about 9 rocks.");
			var rocksPutBack = 0;
			while(rocksToKeep >9)
			{
				rocksToKeep--;
				rocksPutBack++;
				
				output("We put back " + rocksPutBack + " rocks and now we have " + rocksToKeep + " of them left. ");
			
			
			
			};
			rocksFound = rocksToKeep;
			return(rocksFound);
};
		
var whoCameWith = function(me,partner)
{
	var didntCome = "Mike";
	peopleSummary = me  + " and " + partner + ", were the only two looking for rocks today. " + didntCome + " didn't come, if so we could have gathered more." ;

	return(peopleSummary);
};

var shapeOfRocks = function(numberOfRocks,typesOfShapes)
{
	for (var difTypeRocks = numberOfRocks; difTypeRocks >= 0 && typesOfShapes <= 5; difTypeRocks--) 
	{
		foundSoFar++;
		output("So far we have found " + foundSoFar + " different shapes of rocks! The most recent was a " + shapeOfRocks[rockTypes]);
	};
	return(foundSoFar);
};

output(greeting);
if(myName || partnerName == "Brandon Lee")
{
	output("Sure lets go Brandon Lee!");
}
output("So far we have found " + rocksFound + " rocks.");
rocksFoundHere(rocksFound);
lunch(time,getLunch);

if(rocksFound > 0)
{
	keepRocks(rocksFound);
}
else
{
	output("I guess we won't be finishing the garden today.");
};

whoCameWith(myName,partnerName);
var arr = shapeOfRocks(3, shapeOfRock);
console.log(" With these " + arr + " stones to add we will have a beautiful garden")
output(peopleSummary + " He missed out on " + foundSoFar + " pretty cool looking rocks!");


if(lunchTime == true)
{
	output("That place we stopped at for lunch was amazeballs!");
}
else
{
	output("I'm starving, Lets go soon!");
};
output("We have " + rocksFound + " to add to our sand garden.");


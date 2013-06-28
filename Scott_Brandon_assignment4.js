//Brandon Lee Scott
//SDI Project 4
//June 27, 2013

//STRING
//PROBLEM 1
//Does a string follow a 123-456-7890 pattern like a phone number?

var checkNum = function (testNumber) {
var phoneNumber = testNumber;
var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
	    if (pattern.test(phoneNumber)) { 
                return true;
                    } else {                          
                return false;
           }
};
            
   
//CHECK 1
console.log (checkNum("401-463-3324"));   

//I was not familiar with the pattern for a phone number but was able to do a google search which helped me test this.
//END PROBLEM 1
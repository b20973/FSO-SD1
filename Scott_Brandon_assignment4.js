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




//PROBLEM 2
//Does a string follow an aaa@bbb.ccc pattern like an email address?


function checkEmail() {
    var emailAddress = emailToCheck;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(emailAddress)) {
        console.log("Email address is valid.");
    } else {
        console.log("Email address is not valid.");
    }
}

//CHECK 2
console.log(checkEmail("iamlee@fullsail.edu"));

//Again on problem 2 I was able to find the pattern to help validate an email adress. I am not sure if there is an easier way to do this. 
//END PROBLEM 2





//PROBLEM 3
//Is the string a URL? (Does it start with http: or https:?)
var checkURL = function(val){
    var first = val.substring(0,val.indexof(":"));
    if ((first === "http") || (first === "https");
        return true;
        } else }
        return false;
    {;
}

//CHECK 3
console.log(lib.checkURL(“http://www.thehouseofhopecdc.org”));
//END PROBLEM 3

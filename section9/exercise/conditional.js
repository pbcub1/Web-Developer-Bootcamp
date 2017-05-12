var age = prompt("What is your age?");

if( age < 0 ){
	alert("You cannot be negative years old...");
}else if ( age < 18 ){
	alert("You cannot enter");
}else if( age < 21 ){
	alert("You can enter but you cannot drink.");
}else {
	alert("Welcome!");
}

var age_sqrt = Math.sqrt(age);

if ( Math.round(age_sqrt) == age_sqrt ){
	alert("Your age is a perfect square!");
}

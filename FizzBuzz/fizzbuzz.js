//neat fizzbuzz
for (var i = 1; i <= 100; i++) {
    var expletive = '';
    if (i % 3 === 0) expletive = 'Fizz'; //the += append
    if (i % 5 === 0) expletive += 'Buzz';
    console.log(expletive || i);
}

//how come it prints FizzBuzz for the combination of the two if statements? ->
//instead of i = i + 1 you can say i += 1, instead of repeating the value of the left on the right hand side you can use +=
// other similar are -=


//in a function, loop and if statement

function fizzBuzz(){
	for(var i=1;i<=100;i++){
		if(i%5 === 0 && i%3 === 0){
			print('FizzBuzz');
		} else if(i%3 === 0){
			print('Fizz');
		} else if(i%5 === 0){
			print('Buzz');
		} else {
			print(i);
		}
	}
}

//to invoke function at command line i.e. to print the results in the console, define the function (i.e. paste it in) and then call the function name (i.e. invoke it)

//similar to above but with a not-true for the last modulus
function fizzBuzz(){
	for(var i=1;i<=100;i++){
		if(i%3 === 0){
			print('Fizz');
		} 
		if(i%5 === 0){
			print('Buzz');
		} 
		if(i%3 !== 0 && i%5 !== 0) {
			print(i);
		}
	}
}

//and further to the above, add an output variable
function fizzBuzz(){
	var output;
	for(var i=1;i<=100;i++){
		output = '';  // does this mean output nothing or blank?? or just empty and the params to follow? its initialising the variable to an empty string.  You're telling the  code that this var should hold a string.
		if(i%3 === 0){
			output+='Fizz'; // what is the += doing here?  appending.
		} 
		if(i%5 === 0){
			output+='Buzz';
		} 
		if(i%3 !== 0 && i%5 !== 0) {
			output+=i;
		}
		print(output);
	}
}


// most DRY implementation

function fizzBuzz(){
	var output;
	for(var i=1;i<=100;i++){
		output = '';
		if(i%3 === 0){
			output+='Fizz';
		} 
		if(i%5 === 0){
			output+='Buzz';
		} 
		if(output === '') {
			output+=i;
		}
		print(output);
	}
}
// same questions as above really, re output = '' and what the += means: the output = '' sets the var to an empty string. and the +=

function fizzBuzz(){
	var output, iDivisibleBy3, iDivisibleBy5;
	for(var i=1;i<=100;i++){
		output = '';
		iDivisibleBy3 = (i%3 === 0);
		iDivisibleBy5 = (i%5 === 0);
		if(iDivisibleBy3){
			output+='Fizz';
		} 
		if(iDivisibleBy5){
			output+='Buzz';
		} 
		if(!iDivisibleBy3 && !iDivisibleBy5) {
			output+=i;
		}
		console.log(output);
	}
}  //I'm still a bit unclear about the default merged FizzBuzz output
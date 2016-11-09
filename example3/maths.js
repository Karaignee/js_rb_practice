// calculator for maths.html

function multiplyBy()  
{  
        num1 = document.getElementById("firstNumber").value;  
        num2 = document.getElementById("secondNumber").value;  
        document.getElementById("result").innerHTML = num1 * num2;  
}  

function divideBy()   
{   
        num1 = document.getElementById("firstNumber").value;  
        num2 = document.getElementById("secondNumber").value;  
document.getElementById("result").innerHTML = num1 / num2;  
}  


//get the area of a triangle using herons

var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);


//this is faulty and I don't know why:
side1 = parseInt(window.prompt("Input a side1 : ")); 
side2 = parseInt(window.prompt("Input a side2 : ")); 
side3 = parseInt(window.prompt("Input a side3 : ")); 
var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);





console.log('********next**********');


//Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". Go to the editor

 // num = Math.round(Math.random() * 10);  //or replace Math.round() with Math.ciel()  
 // gnum = prompt('Guess the number between 1 and 10 inclusive');  

 // if (gnum == num)  
 //   alert('Good Work');  
 //  else  
 //   alert('Not matched, the number was ' + num);  


//convert celcius to Far or Far to celcius

 function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);
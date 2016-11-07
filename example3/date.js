//get today's date 

var today = new Date();  
var dd = today.getDate();  
  
var mm = today.getMonth()+1;   
var yyyy = today.getFullYear();  
if(dd<10)   
{  
    dd='0'+dd;  
}   
  
if(mm<10)   
{  
    mm='0'+mm;  
}   
today = mm+'-'+dd+'-'+yyyy;  
console.log(today);  
today = mm+'/'+dd+'/'+yyyy;  
console.log(today);  
today = dd+'-'+mm+'-'+yyyy;  
console.log(today);  
today = dd+'/'+mm+'/'+yyyy;  
console.log(today);  


//get the area of a triangle using herons

var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);

//this is faulty and I don't know why:
// side1 = window.prompt("Input a side1 : "); 
// side2 = window.prompt("Input a side2 : "); 
// side1 = window.prompt("Input a side3 : "); 
// var perimeter = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
// console.log(area);

console.log('********next**********');

// is it a Leap year?

year = window.prompt("Input a Year : ");  
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);  
alert(x);  

// what years have Jan 1st as a Sunday
console.log('--------------------');
for (var year = 2017; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    }
console.log('--------------------');

// what years do my birthday fall on a weekend

console.log('--------------------');
for (var year = 2017; year <= 2060; year++)
    {
    var d = new Date(year, 4, 10);
    if ( d.getDay() === 0 || d.getDay() === 6)
        console.log("My birthday falls on a weekend in  "+year);
    }
console.log('--------------------');




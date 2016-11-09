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


//days till christmas

today=new Date();  
var christmas=new Date(today.getFullYear(), 11, 25);  
if (today.getMonth()==11 && today.getDate()>25)   
{  
christmas.setFullYear(christmas.getFullYear()+1);   
}    
var one_day=1000*60*60*24;  
console.log(Math.ceil((christmas.getTime()-today.getTime())/(one_day))+  
" days left until Christmas!"); 


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




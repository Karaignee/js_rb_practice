basic_test.js

//reverse a string, first implementation.  REverse letters of a word:

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");


//then same implementation, reverse words of a sentence:


function reverseString(str) {
return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
reverseString("welcome to my string");



//second, in a weird animate type loop:
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');

//third and even weirder, using "hello".substr(1); and  hello".charAt(0); which result in "ello" & "h" respectively:
function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);  //subtract the first and add the last???
}
reverseString("hello");


//fibonacci

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

//??? not quite, this was the live test one:
// index:                   0 1 2 3 4 5 6  7 ...
// number in sequence:      0 1 1 2 3 5 8 13 ...


// fib_num(6) => 8
// fib_num(100) => ???

// i

function fib_num(number) { // 4
   if number <= 1 return number;
      var anything = [0,1]
      for (var i = 2; i <= number; i+=;){
          anything[i] = anything[i-1] + anything[i-2]
      }
      return anything[]
}



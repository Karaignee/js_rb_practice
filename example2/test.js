function forLoop() {
    var person = {fname:"Karen", lname:"Rooney", age:40};
    
    var arbit = "";
    var x;
    for (x in person) {
        arbit += person[x] + " ";
    }
    document.getElementById("demo").innerHTML = arbit;
}
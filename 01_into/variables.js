// string
var greetings = "Hello from Akash";
console.log(greetings);
// number
var userId = 112233;
// boolean
var isLoggedIn = false;
// any
var hero;
function getHero() {
    return "Iron Man...";
}
hero = getHero();
console.log("My favorite hero is ".concat(hero));
// parameter type
var addedNumber;
function addTwo(num) {
    return num + 2;
}
addedNumber = addTwo(5);
// function return type
function retString(name) {
    return "Hello from ".concat(name);
}
var greet = retString("Akash");
console.log(greet);

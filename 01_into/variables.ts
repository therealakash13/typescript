// string
let greetings: string = "Hello from Akash";
console.log(greetings);

// number
let userId = 112233;

// boolean
let isLoggedIn: boolean = false;

// any
let hero;

function getHero() {
  return "Iron Man...";
}
hero = getHero();
console.log(`My favorite hero is ${hero}`);

// parameter type
let addedNumber;
function addTwo(num: number) {
  return num + 2;
}
addedNumber = addTwo(5);

// function return type
function retString(name: string): string {
  return `Hello from ${name}`;
}
const greet = retString("Akash");
console.log(greet);

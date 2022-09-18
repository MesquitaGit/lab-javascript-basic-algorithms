// Iteration 1: Names and Input
const hacker1 = "bruno";
const hacker2 = "joao";

console.log(`The drivers name is ${hacker1}.`);
console.log(`The navigators name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let upperCasedHacker1 = "";

for(let i = 0; i < hacker1.length; i++){
    upperCasedHacker1 += hacker1[i].toUpperCase() + " ";
}
console.log(upperCasedHacker1);

//

let navigatorsName = "";

for(let i = hacker2.length -1; i >= 0; i--){
    navigatorsName += hacker2[i];
}

console.log(navigatorsName);

//

//3.3 
// 
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
}else if(hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
}else {
  console.log("What?! You both have the same name?")
}



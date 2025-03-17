// Q1
let userAge = prompt("Enter your age");

if(userAge >= 18){
  console.log("You are old enough to drive");
}else if(userAge < 18){
console.log("You are left with " + (18 - userAge) + " years to drive");
}else{
  console.log("You should enter a number dawg");
};

//Q2
let myAge = prompt("Enter my age"),
yourAge = prompt("Enter your age");

if (myAge > yourAge){
  console.log("I am " + (myAge-yourAge) + " years older than you");
}else if(myAge < yourAge){
  console.log("You are " + (yourAge-myAge) + " years older than me");
}else if(myAge == yourAge){
  console.log("We are of the same age");
}else{
  console.log("Just enter numbers dawg");
};

// Q3
let a = 4,
b = 3;

if(a > b){
  console.log(`${a} is greater than ${b}`);
}else{
  console.log(`${b} is greater than ${a}`);
};

(a > b) ? console.log(a + " is greater than "  + b) : console.log( b + " is greater than " + a);

// Q4
let evenNumberChecker = prompt("Enter any number");

if(evenNumberChecker % 2 == 0){
  console.log(`${evenNumberChecker} is an even number`);
}else{
  console.log(`${evenNumberChecker} is an odd number`);
};


// Level 2 Q1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

/*let statement = {
  quote: "There is no exercise better for the heart than reaching down and lifting people up.",
  author: "John Holmes"
};
console.log(statement);*/


// Q2
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");
/*
let statement2 ={
  quote2: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.",
  author2: "Mother Theresa"
};
console.log(statement2); */

// Q3
let stringNum = "10";
let num = 10;
console.log(typeof stringNum);
console.log(typeof num);
console.log(typeof stringNum == typeof num);
// Converting to number
let stringConvert = parseInt(stringNum);
console.log(typeof stringConvert == typeof num);

// Q4
let stringFloat = "9.8";
let floatConvert = parseFloat(stringFloat);
console.log(floatConvert == 10);

floatConvert = Math.ceil(floatConvert);
// floatConvert = Math.round(floatConvert);
console.log(floatConvert == 10);

// Q5
let python = "Python";
let jargon = "Jargon";
console.log(jargon.includes("on"), python.includes("on"));

// Q6
let course = "I hope this course is not full of jargon";
console.log(course.includes("jargon"));

// Q7
let randomNumber = Math.floor(Math.random()*101);
console.log(randomNumber);

// Q8
let randomNumber2 = (Math.floor(Math.random() * 51) + 50);
console.log(randomNumber2);

// Q9
let randomNumber3 = Math.floor(Math.random()* 256);
console.log(randomNumber3);

// Q10
let javaScript = "JavaScript";
// Accessing the string using array index
// console.log(javaScript[0]);

// Generating random number
let randomNumber4 = Math.floor(Math.random()* javaScript.length);

let randomCharacter = javaScript[randomNumber4];

console.log(randomCharacter);

// Q11
console.log("1 1 1 1 1\n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");

// Q12
let preamble10 = "You cannot end a sentence with because because because is a conjunction";
console.log(preamble10.indexOf("because"));

console.log(preamble10.substr(31, 23));

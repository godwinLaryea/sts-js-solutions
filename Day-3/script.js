// Q1
let firstName = "Godwin",
lastName = "Laryea",
country = "Ghana",
city = "Accra",
age = "67",
isMarried = false,
year = 2025;
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

// Q2
let number = "10"; 
console.log(number == 10, typeof number == 10);
console.log(number ===10, typeof number === 10);

// Q3
let numConvert = parseInt("9.8");
console.log(numConvert == 10);

// Q4 i 
let trueBoolean1 = 1,
trueBoolean2 = "Kofi Yesu",
trueBoolean3 = true;
console.log(trueBoolean1, trueBoolean2, trueBoolean3);

// Q4 ii
let falseBoolean1 = 0,
falseBoolean2,
falseBoolean3 = false; 

// Q5
console.log(4 > 3) //true
console.log(4 >= 3 )//true
console.log(4 < 3) //false
console.log(4 <= 3) //false
console.log(4 == 4) //true
console.log(4 === 4) //true
console.log(4 != 4) //false
console.log(4 !== 4 )//false
console.log(4 !="4") //false
console.log(4 !== "4") //true
console.log(4 == "4") //true
console.log(4 === "4") //false


// Q5 xii
console.log("Python".length !== "jargon".length);

// Q6
console.log(4 > 3 && 10 < 12) //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12 )//true
console.log(4 > 3 || 10 > 12) //true
console.log(!(4 > 3)) //false
console.log(!(4 < 3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === "4")) //true
console.log(!("dragon".includes("on") && "python".includes("on"))) //false


// Q7
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());
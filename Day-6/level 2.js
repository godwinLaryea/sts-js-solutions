// Q1
const characters = "abcdeghijlmnopqrstuvwxyz0123456789";

const charactersArr = characters.split("");

let newChar;

let randomChar = "";

for (let i = 0; i <= 8; i++) {
  newChar = Math.floor(Math.random() * charactersArr.length);
  randomChar += charactersArr[newChar];
}
console.log(randomChar);

// Q2
// hexadecimal
// const #
// numbers 0-9, letters a-f

const hexChars = "0123456789ABCDEF";
const symbol = "#";

let hexaDecimal = "";

for (let i = 0; i < 6; i++) {
  let randomChars = Math.floor(Math.random() * 16);
  hexaDecimal += hexChars[randomChars];
}

console.log(symbol + hexaDecimal);

// Q3
// const rgb
// create a function that generates random numbers

let rgb = [];

for (let i = 0; i < 3; i++) {
  let randomRgb = Math.floor(Math.random() * 256);
  rgb.push(randomRgb);
}
console.log(`rgb(${rgb})`);

// Q4
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];

let newCountriesArr = [];

for (let i = 0; i < countries.length; i++) {
  newCountriesArr.push(countries[i].toUpperCase());
}
console.log(newCountriesArr);

// Q5
let countriesLength = [];

for (let i = 0; i < countries.length; i++) {
  countriesLength.push(countries[i].length);
}
console.log(countriesLength);

// Q6
// already generated countries length
// need to create array of country abbreviated names

let countryAbbrev = [];

let countryAbbrevLength = [];

for (let i = 0; i < countries.length; i++) {
  countryAbbrev.push(countries[i].slice(0, 3).toUpperCase());
  console.log(
    (countryAbbrevLength.push = `[${countries[i]}, ${countryAbbrev[i]}, ${countriesLength[i]}]`),
  );
}

// Q7
let countryWithLand = [];
for(let i = 0; i < countries.length; i++){
  if(countries[i].includes("land")){
    countryWithLand.push(countries[i]);
  }else{
    (`All these countries; ${countries[i]} are without land`);
  }
};
console.log(countryWithLand);

// Q8
let countryEndsWithIa = [];

for(let i = 0; i < countries.length; i++){
  if(countries[i].slice(countries[i].length - 2, countries.length).includes("ia")){
    countryEndsWithIa.push(countries[i]);
  }else{
    (`These countries; ${countries[i]}, do not end with "ia"`)
  };
}
console.log(countryEndsWithIa);

// let countryEndsWithIa = [];

// for(let i = 0; i < countries.length; i++){
//   if(countries[i].toString().endsWith("ia")){
//     countryEndsWithIa.push(countries[i]);
//   }else{
//     (`These countries: ${countries[i]} do not end with "ia"`);
//   }
// };
// console.log(countryEndsWithIa);

 


// Q9
let longestCountry = countries[0].length;

for (let i = 0; i < countries.length; i++){
  if(countries[i].length > longestCountry)
    longestCountry = countries[i];
}
console.log(longestCountry);


// Q10

let countryWith5 = [];

for(let i = 0; i < countries.length; i++){
  if(countries[i].length === 5){
    countryWith5.push(countries[i])
  }
}
console.log(countryWith5);

// Q11
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

let longestWebTech = webTechs[0].length;

for (let i = 0; i < webTechs.length; i++){
  if(webTechs[i].length > longestWebTech){
    longestWebTech = webTechs[i]
  }
}
console.log(longestWebTech);


// Q12
let webTechLength = [];

let webTechAndLength = [];

for (let i = 0; i < webTechs.length; i++){
  webTechLength.push(webTechs[i].length);
  
  webTechAndLength.push([webTechs[i], webTechLength[i]]);
}
console.log(webTechAndLength);

// Q13
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

let acroMernStack = [];

for(let i = 0; i < mernStack.length; i++){
  acroMernStack.push(mernStack[i].slice(0, 1))
}

console.log(acroMernStack);

// Q14
console.log(webTechs);

for(let i = 0; i < webTechs.length; i++){
  console.log(webTechs[i]);
}

// Q15
const fruits = ['banana', 'orange', 'mango', 'lemon'];

const reverseFruits = []

for (let i = fruits.length -1 ; i >= 0; i--){
  reverseFruits.push(fruits[i])
}

console.log(reverseFruits);

// Q16
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for(let i = 0; i < fullStack.length; i++){
  
  for(let j = 0; j < fullStack[i].length; j++) {  
    console.log(fullStack[i][j]);
  }
}















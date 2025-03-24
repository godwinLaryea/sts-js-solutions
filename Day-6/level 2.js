// Q1
const characters = "abcdeghijlmnopqrstuvwxyz0123456789";

const charactersArr = characters.split("");

let newChar;

randomChar = "";

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
symbol = "#";

let hexaDecimal = "";

for (i = 0; i < 6; i++) {
  randomChars = Math.floor(Math.random() * 16);
  hexaDecimal += hexChars[randomChars];
}

console.log(symbol + hexaDecimal);

// Q3
// const rgb
// create a function that generates random numbers

let rgb = [];

for (i = 0; i < 3; i++) {
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

for (i = 0; i < countries.length; i++) {
  countriesLength.push(countries[i].length);
}
console.log(countriesLength);

// Q6
// already generated countries length
// need to create array of country abbreviated names

let countryAbbrev = [];

let countryAbbrevLength = [];

for (i = 0; i < countries.length; i++) {
  countryAbbrev.push(countries[i].slice(0, 3).toUpperCase());
  console.log(
    (countryAbbrevLength.push = `[${countries[i]}, ${countryAbbrev[i]}, ${countriesLength[i]}]`),
  );
}
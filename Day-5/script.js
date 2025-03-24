// Q1
let arr = [];

// Q2
let firstArray = ['Nii', 'Leslie', 'Shayne', 'Yusif', 'Carlos'];

// Q3
console.log(firstArray.length);

//Q4
let firstItem = firstArray[0],
  middleItem = firstArray[Math.floor(firstArray.length / 2)],
  lastItem = firstArray[firstArray.length - 1];

console.log(firstItem, middleItem, lastItem);


// Q5
const mixedDataTypes = [
  'Facebook',
  true,
  23,
  'Exchange',
  '',
  null,
];

console.log(mixedDataTypes);

// Q6
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];

// Q7
console.log(itCompanies);

// Q8
console.log(itCompanies.length);

// Q9
const firstItCompany = itCompanies[0],
  middleItCompany = itCompanies[Math.floor(itCompanies.length / 2)],
  lastItCompany = itCompanies[itCompanies.length - 1];

// Q10
console.log(firstItCompany, middleItCompany, lastItCompany);

// Q11
let firstItUpper = firstItCompany.toUpperCase(),
  secondItUpper = itCompanies[1].toUpperCase(),
  thirdItUpper = itCompanies[2].toUpperCase(),
  middleItUpper = middleItCompany.toUpperCase(),
  fifthItUpper = itCompanies[4].toUpperCase(),
  sixthItUpper = itCompanies[5].toUpperCase(),
  seventhItUpper = itCompanies[6].toUpperCase();

  console.log(firstItUpper, secondItUpper, thirdItUpper, middleItUpper, fifthItUpper, sixthItUpper, seventhItUpper);
  

  // Q12
  // Companies constant variable already declared and assigned values...
  itCompanies.splice(6, 0, 'and');
console.log(itCompanies);

let itCompaniesToString = itCompanies.toString();
console.log(`${itCompaniesToString} are big companies`);

// Q13
console.log(itCompanies);
let userCompanySearch = prompt('Enter the name of the company');

let firstLetter = userCompanySearch.slice(0, 1);
firstLetter = firstLetter.toUpperCase();

let company = firstLetter + userCompanySearch.slice(1, userCompanySearch.length);

if (itCompanies.includes(company)) {
  console.log(`${company} is a big IT company`);
} else {
  console.log(`${company} not found`);
};

// Q14


// Q15
console.log(itCompanies.sort());
itCompanies.pop();
console.log(itCompanies);

// Q16
console.log(itCompanies.reverse());

// Q17
let firstThreeCompanies = itCompanies.slice(0, 3);
console.log(firstThreeCompanies);

// Q18
let lastThreeCompanies = itCompanies.slice((itCompanies.length - 3), itCompanies.length);
console.log(lastThreeCompanies)

// Q19
let middleCompany = itCompanies.slice(middleItUpper, middleItUpper + 1);

console.log(middleCompany);

// Q20
itCompanies.shift();
console.log(itCompanies);

// Q21
itCompanies.splice(2, 2);
console.log(itCompanies);

// Q22
itCompanies.pop();

// Q23
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies)


/* LEVEL 2 EXERCISES

Import countries and webTech js files
*/

// Q1
import { countries } from './countries.js';
import { webTechs } from './web_tech.js';

// Q2



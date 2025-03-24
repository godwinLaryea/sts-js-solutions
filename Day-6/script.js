// Q1
// for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
};

// while
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
};

// do while
let i = 0
do{
  console.log(i);
  i++
}while(i <=10);

// Q2
for (let i = 10; i >= 0; i--) {
  console.log(i);
};

let i = 10;
while(i >= 0){
  console.log(i);
  i--;
};

let i = 10;
do {
  console.log(i);
  i--;
}while(i >= 0);

// Q3
for (let n = 0; n <= 7; n++){
  console.log(n);
};

// Q4
let pattern = '';
for(let i = 0; i < 7; i++){
  pattern += '#';
  console.log(pattern);
}

// Q5
for(let i = 0; i <=10; i++){
  console.log(`${i} x ${i} = ${i ** 2}`);
};

// Q6
// using for loops

for(let i = 0; i <=10; i++){
 console.log(`${i} ${i ** 2} ${i ** 3}`);
}

// using while for same question
let i = 0
while(i <= 10){
  console.log(`${i} ${i ** 2} ${i ** 3}`);
  i++
};

// using do while for same question
do {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
  i++
}while(i <= 10);

// Q7
for(let i = 0; i <= 100; i++){
  if(i % 2 ===0){
    console.log(i);
  }
};

// using while
let i = 0
while(i <= 100){
  if(i % 2 === 0){
  console.log(i);
}
i++
};

// do while
do {
  if(i % 2 === 0){
  console.log(i);}
  i++
}while (i <=100);

// Q8
for(let i = 0; i <= 100; i++){
  if(i % 2 ===1){
    console.log(i);
  }
};

// Q9
// Prime numbers are only divisible by 1 and itself
// for(let i = 0; i <= 100; i++){
//   if ( (i / 1 === i) && (i % i === 1) ) {
//     console.log(i);
//   };
// };

// Q10
let sum = 0;

for(let i =0; i <= 100; i++){
  sum += i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

// Q11
let sumEven = 0,
  sumOdd = 0;

for (i = 0; i <= 100; i++) {

  if (i % 2 === 1) {
    sumOdd += i
  } else if (i % 2 === 0) {
    sumEven += i
  }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`);

// Q12
let sumOdd = 0,
  sumEven = 0;

for (i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    sumOdd += i
  } else if (i % 2 === 0) {
    sumEven += i
  }
};

let evenArr = [sumEven];
oddArr = [sumOdd];
console.log(evenArr.concat(oddArr));

// Q13
let arr = [];
let randomValue;
for (i = 0; i < 5; i++) {

  randomValue = Math.floor(Math.random() * 5);
  arr.push(randomValue);
}
console.log(arr);

// Q14
let arr = [];
let randomValue;
for (i = 0; i < 5; i++) {

  randomValue = Math.floor(Math.random() * 100);
  if(!arr.includes(randomValue)){
    arr.push(randomValue);
  }

}
console.log(arr);

// Q15
const characters = "abcdeghijlmnopqrstuvwxyz0123456789";
let charactersToArray = characters.split("");

let newChar;

let randomArrGenerator = "";

for (i = 0; i < 6; i++) {
  newChar = Math.floor(Math.random() * charactersToArray.length);
  randomArrGenerator += charactersToArray[newChar];
}

console.log(randomArrGenerator);
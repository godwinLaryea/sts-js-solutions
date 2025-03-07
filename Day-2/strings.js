// Q1
let challenge = "30 Days Of JavaScript";
// Q2
console.log(challenge);
// Q3
console.log(challenge.length);
// Q4
console.log(challenge.toUpperCase());
// Q5
console.log(challenge.toLowerCase());
// Q6
console.log(challenge.substr(3,4));
// Q7
console.log(challenge.substring(3, challenge.length));
// Q8
console.log(challenge.includes("Script"));
// Q9
console.log(challenge.split());
// Q10
console.log(challenge.split(' '));

// Q11
let social = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(social);
// splitting it at the comma and changing it to an array
console.log(social.split(","));

// Q12
console.log(challenge.replace("JavaScript", "Python"));
// Q13
console.log(challenge.charAt(15));
// Q14
console.log(challenge.charAt(11));
console.log(challenge.charCodeAt(11));
// Q15
console.log(challenge.indexOf("a"));
// Q16
console.log(challenge.lastIndexOf("a"));
// Q17
// Preamble
let preamble ="You cannot end a sentence with because because because is a conjunction."
console.log(preamble.indexOf("because"));
// Q18
console.log(preamble.lastIndexOf("because"));
// Q19
console.log(preamble.search("because"))

// Q20
console.log(challenge.trim());

// Q21
console.log(challenge.startsWith("30"));
// Q22
console.log(challenge.endsWith("JavaScript"));
// Q23
console.log(challenge.match(/a/g));

// Q24
let firstPart = "30 Days of";
let secondPart = " JavaScript";
console.log(firstPart.concat(secondPart));

// Q25
console.log(challenge.repeat(2));

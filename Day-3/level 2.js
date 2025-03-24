// Q1
let base = prompt("Enter base"),
height = prompt("Enter the height");

let areaOfTriangle = (0.5 * base * height);
console.log(`The area of the triangle is ${areaOfTriangle}`);

// Q2
let sideA = prompt("Enter side a"),
sideB = prompt("Enter the value of the base"),
sideC = prompt("Enter side C");

let perimeterOfTriangle = sideA + sideB + sideC;
console.log(`The perimeter of the triangle is ${perimeterOfTriangle}`);

// Q3
let length = prompt("Enter the length"),
width = prompt("Enter the width");

let perimeterOfRectangle = ( 2*(length * width) );
console.log(`The perimeter of the rectangle is ${perimeterOfRectangle}`);

// Q4
let radius = prompt("Enter the radius of the circle");
const PI = 3.142;

let circumferenceOfCircle = (2 * PI * radius);
console.log(`The Circumference of the circle is ${circumferenceOfCircle}`);


// Q5
/* Calculate slope, x-intercept, 
y-intercept of eqn y =2x-2
*/

// y = mx + b
// so comparing y = mx + b || y = 2x -2
// m =2 so slope = 2 and b=-2
let slope = 2;

// Q6
let vertical1 = 10,
vertical2 = 2,
horiz2 = 6,
horiz1 = 2;

let slope2 = (vertical2-vertical1)/(horiz1-horiz2);
console.log(slope2);

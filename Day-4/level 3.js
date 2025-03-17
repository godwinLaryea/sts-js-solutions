// Q1
// theMonths constant variable already assigned in level 2 qn 2

const thirtyDaysMonths = ['april', 'june', 'september', 'november'];

userMonth = prompt("Enter the month"),
  month = userMonth.toLowerCase();

if (!theMonths.includes(month)) {
  console.log("Enter a valid month");
} else if (thirtyDaysMonths.includes(month)) {
  console.log(`${month} has 30 days`);
} else if (theMonths.indexOf(month) === 1) {
  console.log(`${month} has 28 or 29 days`);
} else {
  console.log(`${month} has 31 days`);
}
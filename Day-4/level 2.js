// Q1
let studentGrades = prompt("Enter student's grades");

if( studentGrades >= 80 && studentGrades <= 100){
  console.log("Grade A");
}else if (studentGrades >=70 && studentGrades <=89){
  console.log("Grade B");
}else if (studentGrades >= 60 && studentGrades <= 69){
  console.log("Grade C");
}else if (studentGrades >= 50 && studentGrades <= 59){
  console.log("Grade D");
}else if (studentGrades >= 0 && studentGrades <= 49){
  console.log("Grade F");
}else{
  console.log("Enter a number");
};

// Q2
let UserInputSeason = prompt("What month is it");
let season = UserInputSeason.toLowerCase();

const theMonths = ['january', 'february', 'march','april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']


let autumn = ['september', 'october', 'november'],
  winter = ['december', 'january', 'february'],
  spring = ['march', 'april', 'may'],
  summer = ['june', 'july', 'august'];

  if(!theMonths.includes(season)){
    console.log('Enter a valid month dawg');
  }else if(autumn.includes(season)){
    console.log("The season is Autumn");
  }else if(winter.includes(season)){
    console.log("The season is Winter");
  }else if(spring.includes(season)){
    console.log("The season is Spring");
  }else if(summer.includes(season)){
    console.log("The season is Summer");
  };

// Q3
let day = prompt("What is the day today?");

let firstLetter = day.substring(0, 1);
firstLetter = firstLetter.toUpperCase();

let restOfLetter = day.substring(1, day.length);
restOfLetter = restOfLetter.toLowerCase();

let fullDay = firstLetter + restOfLetter;


const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
weekends = ['Saturday', 'Sunday'];

if(!daysOfTheWeek.includes(fullDay)){
  console.log('Enter a valid day');
}else if(weekDays.includes(fullDay)){
  console.log(`${fullDay} is a working day`);
}else if(weekends.includes(fullDay)){
  console.log(`${fullDay} is a weekend`);
};







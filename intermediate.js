

// Capitalize

// const capitalize = (function() {
//     let text = String(prompt("Write your text"));
//     let text1 = text.split("");
//     // console.log(text1);
//     let char = text1[0].toUpperCase();
//     // console.log(char);
//     delete text1[0];
//     // console.log(text1);

//     text1.unshift(char);

//     console.log(text1.join(""));
// }());

// Average Grade


// const calcAvgGrades = (gradeMath, gradePhysics, gradeEnglish) => {
//     let sum = gradeMath + gradePhysics + gradeEnglish;
//     let average = (sum)/3;
//     let result = [sum, average];
//     return result;
// };

// let sum = (calcAvgGrades(3, 4, 5)[0]);
// let average = (calcAvgGrades(3,4,5)[1]);
// console.log(`Sum: ${sum} \nAverage ${average}`);

// Time Convert


// const convertTime = () => {
//     let minutes = Number(prompt("Write minutes"));
//     let hours = minutes/60;
//     let rhours = Math.floor(hours);
//     let minutes1 = (hours - rhours)*60;
//     let rminutes = Math.round(minutes1);
//     return minutes + " minutes= " + rhours + " hour(s) and " + rminutes + " minutes(s).";
// };

// console.log(convertTime());
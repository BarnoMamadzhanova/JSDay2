// ex 1 | Temperature v1.0

// let temp = Math.floor(Math.random()*26) -5;

// if(temp > 10 || temp <-5){
//     console.log( "The weather is moderate");
// }else {
// } console.log("The weather is cold");

// ex 2 | Random Food

// function randomFood (){
//     var food = Math.floor(Math.random()*4);
//     return food;
// }
// var favoriteFoods = randomFood();
//     switch (favoriteFoods) {
//         case 0:
//             title = 'pizza';
//             console.log(title);
//             break;
//         case 1:
//             title = 'hamburger';
//             console.log(title);
//             break;
//         case 2:
//             title = 'ice cream';
//             console.log(title);
//             break;
//         case 3:
//             title = 'chocolate';
//             console.log(title);
//             break;
//     }

// ex 3 | Crystal Gazer

// Write a function named crystalGazer() that takes four arguments: number of children,
// partner's name, geographic location, and job title. Once the user passes the four arguments
// the program should output the following message on screen:

// You will be a job_title in location and married to partners_name with number_childrens.

// const crystalGazer = (childrens, name, location, job) => {
//     console.log(`You will be a ${job} in ${location} and married to ${name} with ${childrens}`)
// };
// crystalGazer(5, 'Bob', 'Wien', 'developer');

// ex 4 | Age Calculator

// Write a function called ageCalculator() that takes two arguments:
//  birth year and current year. Calculate 2 possible ages based on
//  those years (two, because we don't know the birth month).

// You should get the following results: You are either 29 or 28

//  function ageCalculator(currentYear, birthYear) {
//     let age1 = currentYear - birthYear;
//      let age2= currentYear - birthYear - 1;
//      return `You are either ${age1} or ${age2}`;
//  }

//   console.log(ageCalculator(2022, 1999));

// ex 5 | Age Calculator-improved

// Enhance your previous exercise in terms of how to get the current year in
// JavaScript instead of passing it in. Provide the same results just by
// passing one argument.

// You should get the following results:  You are either 29 or 28

// function ageCalculator(currentYear, birthYear) {
//     let age1 = currentYear - birthYear;
//     let age2= currentYear - birthYear - 1;
//     return `You are either ${age1} or ${age2}`;
// }

// const d = new Date();
// let currentYear = d.getFullYear();

// console. log(ageCalculator(currentYear, 1999));

// ex 6 | Degree-Radian Conversion

// const convertDegrees = (degrees) => {
//     let radian = degrees * (Math.PI/180);
//     return radian;
// };

// console.log(convertDegrees(70));

// ex 7 | Area and Volume of a box

// const calcAreaAndVolume = (width, height, depth) => {
//     let area =  width * height;
//     let volume = width * height * depth;
//     let result = [area, volume];
//     return result;
// };

// console.log((calcAreaAndVolume(2,5,3)[0]));
// console.log(calcAreaAndVolume(2,5,3)[1]);


// Ex2
// let arr = ["food1", "food2", "food3", "food4"];
// const rand = () => arr[Math.floor(Math.random() * arr.length)];
// console.log(rand());

// function up(str){
//   return str.charAt().toUpperCase() + str.substr(1);
// }  

// console.log(up("ab dsc"))
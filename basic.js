

// ex 1 | Temperature v1.0

// let temp = Math.floor(Math.random()*26) -5;
// console.log(temp);

// if(temp > 10){
//     console.log( "The weather is moderate");
// }else {

// } console.log("The weather is cold");


// ex 2 | Random Food

// const favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"];
// const favoriteFoods1 = [0,1,2,3];

// function randomFood (){

//     var food = Math.floor(Math.random()*4);
//     // console.log(food);
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

// crystalGazer(5, 'Bobur', 'Wien', 'bank worker');


// ex 4 | Age Calculator

// Write a function called ageCalculator() that takes two arguments:
//  birth year and current year. Calculate 2 possible ages based on 
//  those years (two, because we don't know the birth month).

// You should get the following results:

// You are either 29 or 28

// function ageCalculator(currentYear, birthYear) {
//     let age1 = currentYear - birthYear;
//     let age2= currentYear - birthYear - 1;

//     console.log(`You are either ${age1} or ${age2}`);
// }

// ageCalculator(2023, 1999);


// ex 5 | Age Calculator-improved

// Enhance your previous exercise in terms of how to get the current year in 
// JavaScript instead of passing it in. Provide the same results just by  
// passing one argument.

// You should get the following results:

// You are either 29 or 28


// function ageCalculator(currentYear, birthYear) {
//     let age1 = currentYear - birthYear;
//     let age2= currentYear - birthYear - 1;

//     console.log(`You are either ${age1} or ${age2}`);
// }

// const d = new Date();
// let currentYear = d.getFullYear();

// ageCalculator(currentYear, 1999);


// ex 6 | Degree-Radian Conversion


// const convertDegrees = (degrees) => {
//     let radian = degrees * (Math.PI/180);
//     console.log(radian)
// };

// convertDegrees(90);

// ex 7 | Area and Volume of a box

// const calcAreaAndVolume = (width, height, depth) => {
//     let area =  width * height;
//     let volume = width * height * depth;
//     let result = [area, volume];
//     return result;
// };

// console.log((calcAreaAndVolume(2,5,3)[0]));
// console.log('\n');
// console.log(calcAreaAndVolume(2,5,3)[1]);



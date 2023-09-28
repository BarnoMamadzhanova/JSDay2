

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



const crystalGazer = (childrens, name, location, job) => {
    console.log(`You will be a ${job} in ${location} and married to ${name} with ${childrens}`)
};

crystalGazer(5, 'Bobur', 'Wien', 'bank worker');



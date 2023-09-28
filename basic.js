

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

function randomFood (){

    var food = Math.floor(Math.random()*4);
    // console.log(food);
    return food;
}

var favoriteFoods = randomFood();

    switch (favoriteFoods) {
        case 0:
            title = 'pizza';
            console.log(title);
            break;
        case 1:
            title = 'hamburger';
            console.log(title);
            break;
        case 2:
            title = 'ice cream';
            console.log(title);
            break;
        case 3:
            title = 'chocolate';
            console.log(title);
            break;
    }


// //IF-STATEMEMENT
// /*
// IF(CONDITION){
//     IF CONDITION:TRUE DO THIS WORK
// }*/

// //comparatively operators
// /*

// < ,
// > ,
// <= ,
// >= ,
// == ,
// = ,
// != ,
// ===(type bhi check karega)
// */

// // const isUserLoggedIn = true;
// // if (isUserLoggedIn) {
// // }

// // const score = 200;
// // if (score > 100) {
// //   const power = "FLY";
// //   console.log(`user Power: ${power}`);
// // }


// //shorthand notation

// const balance = 1000;
// // if(balance>500)console.log("test");

// if(balance<500){
//     console.log("yes less than 500");
// }else if (balance<750)
// {
//     console.log("less than 750");
// }
// else if(balance<900)
// {
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("you are allow to purchase");
}

if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("user logged in");
}
// const userEmail = []
// // if (userEmail) {
// //         console.log("Got Email!")
// // }
// // else{
// //     console.log("Email not provided!")
// // }

// //falsy values 
// /*
// 1.false
// 2.zero(0)
// 3.-0
// 4.bigint-0n
// 5.empty strings
// 6.null,undefined
// 7.NaN
// */


// //TRUTHY VALUES
// /*
// 1."0" -->ZERO IN STRING
// 2.'false --->false in strigs
// 3." "
// 4.[]
// 5.{}
// 6.function(){}
//  */

// //checking empty array that it is empty or not

// if (userEmail.length === 0) {
//     console.log("array is empty");
// }

// //checking object that it is empty or not

// const emptyobj={}
// if (Object.keys(emptyobj).length === 0) {
//     console.log("object is empty");
// }



// *********************************NULLISH COALESCING OPERATOR(??):NULL UNDEFINED*****************************
let val1;
// val1 = 5 ?? 10

//why ?? using firebase we got two values or null or undefined we have to treat as either null then this or eithetr this that and all.
// val1 = null ?? 10 // then 10. because we may have problem while value being null so it takes 10
// val1 = undefined ?? 15 // then 15
// val1 = null ?? 10 ?? 15 // then 10 now you got it
 
// NC and TERNARY operator are different
// condition?true : false
// eg:-
const iceteaprice = 90

iceteaprice>=80?console.log("mehengi"):console.log("sasti"); //mehengi




console.log(val1);
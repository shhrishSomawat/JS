//Singleton -->{object.create} koi bhi constructor se banate h toh singleton se banate hai ek hi tarah ka hota hai otherwise multiple objectts banate hai or literal se singleton nahi banta hai bas constructor se banta hai
//Object Literals --> way of object creation

// const jsUser = {
//     name:"shrish",
//     "full Name":"shrish somawat",
//     age : 22,
//     location: "Delhi",
//     email : "shrish@ms.com",
//     isLoggedIn : false,
// //     lastLoggedInDays :["Monday","saturday"]
// // }

// // way of accesing objects
// console.log(jsUser.email); //email
// console.log(jsUser["email"]); //email

// // we cannot access our full name key value pair by dot method because there is gap in "full name"
// console.log(jsUser["full Name"]); // it can be only be called as that type only



const mySym  = Symbol("yeahh")
// console.log(typeof mySym); // datatype is symbol

//now create a symbol and use it as a key in objects
const jsUser = {
    name:"shrish",
    "full Name":"shrish somawat",
    age : 22,
    [mySym]:"key1",   //if we want mysym to use as a symbol then we have to write it in a square box like this [mysym]
    location: "Delhi",
    email : "shrish@ms.com",
    isLoggedIn : false,
    lastLoggedInDays :["Monday","saturday"]
}

// console.log(jsUser[mySym]); //key1 but tyoe of mysym is not symbl here
// console.log(typeof jsUser[mySym]); // this is string how???

// is i want to update the email of jsuser
// jsUser.email = "shrishsomawat982@gmail.com"

// console.log(jsUser["email"]); //now the value of email is changed it will print our new email which is shrishsomawat982@gmail.com


// // if i want to lock the value of any key so that noone will change the value of that key in future lets see..
// Object.freeze(jsUser) // now value will not change

// jsUser.email = "shrishsomawat982@gmail.com"
// console.log(jsUser["email"]); // it will still gove me shrish@ms.com


// adding cuntionality to object jsuser
jsUser.greetings = function(){
    console.log("Hello JS users!!");
}

jsUser.greetingsTwo = function(){
    // console.log(`Hello Jsuser whose name is ${jsUser.name}`); //${jsuser.name} is also correct but we want to access the same object reference  we can aso use this.
    console.log(`Hello Jsuser whose name is ${this.name} your email id is ${this.email}`);
}

console.log(jsUser.greetingsTwo());//Hello JS users!! 


//undefined ?/
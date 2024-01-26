// // //declaring objects using singleton and using constructor
// // // const tinderUser = { } ====  const tinderuser = new Object()
// // /*
// // bas const tinderUser = { } yeh ek singleton object hai or

// // const tinderuser = new Object() yeh ek non singleton object hai 
// // */

// // const tinderuser = new Object();
// // // console.log(tinderuser);   //it will give empty obj. like this {}
// // tinderuser.id = "123abc";
// // tinderuser.name = "shrish";
// // tinderuser.isLoggedIn = "false";

// // // these are basics but now obects inside object
// // const regularUser = {
// //   email: "someone@xyz.com",
// //   fullname: {
// //     userFullName: {
// //       firstName: "shrish",
// //       lastname: "somawat",
// //     },
// //   },
// // };

// // // console.log(regularUser.fullname.userFullName.lastname) //asccesing nested objectss

// // // merging objects like arrays
// // const obj1 = {
// //   1: "A",
// //   2: "B",
// // };

// // const obj2 = {
// //   3: "C",
// //   4: "D",
// // };

// // // const obj3 = Object.assign({},obj1,obj2)

// // //we can use spreading here like array
// // const obj3 = { ...obj1, ...obj2 };
// // // console.log(obj3); //{ '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

// // // when data come from database it comes like array of objects

// // const user = [
// //   {
// //     id: 1,
// //     name: "shrish",
// //     email: "shr@123.com",
// //   },
// //   {
// //     id: 2,
// //     name: "somawat",
// //     email: "shr@1ree23.com",
// //   },
// //   {
// //     id: 3,
// //     name: "hrish",
// //     email: "shr@12e43.com",
// //   },
// // ];

// // // console.log(users[1].email);
// // console.log(tinderuser);
// // console.log(Object.keys(tinderuser)); //[ 'id', 'name', 'isLoggedIn' ] in arrray form so we can looping on it and use further
// // console.log(Object.values(tinderuser)); //[[ '123abc', 'shrish', 'false' ]]
// // //entries=---->
// // console.log(Object.entries(tinderuser));

// // // asking fot value present or not
// // console.log(tinderuser.hasOwnProperty("isLoggedInss")); //false

// const course={
//     courseName:"Js with Shrish",
//     price:999,
//     courseInstructor:"Shrish"
// }
// // console.log(course['price']); //999 simple

// // but sometime we have to clean the code 
// // syntax simple to accessing
// const{courseInstructor}=course;
// console.log(courseInstructor); //Shrish

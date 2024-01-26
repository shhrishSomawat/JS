function sayMyName() {
  console.log("s");
  console.log("h");
  console.log("r");
  console.log("i");
  console.log("s");
  console.log("h");
}

// sayMyName();

function addTwoNum(x, y) {
  return x + y;
}
// let result = addTwoNum('2',3); //what if i didnt pass number here insteda i passed string then it conacatenate
// console.log(result); //23

function loginUserMessage(username) {
  if (username === undefined) {
    // console.log("Please Enter a Username");
    return;
  }
  return `${username} just logged in`;
}

// let result = loginUserMessage("shrish");
let result = loginUserMessage(); //if i didnt pass anything inside arguement section then the output is undefined just logged in
// console.log(result);

//functions and objects

const credentials = {
  username: "shrishsomawat982",
  password: "8nsid9nsdi9n",
  otp: 990029,
};

// function getCredentials(anyobj) {
//   console.log(
//     `the username and password is ${anyobj.username} and ${anyobj.password} respectively and otp is ${anyobj.otp}`
//   );
// }

// // getCredentials(credentials)
// // not necessary to declare object like upar before instead i can declarew object
// getCredentials({
//   username: "shrishbhaijindaabad",
//   password: "sjdbsauidbasudbsa",
//   otp: 49374343,
// }); //the username and password is shrishbhaijindaabad and sjdbsauidbasudbsa respectively and otp is 49374343

// lets pass array like this
const Array = [43, 4334, 2343, 26545, 5768];

function return2ndValue(getArray) {
  return getArray[3];
}

// console.log(return2ndValue(Array));



// also we can pass the array like this
console.log(return2ndValue(
  [4334,434343,6577,232445]//232445
));

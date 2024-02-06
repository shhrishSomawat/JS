//how to make promises
//promse1
const promiseOne = new Promise((resolve, reject) => {
  //do an async taask
  //DB calls, cryptography, network call
  setTimeout(() => {
    console.log("Async task is completed! ");
    resolve();
  }, 1000);
});

//promise created now we have to consume this//

promiseOne.then(() => {
  console.log("promise consumed");
});

//promise2

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});

//promise3

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log(("async task 3"));
    resolve({ userName: "shrish982 ", email: "shrishsomawat982@gmail.com" }); //but thing is how can i access this data in mt this .)
  }, 1000);
}).then((user) => {
  //   console.log("promise 3 consumed");
  console.log(user); //{ userName: 'shrish982 ', email: 'shrishsomawat982@gmail.com' }
  //jo bhi parameter resolve me pass hoga woh automatically yaha display ho jayga
});

//promise4

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "shrish982", password: "heyshrishhere" });
    } else {
      reject("ERROR: Something went wrong here");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((myUsername) => {
    console.log(myUsername);
  })
  .catch((err) => {
    console.log(err); //kuch error hogi ya rejection hoga toh idhar aajayega
  })
  .finally(() => console.log("The Promise is either resolved or rejected"));

//promise 5
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "js", password: "123" });
    } else {
      reject("ERROR: JS  went wrong");
    }
  }, 1000);
});

// i want to do this promise using async await

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//     // console.log(response);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("ERROR");
  })
  .finally();

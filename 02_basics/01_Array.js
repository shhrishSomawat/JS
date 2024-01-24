//array

// const myArr = [0,1,2,3,4]
// const myHeroes = ["shaktiman","Hatim"]

// const newArray = new Array(5,6,7,8)

// console.log(myArr.length);

// console.log(myArr+newArray); //0,1,2,3,45,6,7,8   //45 together because it concatenate like string
// console.log(newArray[0]);

//Array Methods
// myArr.push(5)  //aadded value at end
// myArr.push(6)
// myArr.push(7)

// myArr.pop() //remove element from the end

// myArr.unshift(9);
// myArr.shift();
// myArr.shift();


// console.log(myArr)

//now i want to check wethwr 9 is included in my array or not?
// console.log(myArr.includes(9)) //false bcz it is not

// //how to get the index of particular element
// console.log(myArr.indexOf(4))

// const newArr = myArr.join()
// console.log(newArr)



//Slice & Splice

const myArr = [0,1,2,3,4]

console.log("A ",myArr);
const newArray = myArr.slice(1,3); // in slice original array will not changed

console.log(newArray);

console.log("B ",myArr);

const newArray2 = myArr.splice(1,3); // in slice original array will  changed

console.log(newArray2);








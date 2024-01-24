// const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
// const dcHeroes = ["Superman", "Flash", "Batman"];

// marvelHeroes.push(dcHeroes) //array inside array
// console.log(marvelHeroes);

// console.log(marvelHeroes[3]); //["Superman","Flash","Batman"]

//for flash marvelheroes[3][1]
// const allsuperheroes = marvelHeroes.concat(dcHeroes) // we have to add them in new arraya
// it will give proper merge of two arrays

//concatenation is also not good practice here so the better way of doing this is spread opeator
// allsuperheroes = [...marvelHeroes, ...dcHeroes];

// console.log(allsuperheroes); // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

//while scrapping data we got in another forms either json object or whatever but we want those details in array format so that we can better loopin on that

// console.log(Array.isArray("Shrish")) //FALSE bcz this is not the array form

// //to conerting into array lets see...

// console.log(Array.from("Shrish")) //[ 'S', 'h', 'r', 'i', 's', 'h' ]

// //lets play with some key value pair and convert them into array

// console.log(Array.from({
//     name:"shrish",
//     age:21,
//     isSmart:true
// }).keys()) // it will give me an empty array [] like this.


// //lets we have score of my football match of four times 

// let score1  = 120;
// let score2  = 220;
// let score3  = 122;
// let score4  = 300;

// console.log(Array.of(score1,score2,score3,score4)); //[ 120, 220, 122, 300 ]


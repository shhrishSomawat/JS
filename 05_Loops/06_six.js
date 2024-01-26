// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item)=>{

//     // console.log(item);
//     return item
// })

// // console.log(values)

// //for each koi value return nahi karta but ham chahte hai kuch alag kaam karwana chahte hai array ase instead of console.log

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// //filter operation

// // let newNums = myNums.filter( (num)=> num >4) //[ 5, 6, 7, 8, 9, 10 ]

// // if i use foreach instead of filter
// // // pahle me newnums banata empty
// // const newNums=[]

// // myNums.forEach( (num)=>{
// //     if (num>4) {
// //         newNums.push(num)
// //     }
// // } )
// // console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

//   const userbooks = books.filter((book)=>book.genre === 'History')
//   console.log(userbooks); \
/*
    {
      title: 'Book Three',
      genre: 'History',
      publish: 1999,
      edition: 2007
    },
    {
      title: 'Book Seven',
      genre: 'History',
      publish: 1986,
      edition: 1996
    }
  ]*/

const userbooks = books.filter((book) => {
  return book.publish >= 1995 && book.genre === "History"
  
});
console.log(userbooks);

//now i want details of those books which are publish after 1995 and of history genre

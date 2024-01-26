// const myNums = [1,2,3,4,5,6,7,8,9]
// // const myTotal = myNums.reduce((acc,currVal)=>{
// //     console.log(`accumulator value: ${acc},current value: ${currVal}`);
// //     return acc + currVal
// // },99)

// const myTotal = myNums.reduce((acc,currval)=>{
//     return acc+currval
// },0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName:"milk",
        price:33
    },
    {
        itemName:"cigarette packet(Marlboro Advanced)",
        price:100
    },
    {
        itemName:"lemon",
        price:20
    },
    {
        itemName:"onion",
        price:100
    },
    {
        itemName:"flour",
        price:37
    },
    {
        itemName:"grain wheat",
        price:45
    },
    {
        itemName:"lays",
        price:40
    },
    {
        itemName:"sugar",
        price:330
    }
]

const totalprice = shoppingCart.reduce((acc,currval)=>{
    return acc + currval.price
},0)

console.log(totalprice);
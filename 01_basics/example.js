// const inputone = document.getElementById("firstip");
// const inputtwo = document.getElementById("secondip");

// const sum = document.getElementById("sum");

// const res = document.getElementById("res");

// const dropdown = document.getElementById("myDropdown");

// sum.addEventListener("click", () => {
//   const dropdownvalues = dropdown.value;
//   console.log(dropdownvalues);

//   const value1 = parseInt(inputone.value);
//   const value2 = parseInt(inputtwo.value);

//   if (isNaN(value1) || isNaN(value2)) {
//     res.value = "Invalid";
//   } else {
//     let result;
//     switch (dropdownvalues) {
//       case "ADDITION":
//         result = value1 + value2;
//         break;
//       case "SUBTRACTION":
//         result = value1 - value2;
//         break;
//       case "MULTIPLICATION":
//         result = value1 * value2;
//         break;

//       default:
//         result = "InvalidOperation";
//         break;
//     }
//     res.value = result;
//   }
// });

const finalresult = document.getElementById("output");
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");
const date = document.getElementById("date");
const leap = document.getElementById("leap");

const newtime = new Date();

function getyear() {
  const yearinfo = newtime.getFullYear();
  finalresult.textContent = yearinfo;
}

function getmonth() {
  const monthinfo = newtime.toLocaleString("en-US", { month: "long" });
  finalresult.textContent = monthinfo;
}

function getday() {
  // console.log(newtime.getDay());

  const whichday = newtime.getDay();

  const weeknames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayinfo = weeknames[whichday];
  finalresult.textContent = dayinfo
}

function getdate(){
  const dateinfo = newtime.getDate()
  finalresult.textContent = dateinfo
}

function getleap(){
  const yearinfo = newtime.getFullYear();
  
  if ((yearinfo % 4 === 0 && yearinfo % 100 !== 0) || (yearinfo % 400 === 0))
  {
    finalresult.textContent = 'LEAP YEAR'
  }
  else
  {
    finalresult.textContent = 'Not Leap'
  }
}
year.addEventListener("click", getyear);
month.addEventListener("click", getmonth);
day.addEventListener("click", getday);
date.addEventListener("click", getdate);
leap.addEventListener("click", getleap);

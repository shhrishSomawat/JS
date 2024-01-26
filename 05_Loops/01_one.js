//for - loop

for (let i = 1; i <= 10; i++) {
  //     if(i == 5) console.log("5 is best number") continue;
  //   console.log(i);
}

for (let i = 0; i <= 10; i++) {
  console.log(`outer loop value ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`inner loop value ${j}`);
    console.log(i + '*' + j + ' = ', i*j);
  }
}

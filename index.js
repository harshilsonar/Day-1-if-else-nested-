// nested if else check 3 number
//a,b,c
let a = 10;
let b = 20;
let c = 30;

if (a > b) {
  //condition is true
  //c
  if (a > c) {
    console.log(" a is max")
  } else {
    console.log("c is max")
  }
} else {
    //condition is false a->b 
    if (b > c) {
        console.log("b is max")
        } else {
            console.log("c is max")
            }
}

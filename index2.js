// wap nested if else check 4 number

let a = 11;
let b = 25;
let c = 35;
let d = 45;

if (a > b) {
  // condition true
  //c,d
  if (a > c) {
    if (a > d) {
      console.log("a is max");
    } else {
      console.log("d is max");
    }
  } else {
    console.log("c is max");
  }
} else {
  //b,c,d
  if (b > c) {
    if (b > d) {
      console.log("b is max");
    } else {
      console.log("d is max");
    }
  } else {
    if (b > d) {
      console.log(" b is max");
    } else {
      console.log(" d is max");
    }
  }
}

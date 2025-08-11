// wap nested if else check 5 number

let a = 11;
let b = 25;
let c = 35;
let d = 45;
let e = 55;

if (a > b) {
  if (a > c) {
    if (a > d) {
      if (a > e) {
        console.log("a is greater than all");
      } else {
        console.log("e is greater than all");
      }
    } else {
      if (d > e) {
        console.log("d is greater than all");
      } else {
        console.log("e is greater than all");
      }
    }
  } else {
    if (c > d) {
      if (c > e) {
        console.log("c is greater than all");
      } else {
        console.log("e is greater than all");
      }
    } else {
      if (d > e) {
        console.log("d is greater than all");
      } else {
        console.log("e is greater than all");
      }
    }
  }
} else {
  if (b > c) {
    if (b > d) {
      if (b > e) {
        console.log("b is greater than all");
      } else {
        console.log("e is greater than all");
      }
    } else {
      if (d > e) {
        console.log("d is greater than all");
      } else {
        console.log("e is greater than all");
      }
    }
  } else {
    if (c > d) {
      if (c > e) {
        console.log("c is greater than all");
      } else {
        console.log("e is greater than all");
      }
    } else {
      if (d > e) {
        console.log("d is greater than all");
      } else {
        console.log("e is greater than all");
      }
    }
  }
}

/* 3.1 We saw that we can pass functions as arguments to other functions. 
Your task is to write a function that takes another function as an argument and runs it.*/

function weWill() {
  console.log("We will!");
}

function rockYou(firstLine) {
  firstLine();
  firstLine();
  console.log("Rock you!");
}

rockYou(weWill);

/* 3.2 You must write a function that takes 4 arguments.

A start value
An end value
A callback to call if the number is divisible by 3
A callback to use if the number is divisible by 5
*/


function sayThree() {
  console.log("Is divisible by three");

}

function sayFive() {
  console.log("Is divisible by five");
}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  for (i = startIndex; i <= stopIndex; i++) {
    values.push(i);
    if (i % 3 === 0) {
      console.log(i);
      threeCallback();
    }

    if (i % 5 === 0) {
      console.log(i);
      fiveCallback();
    }
  }

}

threeFive(10, 15, sayThree, sayFive);

//3.3 

//Quickest solution. 

function repeatStringNumTimes(str, num) {
  // repeat after me

  if (num >= 0) {
    return str.repeat(num);
  } else return "";
}

repeatStringNumTimes("abc", 3);


//For loop solution. 

function repeatStringNumTimes(str, num) {
  // repeat after me

  if (num >= 0) {
    for (i = 0; i < num; i++) {
      return str;
    }
  } else return "";
}

repeatStringNumTimes("abc", 3);


//While loop solution. 

function repeatStringNumTimes(str, num) {
  // repeat after me

  if (num >= 0) {
    while (i < num) {
      return str;
      i++
    }
  } else return "";
}

repeatStringNumTimes("abc", 3);



//Do/While loop solution. 

function repeatStringNumTimes(str, num) {
  // repeat after me
  var i = 0;
  if (num >= 0) {

    do {
      console.log(str);
      i++
    }
    while (i < num);
  } else return "";
}

repeatStringNumTimes("abc", 3);

//3.4

var Car = function () {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Only change code below this line.

var MotorBike = function () {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 1;

};

//3.5 

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//3.6

//3.7 

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/* The first function is passed by value meaning the first value of 'x' is still stored
 seperately from the value 'val' meaning when calling 'x' it will still remain 9. 

In the second function because the function is calling the reference of 'x' in the object directly 
(i.e the stored object) then the value of x will be permanently changed by the function.
*/
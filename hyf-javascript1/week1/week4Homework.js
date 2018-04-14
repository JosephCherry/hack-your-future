console.log("I'm awesome");

var x;

console.log("At this point x has no value");

console.log("The value of x =", x);

x = 5;

console.log("x now equals 5");

console.log("The value of x =", x);

var y;

console.log("y is undefined");

console.log("y =", y);

y = "a value"; 

console.log("y's value is now 'a value' ");

console.log("y =", y);

var z = 7.25;

console.log(z);

var a = Math.round(z);

console.log(a);

var b; 

if (z > a){
    b = z;
} else {
    b = a;
}

console.log("The highest value =", b);

var anArray = [];

console.log("anArray is currently empty");

console.log(anArray);

anArray = ["liger", "dragon", "treefrog"];

console.log("An array =", anArray);

anArray.push("baby pig");

console.log(anArray);

var myString = "this is a test";

console.log(myString.length);

var x = true;
console.log(x, "Is a bool");
console.log(typeof x);
var y = "Hello";
console.log(y, "Is a string");
console.log(typeof y);
var z = [1, 2, 3];
console.log(z, "Is a array");
console.log(typeof z);
var g = 1;
console.log(g, "Is a number");
console.log(typeof g);
var t = 3; 
console.log(t, "Is a number");
console.log(typeof t);

if (typeof g == typeof t){
    console.log("SAME TYPE")
} else {
    console.log("DIFFERENT TYPE")
}

if (typeof x == typeof y){
    console.log("SAME TYPE")
} else {
    console.log("DIFFERENT TYPE")
}

var typeOfArray = [x, y, z, g, t];

for(var i = typeOfArray[0]; i < typeOfArray.length; i++){
    console.log(`index ${i} has type ${typeof typeOfArray[i]}`);
    if (typeof i == typeof x){
        console.log('x is the same type as', i)
    } else {
        console.log('x is not the same type as', i)
    }
}

x = 7;

x = x % 3;

console.log(x);

x = 21;

x = x % 3;

console.log("x will equal 0");

console.log("the value of x is", x);

x = 11;

x = x % 3;

console.log("x will equal 2");

console.log("the value of x is", x);

x = 12;

x = x % 3;

console.log("x will equal 0");

console.log("the value of x is", x);

var canAnArrayHoldDifferentTypes = [true, "Yes", 2]; 

console.log(canAnArrayHoldDifferentTypes);

if (6/0 === 10/0){
    console.log('They are the same')
}

x = 1 * Infinity;

if(x === Math.pow(10, 1000)){
    console.log('x is infinity')
}

if(x === Infinity + 1){
    console.log('x is infinity again')
}

x = 1 / x;

if(x === 0){
    console.log("x is", x)
}
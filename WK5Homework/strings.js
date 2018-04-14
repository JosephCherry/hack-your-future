// 1.1
let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString);

//1.2
console.log(myString.length);

//1.3
myString = myString.replace(/,/g, " ");

console.log(myString);

//2.1
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

favoriteAnimals.push('turtle');

//2.2
console.log(favoriteAnimals);

//2.3
favoriteAnimals.splice(1, 0, 'meerkat');

//2.4
console.log('Array will read blowfish", "meerkat", "capricorn", "giraffe", "turtle"')

//2.5
console.log(favoriteAnimals);

//2.6
console.log('The array has a length of: ', favoriteAnimals.length);

//2.7
favoriteAnimals.splice(3, 1);

//2.8 
console.log(favoriteAnimals);

//2.9
var meerkatIndex = favoriteAnimals.indexOf('meerkat');

//2.10
console.log('The item you are looking for is at index: ', meerkatIndex);

//More Javascript 
//1. 
function myFunction(a, b, c){
a + b + c
}

//2.
function colourCar(colour){
    console.log('a ' + colour + ' car')
}

colourCar("red");

//3. 
var spaceShip = {name:"Spacecrusier Awesome", model:5782, thrusters:"Superfast"};

function propertyPrinter(object){
for(property in spaceShip) {
    console.log(property, ' = ', spaceShip[property]);
}
}

propertyPrinter();

//4.

function vehicleType(colour, code){
    if(code == 1){
        code = 'Car';
    } else {
        code = 'Motorbike'
    }

    console.log('A ' + colour + ' ' + code)
}

vehicleType('red', 2);

//5. 
console.log(3 === 3 ? "yes" : "no");

//6. 

function vehicle(colour, code, age){
    if(code == 1){
        code = 'Car';
    } else if (code == 2){
        code = 'Motorbike'
    }

    if(age >= 5){
        age = 'used'
    }

    console.log('a ' + colour + age + ' car')

}

//7.

var vehicleList = ["motorbike", "caravan", "bike"];

//8. 
console.log("Third item is a", vehicleList[2]);

//9. 

function vehicle(colour, code, age){
    
    code = vehicleList[code]

    if(age === 0){
        age = 'new'
    } else {
        age = 'Used'
    }

    console.log('a ' + colour + age + code)

}

vehicle('green', 1, 0);

//10.

var s = "Amazing Joe's Garage, we service "
var punctuation = 's'
var punctuation2 = ''
var punctuation3 = ', '
   
    for(i = 0; i < vehicleList.length; i++){
        if (i == vehicleList.length-2){
            punctuation3 = ''
        }
        if (i == vehicleList.length-1){
            punctuation = 's.'
            punctuation2 = ' and '
            
        }
       s += punctuation2 + vehicleList[i] + punctuation +punctuation3;
    }
    console.log(s);    

//11. 

vehicleList.push('car');

var s = "Amazing Joe's Garage, we service "
var punctuation = 's'
var punctuation2 = ''
var punctuation3 = ', '
   
    for(i = 0; i < vehicleList.length; i++){
        if (i == vehicleList.length-2){
            punctuation3 = ''
        }
        if (i == vehicleList.length-1){
            punctuation = 's.'
            punctuation2 = ' and '
            
        }
       s += punctuation2 + vehicleList[i] + punctuation + punctuation3;
    }
    
console.log(s);

//12.
var object = {};

//13 + 14
var teachers = {terminal:"Tommy", html:"Viktor", javascript: "Wojtek"}

//15.
    let x = [1,2,3];
    let y = [1,2,3];
    let z = y;

    if (x == y){
        console.log('x & y Yes')
    } else if (x === y){
        console.log('x & y Yes & Yes')
    } else {
        console.log('x & y No')
    }

    if (y == z){
        console.log('y & z yes')
    } else if (y === z){
        console.log('y & z Yes & Yes')
    } else {
        console.log('y & z No')
    }

//16.
    let o1 = { foo: 'bar' };
    let o2 = { foo: 'bar' };
    let o3 = o2;

    o2.foo = 'bark';

    console.log(o3);

    o3.foo = 'bar';

    console.log(o2);

    let bar = 42;
    console.log(typeof typeof bar);
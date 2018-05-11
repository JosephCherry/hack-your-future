/*
Step 4. Write a function that would allow you to do this:
const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
*/

function createBase(base) {
    return function (int) {
        return base + int
    };
}

const addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

/* Bonus Write a function takes this array 
['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] 
and returns an array which only has unique values in it 
(so it removes the duplicate ones). 
Make it a 'smart' algorithm that could do it for every array (only strings/number). 
Try to make it as fast as possible!
*/

letterArray = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];


function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

var unique = letterArray.filter(onlyUnique);

console.log(unique);
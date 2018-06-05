//John = 'Covalence';
//var John;
//console.log(John);

//setName();
//function setName() {
//    var name = 'Covalence';
//    console.log(name);
//}

//console.log('just the beginning');
//let avg = findAvg(2, 2);
//console.log('i see the finish line', avg);
//function findAvg(a, b) {
//    console.log('middle child syndrome');
//    var answer = ( a + b) / 2;
//    return answer;
//}


//Scoping Section

//1 - 9

let fruits = ['apple', 'tomato', 'banana'];
let favFruit;
function printFruits() {
    favFruit = fruits[2];
    console.log(fruits[0]);
}

function printFavFruit() {
    console.log(favFruit);
}

printFruits();
printFavFruit();

//10 printFavFruit was able to log favFruit because of the let favFruit in the global section.

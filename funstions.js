//Here I start working on functions on javascript part2


//Ex1------------------------------------------
function findLongerString(str1,str2){
    var lengths = [str1.length,str2.length];
    function compareNumbers(a,b){
        if (a >= b) {
            return [a,b];
        }
        else return [b,a];
    }
    lengths = compareNumbers(lengths[0],lengths[1]);
//    console.log(lengths);
    return lengths[0];
}

function sortArray(array){
    array.sort();
//    console.log(array[0].length);
    return array.sort();
    
}

//console.log(findLongerString("lets try this", "and lets try that"));
//console.log(sortArray(["lets try this", "and lets try that"]));


//Ex2------------------------------------------

var objectArray = [["Babak","Babak.khosravifar@gmail.com"],["Ali","Ali@gmail.com"],["Hamid","hamid@gmail.com"],["John","john@gmail.com"]];


function compareByName(a,b) {
  if (a[0].length < b[0].length)
    return -1;
  if (a[0].length > b[0].length)
    return 1;
  return 0;
}

function compareByEmail(a, b) {
     if (a[1].toUpperCase() < b[1].toUpperCase())
    return -1;
  if (a[1].toUpperCase() > b[1].toUpperCase())
    return 1;
  return 0;
}

//objectArray.sort(compareByName);
//console.log(objectArray);
//objectArray.sort(compareByEmail);
//console.log(objectArray);


//Ex3------------------------------------------
var numbers = [1, -4, 2.064, 5.978, -7, 4.07, 39];
var squares = numbers.map(square);

function square(number){
    return number*number;
}


//console.log(squares);


//Ex4------------------------------------------
function makeObjects(n,name){
var numberObject= {
    num: n,
    name: name
};
return numberObject;
}

function squareNum(number){
    return number.num*number.num;
}

var numberArray = [];
numberArray.push(makeObjects(3,"Babak"));
numberArray.push(makeObjects(5,"Ali"));
numberArray.push(makeObjects(24,"Ziad"));
numberArray.push(makeObjects(32,"Kevin"));
numberArray.push(makeObjects(-13,"John"));
//console.log(numberArray);

var reformatteObjectArray = numberArray.map(function(obj){ 
   var rObj = {};
   rObj.num = obj.num*obj.num;
   rObj.name = obj.name;
   return rObj;
});
//console.log(reformatteObjectArray);




//Ex5------------------------------------------
function operationMaker(string){
    switch (string){
        case "add":
            return sum;
            break;
        case "subtract":
            return sub;
            break;
        case "mult":
            return multiply;
            break;
        case "div":
            return divide;
            break;
        default:
            return undefined;
            break;
        
    }
}

function sum(a,b){
    return a+b;
}


function sub(a,b){
    return a-b;
}


function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

var adder = operationMaker("add");
var sum1 = adder(5, 10); //15

console.log(sum1);

var multiplier = operationMaker("mult");
var product = multiplier(5, 10); // 50

console.log(product);
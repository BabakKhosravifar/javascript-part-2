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

objectArray.sort(compareByName);
console.log(objectArray);
objectArray.sort(compareByEmail);
console.log(objectArray);
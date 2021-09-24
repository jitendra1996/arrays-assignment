const arr = [1,23,45,2,4,6,8,9,10,26,99,88];

//filter() method to get a new array which has elements greater than 5; 
const hasValueGtrThanFive = arr.filter(el => el > 5);
console.log(hasValueGtrThanFive);

//map every element to an obj
const obj = {};
arr.forEach((el,index) => obj['num'+index]= el);
console.log(obj);

const mapElement = arr.map(el => ({num : el}));
console.log(mapElement);

//using reduce() method to reduce array to single value
const reduceVal = arr.reduce((prev , cur) => {
    return prev * cur ;
}, 1);

console.log(reduceVal);

//findMax number in an array;
const findMinMax = (...arg) => {
    let maxNum = arg[0];//let 1st element is max
    let minNum = arg[0];//let 1st elemnet is min
    //method to calculate min and max value 
    function calMinMaxVal(arg){
        if(arg.length === 0) return;
        if(maxNum < arg[0]){
            maxNum = arg[0];
        }
        if(minNum > arg[0]){
            minNum = arg[0];
        }
        arg.splice(0,1);
        calMinMaxVal(arg);
    }
    calMinMaxVal(arg);
    return [maxNum , minNum];
}

console.log(findMinMax(1,23,3,4,7,5,6,8,59));
console.log(findMinMax(...arr));
//using array destructuring to store min and max value
const [max , min] = findMinMax(...arr);
//console max value 
console.log(max);
//console min value
console.log(min);


//set
const newArr = [1,2,2,2,3,3,4,4,5,5,6,6,7,7,7,7];
console.log(newArr); 
const setVal = new Set(newArr);
console.log(setVal);
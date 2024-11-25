const mynums = [1,2,3]
const newNums = mynums.map((num) => num + 10).map((num) => num * 10).filter((num) => num < 150)

console.log(newNums);


const myTotal = mynums.reduce(function(acc, cur) {
    return acc + cur
}, 0)
console.log(myTotal);

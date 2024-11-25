let myArray = [0,1,2,3,4,5]

let arr1 = new Array(0,1,2,3,4,5)

console.log(arr1);

myArray.push(6)
console.log(myArray);

let dcHeros = ["Batman", "Superman", "Flash"]

let marvelHeros = ["Spiderman", "Thor", "Ironman"]

let allHeros = [...dcHeros, ...marvelHeros, ...dcHeros]
console.log(allHeros);

let anotherArray = [1,2,3,[4,5,6, [7,8,9]]]

anotherArray = anotherArray.flat(1)

console.log(anotherArray);
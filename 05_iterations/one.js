// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element === 5) {
        console.log("Best number is 5")
        break
    }
    // console.log(element)
    
}

for (let i = 0; i <= 1; i++) {
    for (let j = 0; j <= 1; j++) {
        console.log(`${i} - ${j}`)
        
    }
    
}
let myArray = [1,2,3,4,5]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}
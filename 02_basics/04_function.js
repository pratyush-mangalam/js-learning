function addTwoNumber(num1,num2){
    let result = num1 + num2
    return result
}

const result = addTwoNumber(3,4)

console.log(result);


function calculatecart(v1, v2, ...num) {
    return num
}

console.log(calculatecart(1,2,3, 4));

const user = {
    username: "pratyush",
    price: 999
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);


const chai = {
    name: "chai",
    price: 25
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
writable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
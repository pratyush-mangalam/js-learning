const myObject = {}

if (Object.keys(myObject).length !== 0) {
    console.log("Length is there")
} else {
    console.log("No length")
}

let val1;

val1 = null ?? 10

console.log(val1)
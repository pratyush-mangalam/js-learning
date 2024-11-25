let myVar = {
    name:  "Pratyush",
    age: 999,

    welcomeMessage: function() {
        console.log(`${this.name}, Welcome to my blog.`);
        // console.log(this);
    }
}

myVar.welcomeMessage()
myVar.name = "Rohan"
myVar.welcomeMessage()

console.log(this);

function randomFunc() {
    console.log(this);
}

randomFunc()
// Imidiatly invode function expresion (IIFE)

(function chai() {
    //  named iffe
    console.log(`Welcome`);
})();

// chai()

((name) => {
    console.log(`Welcome ${name}`);
})('Pratyush')

// Global scope k polution komhatane k liye use hota hai
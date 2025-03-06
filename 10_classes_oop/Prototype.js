let myName = "Pratyush    "

String.prototype.trueLength = function(){
    return this.trim().length
}


console.log(myName.trueLength());

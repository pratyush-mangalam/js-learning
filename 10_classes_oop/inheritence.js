class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCoutse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}


const chai = new Teacher("chai", "sdfsdfs@sfgsdf.com", "sdfsdfs")
console.log(chai);

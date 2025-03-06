class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const chai = new User("chai", "sdfsdf", "sdfsdf")

console.log(chai.encryptPassword());

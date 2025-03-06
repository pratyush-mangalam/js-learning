class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
    
}

const pratyush = new User("sdfasd@sdf.com", "dfsdf")

console.log(pratyush.password);

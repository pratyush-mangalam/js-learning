function setUserName(name) {
    this.username = name
}

function createUser(username, email, password) {
    setUserName.call(this, username)
    this.email = email
    this.password = password
}
const chai = new createUser("pratyush", "sdasd@sdfdf.com", "sdfsdf")
console.log(chai);

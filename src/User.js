class User {
  // User code here
  constructor(username, password, age){
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = true
  }

  login(password){}

  logout(){}
}

module.exports = User

const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(station,registeredUsers){
    this.station = station
    this.registeredUsers = registeredUsers
  }

  registerUser(username, password, age){}
  loginUser(username, password){}
  logoutUser(username){}
  createScooter(station){}
  dockScooter(scooter, station){}
  rentScooter(scooter, user){}
  print(){}

}

module.exports = ScooterApp

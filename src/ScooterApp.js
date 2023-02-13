const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(station){
    this.station=''
    this.registeredUsers={}
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

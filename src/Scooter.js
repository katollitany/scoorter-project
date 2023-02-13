const User = require("./User")

class Scooter{
  // scooter code here
  constructor(station){
    this.station = station
    this.user = user
    this.serial = serial
    this.charge = charge
    this.isBroken = isBroken
    this.nextSerial = []
  }
  rent(charge,isBroken){
    if (charge > 20 && isBroken===false){
      let removeFromStation = new Scooter(null)
      this.user = new User
    }
    if (charge <= 20){
      throw new Error("scooter needs to charge")
    } 
    if (isBroken===true){
      throw new Error("scooter needs repair")
    }
  }

  dock(station){
    this.station = station
    this.user = clearImmediate
  }

  recharge(){}

  requestRepair(){}

}


module.exports = Scooter

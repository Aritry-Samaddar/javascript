// 1..........
let car={
    brand:"", speed:"",
    accelerate: function() {
        console.log(`${this.brand} is running at ${this.speed} km/h`)
    },
    brake: function() {
        console.log(`${this.brand} is running at ${this.speed} km/h`)
    },
    describe: function() {
        console.log(`${this.brand} is running at ${this.speed} km/h`)
    }
}
car.brand="ferrari"
car.speed=200
// car.accelerate()


// 2..........
class car1 {
    constructor(brand, speed, motion) {
        this.brand=brand
        this.speed=speed
        this.motion=motion
    }
    flag = false
    getDetails() {
        console.log(this.brand,this.speed,this.motion)
    }
    accelerate(val) {
        this.speed = this.speed + val
    }
    brake(val) {
        this.speed = this.speed - val
    }
    status() {
        console.log(`${this.brand} is running at ${this.speed} km/h`)
    }
    check_motion() {
        if(this.speed > 0) console.log("Status check: The car is moving")
        if(this.speed == 0) {
            if(this.flag == true) console.log("Status check: The car has stopped")
            else console.log("Status check: The car is not moving (initial condition)")
        }
    }
    emergency_brake() {
        this.speed = 0
        this.flag = true
    }
}
const obj1 = new car1("ferrari",0,false)
// obj1.getDetails()
// console.log(obj1)
obj1.status()
obj1.check_motion()
obj1.accelerate(10)
obj1.status()
obj1.check_motion()
obj1.brake(5)
obj1.status()
obj1.check_motion()
obj1.emergency_brake()
obj1.status()
obj1.check_motion()
"use strict";
class Person {
    constructor(canwalk) {
        this.canwalk = canwalk;
        this.sayage = "default age";
    }
}
class Hero extends Person {
    //--------------------------------
    constructor(title, firstname, lastname, power, hcw) {
        super(hcw);
        this.title = title;
        this.firstname = firstname;
        this.lastname = lastname;
        this.power = power;
        // private 
        this._mission = "my secret mission";
    }
    // method
    fullname() {
        return this.firstname + ' ' + this.lastname;
    }
    get mission() {
        return this._mission;
    }
    set mission(nmission) {
        this._mission = nmission;
    }
    checkPower() {
        if (this.power < 6) {
            console.log("power is less");
        }
        else {
            console.log("hero ready to fight");
        }
    }
}
// static
Hero.version = 101;
;

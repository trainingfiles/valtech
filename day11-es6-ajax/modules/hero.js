import {Person} from "./person.js";

class Hero extends Person{
    // public 
    title = "default";
    firstname = "default";
    lastname = "default";
    power = 0;
    // private 
    #mission = "my secret mission";
    // static
    static version = 101
    //--------------------------------
    constructor(htitle, hfname, hlname, hpower, hcw){
        super(hcw)
        this.title = htitle;
        this.firstname = hfname;
        this.lastname = hlname;
        this.power = hpower;
    }
    // method
    fullname(){
        return this.firstname+' '+this.lastname;
    }
    get mission(){
        return this.#mission;
    }
    set mission(nmission){
        this.#mission = nmission;
    }

    #checkPower(){
        if(this.power < 6){
            console.log("power is less")
        }else{
            console.log("hero ready to fight")
        }
    }

};

export { Hero }
"use strict";
/*   interface iPerson{
    canwalk:string;
    sayage:string;
  }

  class Person implements iPerson{
    canwalk:string = "default";
    sayage: string = "default age"
    constructor(hcw:string){
        this.canwalk = hcw;
    }
   }
   interface iHero{
    title:string;
    firstname:string;
    lastname:string;
    power:number;
    fullname():string;
   }
    class Hero extends Person implements iHero{
        // public
        public title:string = "default";
        public firstname:string = "default";
        public lastname:string = "default";
        public power:number = 0;
        // private
        private _mission:string = "my secret mission";
        // static
        static version = 101
        //--------------------------------
        constructor(htitle:string, hfname:string, hlname:string, hpower:number, hcw:string){
            super(hcw)
            this.title = htitle;
            this.firstname = hfname;
            this.lastname = hlname;
            this.power = hpower;
        }
        // method
        fullname():string{
            return this.firstname+' '+this.lastname;
        }
        get mission():string{
            return this._mission;
        }
        set mission(nmission:string){
            this._mission = nmission;
        }

        private checkPower():void{
            if(this.power < 6){
                console.log("power is less")
            }else{
                console.log("hero ready to fight")
            }
        }

    };
 */ 

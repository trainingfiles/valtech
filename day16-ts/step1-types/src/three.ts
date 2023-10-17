  interface iPerson{
    canwalk:string;
    sayage:string;
  }

  class Person implements iPerson{
    sayage: string = "default age"
    constructor(public canwalk:string){
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
        // private 
        private _mission:string = "my secret mission";
        // static
        static version = 101
        //--------------------------------
        constructor(
            public title:string, 
            public firstname:string, 
            public lastname:string, 
            public power:number, 
            hcw:string){
            super(hcw)
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